<template>
  <main>
    <UpdateTodo :id="id"/>
  </main>
</template>
<script setup>
import UpdateTodo from '@/components/Todo/UpdateTodo.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>