<script>
    import EventListItem from "../../lib/components/EventListItem.svelte";

    export let data;
    const { events } = data; 
</script>

{#if events }
    <ul>
        {#each events as event (event._id)}
            <EventListItem title={event.title} slug={event.slug.current}/>
        {/each}
    </ul>
{:else}
<p>Events could not be loaded</p>
{/if}