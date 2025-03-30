
export default defineEventHandler(async (event) => {
    const token = getRouterParam(event, 'token')
        return token + "test"
})
