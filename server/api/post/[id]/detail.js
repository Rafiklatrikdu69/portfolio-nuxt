import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const client = await serverSupabaseClient(event);

    const { data ,error} = await client.schema('portfolio').from('post').select(`
      detail_post ( id, url_readme )
    `).eq('id', id)
    return data[0]
})
