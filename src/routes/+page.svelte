<script lang="ts">
import { Button } from "$lib/components/ui/button";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<section>
    <h1>Welcome to SvelteKit</h1>
    <p class="text-3xl border border-red-500">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <Button>
        <a href="/login">Login</a>
    </Button>
    <a href="/register">Register</a>
</section>

