import { defineEventHandler } from 'h3'
import jsforce from 'jsforce'

export default defineEventHandler(async () => {
  const conn = new jsforce.Connection({ loginUrl: 'https://login.salesforce.com' })

  const username = process.env.SALESFORCE_USERNAME
  const password = process.env.SALESFORCE_PASSWORD
  const token = process.env.SALESFORCE_TOKEN

  await conn.login(username, password + token)

  const result = await conn.request('/services/apexrest/ExperienceAPI')
  return result
})
