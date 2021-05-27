<script>
	import { page } from '$app/stores';

	export let routes = ['.','todos','blogs'];
	// your script goes here
</script>

<!-- markup (zero or more items) goes here -->

<ion-header>
	<ion-toolbar>
		<ion-title>{$page.path.slice(1)}</ion-title>
	</ion-toolbar>
	<ion-toolbar>
		<ion-title>
			{#each routes as route}
			<a sveltekit:prefetch href={route}>
				{route}
			</a>
			{/each}
		</ion-title>
	</ion-toolbar>
</ion-header>

<style>
	/* your styles go here */
	a{
		text-decoration:none;
	}
</style>
