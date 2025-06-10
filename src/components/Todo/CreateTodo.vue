<template>
  <form @submit.prevent="handleAddTodo">
    <label for="new-todo">New Todo</label>
    <input
      type="text"
      v-model="listStore.newTask"
      id="new-todo"
      placeholder="Enter new todo"
      class="p-1 border rounded max-w-md block"
    />
    <button
      class="float-end mt-2 p-1 btn-sm text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add Todo
    </button>
  </form>
</template>
<script setup>
import { useListStore } from '@/stores/ListStore'
import { useRouter } from 'vue-router'

const listStore = useListStore()
const router = useRouter()

function handleAddTodo() {
  listStore.addTodo(listStore.newTask)
  router.push({ name: 'home' })
}
</script>
