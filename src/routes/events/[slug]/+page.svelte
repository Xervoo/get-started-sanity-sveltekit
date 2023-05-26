<script>
    import ConciseEvent from "../../../lib/components/conciseEvent.svelte";
    import { page } from '$app/stores'
    import { error } from '@sveltejs/kit'

    export let data;

    const event = data.events.find(event => event.slug.current === $page.params.slug)
    if (event == undefined) throw error(404);
</script>

<ConciseEvent {...event} />