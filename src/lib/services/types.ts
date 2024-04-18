// types.ts
export type RouteMeta = {
  isPublic: boolean;
};

export type RouteItem = {
  path: string;
  name: string;
  component: any; // Adjust the type as per your Svelte component type
  icon?: string;
  meta?: RouteMeta;
  children?: RouteItem[];
  beforeEnter?: () => void;
};

export type ApiResponse = {
  code: number;
  isSuccess: boolean;
  errors: (string | Record<string, any>)[];
  message: string;
  data?: any;
};

export type User = {
  id: string;
  name: string;
  is_banned: boolean;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
};
