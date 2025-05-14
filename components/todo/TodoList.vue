<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useTodos } from '~/composables/useTodos'
import type { TodoItem } from '~/types'

const { todos, totalTodos, totalCompleted, addTodo, removeTodo, updateTodo, clearCompleted } =
  useTodos()

type FilterType = 'all' | 'active' | 'completed'
const activeFilter = ref<FilterType>('all')

const filteredTodos = computed(() => {
  switch (activeFilter.value) {
    case 'active':
      return todos.value.filter((todo: TodoItem) => !todo.completed)
    case 'completed':
      return todos.value.filter((todo: TodoItem) => todo.completed)
    default:
      return todos.value
  }
})

function handleAddTodo(title: string) {
  addTodo(title)
}

function handleUpdateTodo(todo: TodoItem) {
  updateTodo(todo)
}

function handleDeleteTodo(id: string) {
  removeTodo(id)
}

function handleFilterChange(filter: FilterType) {
  activeFilter.value = filter
}

function handleClearCompleted() {
  clearCompleted()
}
</script>

<template>
  <div class="max-w-lg mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-6 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Todo App</h1>

      <TodoForm @add="handleAddTodo" />
    </div>

    <div class="divide-y divide-gray-200">
      <div v-if="filteredTodos.length === 0" class="p-6 text-center text-gray-500">
        No tasks to display
      </div>

      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @delete="handleDeleteTodo"
        @update="handleUpdateTodo"
      />
    </div>

    <TodoFilter
      :active-filter="activeFilter"
      :completed-count="totalCompleted"
      :total-count="totalTodos"
      @filter-change="handleFilterChange"
      @clear-completed="handleClearCompleted"
    />
  </div>
</template>
