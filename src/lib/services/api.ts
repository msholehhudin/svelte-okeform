import type { ApiResponse } from "./types";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { redirect } from "@sveltejs/kit";

const getUrl = (path: string, version: number | null = 1) => {
  const base =
    import.meta.env.VITE_OKEFORM_BASE_URL || "https://api.okeform.dev";

  path = path.startsWith("/") ? path.slice(1) : path;

  if (version === null) {
    return `${base}/${path}`;
  }

  return `${base}/v${version}/${path}`;
};

/**
 * Make http request to the api
 * Avoid using this function directly, use apiGet, apiPost, apiPut, apiPatch, apiDelete instead
 *
 * @param method GET | POST | PUT | PATCH | DELETE
 * @param endpoint api endpoint
 * @param body request body
 * @param apiVersion api version, omit for default version or set null for root endpoint (without version)
 * @param retryOnCsrfMissmatch only used for internal function, do not set this parameter
 */
export const makeHttp = async function (
  method: string,
  endpoint: string,
  body: null | object,
  apiVersion: number | null = 1,
  retryOnCsrfMissmatch: boolean = true
): Promise<ApiResponse> {
  try {
    // Validate method
    const validMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
    if (!validMethods.includes(method.toUpperCase())) {
      throw new Error(`Invalid method: ${method}`);
    }

    // Set request
    const request: AxiosRequestConfig = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      withXSRFToken: true,
    };

    if (body && method !== "GET") {
      request.data = body;
    }

    const res = await axios(getUrl(endpoint, apiVersion), request);
    const data = await res.data;

    const response: ApiResponse = {
      code: res.status,
      isSuccess: true,
      data: data.data ?? null,
      errors: data.errors ?? [],
      message: data.message ?? "",
    };

    return response;
  } catch (error: unknown | AxiosError) {
    if (!(error instanceof AxiosError)) {
      throw error;
      // TODO: sent to error monitoring service (e.g.: sentry, slack, etc.) later
    }

    const statusCode = error.response?.status ?? 500;

    // Handle csrf token mismatch
    if (statusCode === 419 && retryOnCsrfMissmatch) {
      await getCsrfToken();
      return await makeHttp(method, endpoint, body, apiVersion, false);
    }

    // Handle unauthorized
    if (statusCode === 401) {
      redirect(307, "/login");
    }

    // Other errors must be handled at the component level

    const response: ApiResponse = {
      code: statusCode ?? 500,
      isSuccess: false,
      errors: [],
      message: error.message,
    };

    if (error.response?.data) {
      response.errors = error.response.data.errors ?? [];
      response.message = error.response.data.message ?? "error";
    }

    return response;
  }
};

export const apiGet = async (endpoint: string, apiVersion: null | number = 1) =>
  await makeHttp("GET", endpoint, null, apiVersion);

export const apiPost = async (
  endpoint: string,
  body: object,
  apiVersion: null | number = 1
) => await makeHttp("POST", endpoint, body, apiVersion);

export const apiPut = async (
  endpoint: string,
  body: object,
  apiVersion: null | number = 1
) => await makeHttp("PUT", endpoint, body, apiVersion);

export const apiPatch = async (
  endpoint: string,
  body: object,
  apiVersion: null | number = 1
) => await makeHttp("PATCH", endpoint, body, apiVersion);

export const apiDelete = async (
  endpoint: string,
  body: null | object = null,
  apiVersion: null | number = 1
) => await makeHttp("DELETE", endpoint, body, apiVersion);

export const getCsrfToken = async () =>
  await fetch(getUrl("sanctum/csrf-cookie", null), {
    credentials: "include",
  });

export const checkAuth = async () =>
  await fetch(getUrl("auth/user/check"), {
    headers: {
      Accept: "application/json",
    },
  });
