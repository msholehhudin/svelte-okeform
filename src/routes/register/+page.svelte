<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input/index.js";
  	import { Label } from "$lib/components/ui/label/index.js"; 
	import ImagesRegister from "$lib/assets/images/placeholder.svg"
  	import * as Card from "$lib/components/ui/card";
</script>

<svelte:head>
	<title>Register</title>
	<meta name="description" content="Register OkeForm" />
</svelte:head>


<div class="w-full h-screen lg:grid lg:grid-cols-2">
    <div class="hidden lg:block">
	  <img 
	  	src={ImagesRegister} 
	  	alt="RegisterImg" 
	  	width="1920" 
	  	height="1080"
    	class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
    </div>
    <div class="flex justify-center items-center h-screen">
      <Card.Root class="mx-auto max-w-sm shadow-none">
        <Card.Header>
          <Card.Title class="text-xl"> Sign Up </Card.Title>
          <Card.Description>
            Enter your information to create an account
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <div class="grid gap-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="grid gap-2">
                <Label for="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div class="grid gap-2">
                <Label for="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" class="w-full"> Create an account </Button>
            <Button variant="outline" class="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div class="mt-4 text-center text-sm">
            Already have an account?
            <a href="/login" class="underline"> Sign in </a>
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </div>