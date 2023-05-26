<script>
  import dayjs from 'dayjs';
  import ConciseEvent from '$lib/components/ConciseEvent.svelte';

  export let data;
  const { events } = data; 

  let upcomingEvents = events.filter((event) => dayjs(event.start).isAfter(dayjs()));
  let nextEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : false;

</script>

<main>
  <h1>Anime Curators Club Stockholm</h1>
  <h2>Next Event</h2>
  {#if nextEvent}
  <ConciseEvent {...nextEvent}/>
  {:else}
    <span>No events are planned for the future.</span>
  {/if}
</main>