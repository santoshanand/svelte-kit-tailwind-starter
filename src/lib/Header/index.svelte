<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <div class="corner">
				<img src={logo} alt="SvelteKit" />
			</div>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" class="mr-5 hover:text-gray-900">Home</a>
      <a href="/about" class="mr-5 hover:text-gray-900">About</a>
    </nav>
  </div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	.corner {
		width: 3em;
		height: 3em;
	}
</style>
