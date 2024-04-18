<script lang="ts">
  import type { User } from '$lib/services/types';
	  import { userStore } from '$lib/stores/userStore';
	  import { onDestroy } from 'svelte';

	  let currentUser:User;

		// Subscribe to changes in the store
		userStore.subscribe(value => {
		currentUser = value;
		console.log(value)
		});

		// Unsubscribe when the component is destroyed
		// onDestroy(() => {
		// unsubscribe();
		// });

		console.log('ini store',userStore)
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Login OkeForm" />
</svelte:head>

<h1>
    Ini halaman dashboard untukmu bro, {currentUser.name}
</h1>
