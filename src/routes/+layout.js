import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'larh4akv',
    dataset: 'production',
    apiVersion: '2023-05-25',
    useCdn: false
})

export async function load({ }) {
    
    const fetchEvents = async () => await client.fetch('*[_type == "event"] | order(start desc) {_id, title, start, end, location, slug}')
    
    return {
        events: fetchEvents(),
    };
}