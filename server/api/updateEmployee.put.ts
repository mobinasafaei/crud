export default defineEventHandler(async (event) => {
    const id = getQuery(event).id
    const employee=await readBody(event)
   
    try {
        const response= await $fetch(`https://goharp-task1.liara.run/employee/${id}`,{
            method:'PUT',
            body:employee.e
        })
        return response;
    } catch (error) {
        console.log(error)
    }

})