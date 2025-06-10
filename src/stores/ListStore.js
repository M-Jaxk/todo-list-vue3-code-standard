import { defineStore } from 'pinia'
import { useFlash } from '@/composeable/useFlash'
export let useListStore = defineStore('store', {
  state() {
    return {
      todos: [],
      loading: true,
      newTask: '',
    }
  },
  actions: {
    async fill() {
      let list = await import('@/list.json')
      this.$state = list.default
      this.loading = false
      //   console.log('ListStore: fill', this.$state)
    },
    addTodo(todo) {
      let { successFlash, errorFlash } = useFlash()
      if (!todo || todo.trim() === '') {
        errorFlash('Please enter a valid todo item.')
        return
      }
      this.todos.push({
        id: this.todos.length + 1,
        task: todo,
        completed: false,
      })
      this.newTask = ''
      successFlash('Todo added successfully!')
    },
    editTodo(todo) {
      let { successFlash, errorFlash } = useFlash()
      if (!todo || todo.trim() === '') {
        errorFlash('Please enter a valid todo item.')
        return
      }
    },
    deleteTodo(id) {
      let { successFlash, errorFlash } = useFlash()
      if (!id) {
        errorFlash('Please provide a valid todo ID.')
        return
      }
      this.todos = this.todos.filter((t) => t.id !== id)
      successFlash('Todo deleted successfully!')
    },
  },
  getters: {
    pendingTodos() {
      return this.todos.filter((todo) => !todo.completed)
    },
    doneTodos() {
      return this.todos.filter((todo) => todo.completed)
    },
  },
})
