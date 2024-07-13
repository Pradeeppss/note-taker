<script>
	import AddItem from '../components/AddItem.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<header>
	<h1>Notes</h1>
	<div class="flexbox">
		<div class="input-container">
			<input type="text" />
		</div>
	</div>
</header>
<main>
	<section class="notes-section">
		<AddItem />
		{#each data.notes as note}
			<a href={`/${note.name}`} class="note-card">
				<h2 class="note-title">
					{note.name}
				</h2>
			</a>
		{/each}
	</section>
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		gap: 2rem;
		box-shadow: 0px 0px 3px 3px var(--color-accent);
	}
	.flexbox {
		flex: 1;
		display: flex;
		justify-content: end;
	}
	.input-container {
		width: 80%;
	}
	input {
		padding: 0.5rem;
		width: max(10rem, 100%);
		border: 1px solid gray;
		border-radius: 0.3rem;
	}
	.notes-section {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		padding: 1rem;
	}
	.note-card {
		box-shadow: 0px 3px 3px 3px var(--color-accent);
		border-radius: 0.3rem;
		height: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}
	.note-title {
		font-weight: normal;
	}
</style>
