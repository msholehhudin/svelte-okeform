
<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox";
  import ImagesLogin from "$lib/assets/images/placeholder.svg"
  import { apiPost } from '$lib/services/api';
  import { goto } from '$app/navigation';
  import { userStore } from '$lib/stores/userStore';
  import { page } from '$app/stores';
  import axios from "axios";

	  let email = '';
  	let password = '';
  	let remember = false;
  	let isLoading = false;
  	let errMsg = '';

	const isFormInvalid = (email: string, password: string) =>
  		!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(email) || password === '';


	const handleSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();

    isLoading = true
    console.log('ini adalah email : ', email)
    console.log('ini adalah pass : ', password)

	const invalidForm = isFormInvalid(email, password)

  try {
    const res = await axios.post("https://api.okeform.dev/v1/auth/user/login", {
      email,
      password,
      remember
    })
      .then((response) => {
        // console.log('ini response login : ', response.data.data)
        const statusCode = response?.status;
        if(statusCode){
          userStore.update(user => ({
                  ...user,
                  id: response.data.data.id,
                  name: response.data.data.name,
                  email: response.data.data.email,
                }))
              }
          goto('/dashboard')
      })

      // console.log('ini hasil post : ', res)
      // const res = await apiPost("auth/user/login", {
      //   email,
      //   password,
      //   remember
      // });

      // if (res.isSuccess) {
      //   // Assuming user is a writable store
      //           userStore.update(user => ({
      //             ...user,
      //             id: res.data.id,
      //             name: res.data.name,
      //             email: res.data.email,
      //           }))

      //       const unsubscribe = page.subscribe(($page) => {
      //       const redirectTo = ($page.query as URLSearchParams).get('redirect');

      //       if (typeof redirectTo === "string") {
      //         goto(redirectTo);
      //       } else {
      //         goto("/dashboard");
      //       }

      //       // Unsubscribe to prevent memory leaks
      //       unsubscribe();

      //     }
      //   );
      // } else {
      //   errMsg = res.message;
      //   isLoading = false
      // }
      isLoading = false
    } catch (error) {
      console.error(error);
      errMsg = "Something went wrong. Please try again later.";
      isLoading = false
    }
 
  }
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login OkeForm" />
</svelte:head>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 h-screen">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form class="grid gap-4" on:submit={handleSubmit}>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" autocomplete="email" bind:value={email} required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" autocomplete="current-password" required bind:value={password} />
          </div>

          <!-- <router-link :to="{ path: 'dashboard' }"> -->
          <div class="flex gap-2 items-center">
			<!-- <input id="remember-me" type="checkbox" bind:checked={remember} /> -->
            <Checkbox id="remember-me" bind:checked={remember} />
            <div class="grid gap-1.5 leading-none">
              <label for="remember-me"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me
              </label>
            </div>
          </div>
          <span class={`text-red-600 text-sm ${errMsg !== '' ? 'block ' : 'hidden'}`}  >{ errMsg }</span>
		<!-- //   <span class={`text-red-600 text-sm ${errMsg !== '' ? 'block' : 'hidden'}`}>{errMsg}</span> -->

          <Button type="submit" class="w-full flex gap-2" disabled={isLoading}>
            <span class={`${!isLoading ? 'block' : 'hidden'}`}>Login</span>

			<span class={`${isLoading ? 'block' : 'hidden'}`}>
				<svg class="animate-spin h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <circle class="stroke-current" cx="12" cy="12" r="10" stroke-width="4" stroke-linecap="round" stroke-dasharray="32"></circle>
				</svg>
			  </span>
          </Button>

          <Button variant="outline" class="w-full"> Login with Google </Button>
          <Button variant="outline" class="w-full">
            Login with Facebook
          </Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="/register" class="underline"> Sign up </a>
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
      <img src={ImagesLogin} alt="LoginImg" width="1920" height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
    </div>
  </div>
