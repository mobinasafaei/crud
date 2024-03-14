export default defineEventHandler(async (event) => {
    const employee=await readBody(event)
    try {
        const response= await $fetch('https://goharp-task1.liara.run/employee',{
            method:"POST",
            body:employee
        })
        return response;
    } catch (error) {
        console.log(error)
    }

})