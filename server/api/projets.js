import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);   
    const projets = await client.schema('portfolio').from('projet').select('*')
    return projets.data
})
