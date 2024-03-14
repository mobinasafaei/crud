<template>
  <div>
    <div class="flex justify-between mb-3">
      <div class="font-bold text-2xl justify-start">Employee</div>
      <button class="flex justify-self-end" @click="goToAddEmployeePage()">add employee</button>
    </div>
    <LoadingComp v-if="loading" />
    <div v-else v-for="(employee,index) in employees" :key="index" class="m-2">
      <ListCellComp :employee="employee" @employee-deleted-id="deleteEmployee" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Employee } from "../models/index";

const employees: Ref<Employee[]> = ref([]);
const loading=ref(false);

onMounted(async()=>{
 await getEmployees();
})

async function getEmployees(){
  loading.value=true;
  const  EmployeesComposable=useEmployees()
  try{
  employees.value= await EmployeesComposable.getEmployees()
  }catch(e){
    console.log(e)
  }
  loading.value=false;
  console.log(employees.value)
  }

function goToAddEmployeePage(){
navigateTo({
  path:'/addEmployee'
})
}

async function deleteEmployee(id:string){

  const  EmployeesComposable=useEmployees();
  try{
     await EmployeesComposable.deleteEmployee(id);
  }catch(e){
    console.log(e)
  }  
  console.log('dd')
}
</script>
