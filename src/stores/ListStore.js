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
    },
    findObjectById(id) {
      let { errorFlash } = useFlash()
      const index = this.todos.findIndex((t) => t.id === id)
      if (index === -1) {
        errorFlash('Todo not found.')
        return
      }
      return this.todos.find((todo) => todo.id === id)
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
    updateTodo(updatedTodo) {
      let { successFlash, errorFlash } = useFlash()
      if (!updatedTodo || updatedTodo.task.trim() === '') {
        errorFlash('Please enter a valid todo item.')
        return
      }
      const index = this.todos.findIndex((t) => t.id === updatedTodo.id)
      if (index === -1) {
        errorFlash('Todo not found.')
        return
      }
      this.todos[index] = { ...this.todos[index], ...updatedTodo }
      successFlash('Todo updated successfully!')
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
