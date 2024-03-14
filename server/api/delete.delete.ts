export default defineEventHandler(async (event) => {
    const id = getQuery(event).id
    try {
        const response = await $fetch(`https://goharp-task1.liara.run/employee/${id}`, {
            method: "DELETE"
        })
        return response;
    } catch (error) {
        console.log(error)
    }

})