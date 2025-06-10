<template>
  <div
    class="flex justify-between items-center mb-2 p-3 bg-white rounded shadow border border-gray-200"
  >
    <p class="text-gray-600 w-1/3">{{ todo.task }}</p>
    <input type="checkbox" v-model="todo.completed" />
    <div>
      <button @click="$emit('edit', todo.id)" class="btn-sm text-sm bg-blue-400 rounded p-1">Edit</button>
      <button @click="$emit('delete', todo.id)" class="btn-sm text-sm bg-red-400 rounded p-1 ml-2">Delete</button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  todo:Object
})
</script>
