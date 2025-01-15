import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const posts = await client.schema('portfolio').from('post').select('*')
    return posts.data
})
