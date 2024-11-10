import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const client = await serverSupabaseClient(event);   

    const { data ,error} = await client.schema('portfolio').from('projet').select(`
      *,
      technologie ( id, name,image )
    `).eq('id', id)
    return data[0]
  })
  