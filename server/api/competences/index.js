import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);   

    const cat_technos = await client.schema('portfolio').from('competence').select(`
      id, 
      name, 
      niveau ( id, name,description ),
      projet(*)
    `)
    return cat_technos.data
  })
  