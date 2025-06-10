<template>
  <div class="w-1/3 bg-gray-400 rounded-lg p-2 border-b-2 border-gray-300">
    <div class="flex justify-between">
      <p class="text-center">title</p>
      <p>status</p>
       <p>Action</p>
    </div>
    <p v-show="listStore.loading" class="loading-spinner"></p>
    <TodoList v-for="todo in listStore.pendingTodos" :key="todo.id" :todo="todo" />
    <p v-show="!listStore.pendingTodos.length && !listStore.loading" class="text-center text-red-400">No pending todos!</p>
  </div>
</template>

<script setup>
import TodoList from '@/components/Todo/TodoList.vue'
import { useListStore } from '@/stores/ListStore'

const listStore = useListStore()
</script>
