import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const client = await serverSupabaseClient(event);   

    const { data ,error} = await client.schema('portfolio').from('projet').select(`
      id, 
      nom, 
      technologie ( id, name )
    `).eq('id', id)
    return data
  })
  