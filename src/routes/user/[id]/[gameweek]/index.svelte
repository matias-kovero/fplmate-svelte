<script context="module">
  export async function load({ page, fetch }) {
    const { id, gameweek } = page.params;
    const [ picks ] = await Promise.all([
      await fetch(`/user/${id}/${gameweek}.json`).then((r) => r.json())
    ]);

    return { props: { id, picks, gameweek } };
  }
</script>

<script>
  export let picks, id, gameweek;
</script>

<div>
  <p>{id} | {gameweek}</p>
  <pre>{JSON.stringify(picks, null, 2)}</pre>
</div>