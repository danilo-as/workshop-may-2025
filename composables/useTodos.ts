import { useTodoStore } from '~/stores/todo'
import type { TodoItem } from '~/types'

export function useTodos() {
  const todoStore = useTodoStore()
  const { todos, completedTodos, incompleteTodos, totalTodos, totalCompleted } =
    storeToRefs(todoStore)

  // Return the store directly to maintain reactivity
  return {
    // State
    todos,

    // Getters
    completedTodos,
    incompleteTodos,
    totalTodos,
    totalCompleted,

    // Actions - bind to the store to ensure proper context
    addTodo: (title: string) => todoStore.addTodo(title),
    removeTodo: (id: string) => todoStore.removeTodo(id),
    updateTodo: (todo: TodoItem) => todoStore.updateTodo(todo),
    toggleTodo: (id: string) => todoStore.toggleTodo(id),
    clearCompleted: () => todoStore.clearCompleted()
  }
}
