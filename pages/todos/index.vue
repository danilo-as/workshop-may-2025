<script lang="ts" setup>
import { useTodos } from '~/composables/useTodos'

const { todos, totalTodos } = useTodos()
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-2xl">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold text-gray-800">Todo List</h1>
            <NuxtLink class="text-blue-500 hover:text-blue-700" to="/about"> About</NuxtLink>
          </div>
        </div>

        <div class="p-6">
          <p class="mb-4 text-gray-600">You have {{ totalTodos }} tasks in your list.</p>

          <div v-if="todos.length === 0" class="text-center py-8 text-gray-500">
            No tasks found. Start by adding a new task!
          </div>

          <ul v-else class="divide-y divide-gray-200">
            <li v-for="todo in todos" :key="todo.id" class="py-3">
              <NuxtLink :to="`/todos/${todo.id}`" class="flex items-center group">
                <span
                  :class="todo.completed ? 'bg-green-500' : 'bg-gray-300'"
                  class="w-3 h-3 rounded-full mr-3"
                ></span>
                <span :class="{ 'line-through text-gray-400': todo.completed }" class="flex-grow">
                  {{ todo.title }}
                </span>
                <span
                  class="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View details →
                </span>
              </NuxtLink>
            </li>
          </ul>

          <div class="mt-8 text-center">
            <NuxtLink
              class="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              to="/"
            >
              Manage Todos
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
