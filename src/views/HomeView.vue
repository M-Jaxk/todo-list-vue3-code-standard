<script setup>
import TodoLists from '@/components/Todo/TodoLists.vue'
</script>

<template>
  <main>
    <TodoLists />
  </main>
</template>


<style>
main {
  width: 100%;
  height: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center cards horizontally */
  justify-content: flex-start; /* Start from the top */
}
</style>
