<script>
	export let type = 'note';
</script>

<div
class="container"
class:note={type === 'note'}
class:warn={type === 'warn'}
class:danger={type === 'danger'}
class:pointer={type === 'pointer'}
>
<slot />
</div>

<style>
	.container {
		--bg-color: rgba(224,244,252, 1.0);
		--border-color: rgba(52, 52, 171, 0.63);
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		background-color: var(--bg-color);
		border: 3px solid var(--border-color);
		color: rgb(65, 65, 65);
		border-radius: 0.25rem;
		padding: 0.5em;
	}

	.container > :global(p) {
		margin: 0;
	}
	
	.note {
		--bg-color: rgba(52, 52, 171, 0.2);
		--border-color: rgba(31, 31, 136, 0.63);
	}
	
	.warn {
		--bg-color: rgba(255, 204, 0, 0.2);
		--border-color: rgba(255, 204, 0, 0.63);
	}
	
	.danger {
		--bg-color: rgba(204, 51, 0, 0.2);
		--border-color: rgba(204, 51, 0, 0.63);
	}

	.pointer {
		--bg-color: rgba(230, 252, 224, 1.0);
		--border-color: rgb(133, 229, 106);
	}
</style>
