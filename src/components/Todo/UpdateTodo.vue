<template>
  <form @submit.prevent="handleUpdateTodo">
    <label for="new-task">New Task</label>
    <input
      type="text"
      v-model="todo.task"
      id="new-task"
      placeholder="Enter new task"
      class="p-1 border rounded max-w-md block"
    />
    <button
      class="float-end mt-2 p-1 btn-sm text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Update Todo
    </button>
  </form>
</template>
<script setup>
import { useListStore } from '@/stores/ListStore'
import { useRouter } from 'vue-router'
const props = defineProps({
  id: String,
})
const listStore = useListStore()
const router = useRouter()
const todo = listStore.findObjectById(parseInt(props.id, 10))

function handleUpdateTodo() {
  listStore.updateTodo(todo)
  router.push({ name: 'home' })
}
</script>
