<script>
    export let title;
	export let blurb;
	import TOC from '$lib/components/TOC.svelte';
    import EditHistory from '$lib/components/EditHistory.svelte';
    import Crumbs from '$lib/components/Crumbs.svelte';
</script>

<Crumbs />

<div class="wrapper">

    <div class="navigation">
        <TOC />
    </div>

    <div class="main">
        <div class="title-box">
            <h1>{title}</h1>
            <p class="blurb">
                {blurb}
            </p>
        </div>

        <slot />

        <EditHistory />
    </div>

    <div class="blank" />

</div>


<style lang="postcss">

    .wrapper {
		display: grid;
		justify-content: center;
        margin: 0 1em;
	}

	@media (min-width: 1200px) {
		.wrapper {
			grid-template-columns: auto min(var(--max-text-width), 100%) auto;
			grid-template-areas: 'navigation main blank';
		}
	}

	@media (max-width: 1200px) {
		.wrapper {
			grid-template-rows: auto auto;
			grid-template-areas:
				'navigation'
				'main';
		}
	}

    :global(p) {
		text-align: justify;
		text-justify: inter-word;
	}

	.blurb {
		color: grey;
	}

	p {
		text-align: justify;
	}

    .main {
        grid-area: main;
        min-width: var(--min-text-width);
        max-width: var(--max-text-width);
        display: flex;
        flex-direction: column;
    }

    .navigation {
        grid-area: navigation;
        width: 25ch;
        height: max-content;
    }

    .blank {
        grid-area: blank;
        width: 25ch;
    }

    @media (max-width: 1200px) {
        .navigation {
            width: 100%;
        }

        .blank {
            display: none;
        }
    }
</style>