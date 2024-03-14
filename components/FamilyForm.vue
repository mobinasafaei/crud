<template>
  <div>
    <div class="border rounded p-2 mt-2">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <label for="floating_first_name" class="block text-xs mb-3">name</label>
          <input class="border rounded p-1" v-model="family.name" />
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label for="floating_first_name" class="block text-xs mb-3">date of birth</label>
          <input
            class="border rounded border-slate-200 p-1"
            type="date"
            v-model="family.dateOfBirth"
          />
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <label for="floating_first_name" class="block text-xs mb-3">relation</label>
          <select v-model="family.relation" class="rounded border-slate-200">
            <option value="son">son</option>
            <option value="daughter">daughter</option>
            <option value="spouse">spouse</option>
          </select>
        </div>
        <div class="content-center items-center flex justify-center" @click="passIndex()">
          <button class="bg-red-800 h-10 w-20 rounded text-white">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Employee } from "../models/index";

const props = defineProps<{
  family: {
    name:string,
    dataOfBirth:string,
    relation:string
  }
  employee:Employee
  index:number
}>();
const { family ,employee,index } = props;

const emit = defineEmits(['deletedIndex'])
function passIndex(){
  emit("deletedIndex",index)
}
</script>