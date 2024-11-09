import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);   

    const cat_technos = await client.schema('portfolio').from('categorie').select(`
      id, 
      name, 
      technologie ( id, name, image )
    `)
    return cat_technos.data
  })
  