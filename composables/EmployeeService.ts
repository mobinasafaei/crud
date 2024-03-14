import type { Employee } from "~/models"

export const useEmployees = () => {
    const updateEmployee = (e: Employee) => {
        return $fetch('/api/updateEmployee', {
            method:"put",
            query: {
                id: e.id,
            },
            body:{
                e
            }

        })
    }
    const getEmployees = (): Promise<Employee[]> => {
        return $fetch('/api/getEmployees')
    }
    const getEmployeeById = (id: string): Promise<Employee> => {
        return $fetch('/api/getEmployeeById', {
            method: "get",
            query: {
                id
            }
        })
    }
    const createEmployee = (e: Employee) => {
        return $fetch('/api/postEmplyee', {
            method: "post",
            body: e
        })
    }
    const deleteEmployee=(id:string)=>{
        return $fetch('/api/delete', {
            method: "DELETE",
            query: {
                id
            }
        })
    }

    return {
        getEmployees,
        createEmployee,
        getEmployeeById,
        updateEmployee,
        deleteEmployee
    }
}