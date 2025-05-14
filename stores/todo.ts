import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { TodoItem } from '~/types'

export const useTodoStore = defineStore('todo', () => {
  // State with localStorage persistence
  const todos = useLocalStorage<TodoItem[]>('todos', [])

  // Getters
  const completedTodos = computed(() => todos.value.filter(todo => todo.completed))
  const incompleteTodos = computed(() => todos.value.filter(todo => !todo.completed))
  const totalTodos = computed(() => todos.value.length)
  const totalCompleted = computed(() => completedTodos.value.length)

  // Actions
  function addTodo(title: string): void {
    if (!title.trim()) return

    todos.value.push({
      id: Date.now().toString(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    })
  }

  function removeTodo(id: string): void {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function updateTodo(updatedTodo: TodoItem): void {
    const index = todos.value.findIndex(todo => todo.id === updatedTodo.id)
    if (index !== -1) {
      todos.value[index] = updatedTodo
    }
  }

  function toggleTodo(id: string): void {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  function clearCompleted(): void {
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  return {
    // State
    todos,

    // Getters
    completedTodos,
    incompleteTodos,
    totalTodos,
    totalCompleted,

    // Actions
    addTodo,
    removeTodo,
    updateTodo,
    toggleTodo,
    clearCompleted
  }
})
