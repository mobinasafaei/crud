export default defineEventHandler(async () => {
    try {
        const employees = await $fetch('https://goharp-task1.liara.run/employee',{
            method:"get"
        })
        return employees;
    } catch (error) {
        console.log(error)
    }

})