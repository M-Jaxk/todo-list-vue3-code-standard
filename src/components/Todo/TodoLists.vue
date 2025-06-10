<template>
  <div class="w-1/3 bg-gray-400 rounded-lg p-2 border-b-2 border-gray-300">
    <div class="flex justify-between items-center text-center">
      <p>title</p>
      <p>status</p>
      <p>Action</p>
    </div>
    <p v-show="listStore.loading" class="loading-spinner"></p>
    <TodoList
      v-for="todo in listStore.todos"
      :key="todo.id"
      :todo="todo"
      @edit="goToEdit(todo.id)"
      @delete="listStore.deleteTodo(todo.id)"
    />
    <p v-show="!listStore.todos.length && !listStore.loading" class="text-center text-red-400">
      No more todos yet!
    </p>
  </div>
</template>

<script setup>
import TodoList from '@/components/Todo/TodoList.vue'
import { useRouter } from 'vue-router'
import { useListStore } from '@/stores/ListStore'
import { onMounted } from 'vue'

const router = useRouter()
const listStore = useListStore()

const goToEdit = (id) => {
  router.push({ name: 'edit', params: { id } })
}

onMounted(() => {
  if (!listStore.todos.length) {
    listStore.fill()
  }
})
</script>

<style>
.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
  margin: 16px auto;
  display: block;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
