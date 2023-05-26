<script>

    import dayjs from 'dayjs';

    export let title;
    export let start;
    export let end;
    export let location;
    export let slug;

</script>

<div>
    <h3>{title}</h3>
    <p>Location: {location}</p>
    <p>Starts: {dayjs(start).format('DD/MM/YY HH:mm')}, Ends: {dayjs(end).format('DD/MM/YY HH:mm')}</p>
    <p>{slug.current}</p>
</div>