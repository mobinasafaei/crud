export default defineEventHandler(async (event) => {
    const id = getQuery(event).id
    try {
        const employee = await $fetch(`https://goharp-task1.liara.run/employee/${id}`, {
            method: "get"
        })
        console.log(employee)
        return employee;
    } catch (error) {
        console.log(error)
    }

})