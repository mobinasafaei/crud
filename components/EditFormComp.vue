<template>
  <div>
    <form class="max-w-md mx-auto w-1/2 p-3" @submit.prevent="updateEmployee()">
      <div class="grid mt-3 md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <label class="block text-xs mb-3">First name</label>
          <input class="border rounded p-1" v-model="employee.firstName" required />
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label class="block text-xs mb-3">Last name</label>
          <input class="border rounded p-1" v-model="employee.lastName" required />
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <label class="block text-xs mb-3">email</label>
          <input class="border rounded p-1 border-slate-200" type="email" v-model="employee.email" />
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label class="block text-xs mb-3">date of birth</label>
          <input
            class="border rounded p-1 border-slate-200"
            type="date"
            v-model="employee.dateOfBirth"
          />
        </div>
      </div>
      <label class="font-semibold text-xl">Familly member</label>
      <button class="bg-blue-900 rounded flex text-white p-1" @click="addFamilly()">add</button>
      <FamilyForm
        v-for="(family, index) in employee.family"
        :key="index"
        :family="family"
        :employee="employee"
        :index="index"
        @deleted-index="deleteFamily"
      ></FamilyForm>
      <div class="flex justify-between">
        <button tope="submit" class="bg-blue-800 text-white p-2 m-2 rounded">Update</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Employee } from "../models/index";

const props=defineProps<{
    employee:Employee
}>();
let {employee} = props;

function deleteFamily(index:number){
  employee.family.splice(index,1)
}
function addFamilly() {
  employee.family.push({ name: "", dateOfBirth: "", relation: "son" });
}
async function updateEmployee(){
  const  EmployeesComposable=useEmployees();
  try{
     await EmployeesComposable.updateEmployee(employee)
  }catch(e){
    console.log(e)
  }
}
</script>
