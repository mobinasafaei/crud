<template>
  <div class="border rounded hover:border-slate-300 hover:shadow-sm hover:shadow-slate-300">
    <div class="p-3 flex justify-between">
      <div>{{ employee.firstName }} {{ employee.lastName }}</div>
      <div v-if="!showDetail">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-slate-400 hover:text-slate-800"
          @click="showEmployeeDetail()"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-slate-400 hover:text-slate-800"
          @click="hideEmployeeDetail()"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </div>
    </div>

    <div v-if="showDetail">
      <div class="flex justify-end pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-red-700"
          @click="passEmployeeId()"
        >
          <path
            fill-rule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <EditFormComp :employee="employee"></EditFormComp>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Employee } from "../models/index";

const props = defineProps<{
  employee:Employee
}>();
let {employee} = props;
const showDetail=ref(false);
const detailRequested=ref(false);

async function showEmployeeDetail(){
if(!detailRequested.value){
 await getEmployeeDetail()
 detailRequested.value=true;
}
showDetail.value=true;
}

async function getEmployeeDetail(){
  const  EmployeesComposable=useEmployees()
  try{
     employee= await EmployeesComposable.getEmployeeById(employee.id);
  }catch(e){
    console.log(e)
  }
}

function hideEmployeeDetail(){
  showDetail.value=!showDetail.value
}

const emit = defineEmits(['employeeDeletedId'])
function passEmployeeId(){
  emit("employeeDeletedId",employee.id)
}
</script>
