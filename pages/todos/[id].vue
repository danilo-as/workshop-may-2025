<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTodos } from '~/composables/useTodos'
import type { TodoItem } from '~/types'

const route = useRoute()
const router = useRouter()
const todoId = route.params.id as string

const { todos, updateTodo, removeTodo } = useTodos()

const todo = computed(() => {
  return todos.value.find((t: TodoItem) => t.id === todoId)
})

onMounted(() => {
  if (!todo.value) {
    router.push('/todos')
  }
})

const isEditing = ref(false)
const editedTitle = ref(todo.value?.title || '')

function formatDate(date: string): string {
  return new Date(date).toLocaleString()
}

function toggleComplete() {
  if (todo.value) {
    updateTodo({
      ...todo.value,
      completed: !todo.value.completed
    })
  }
}

function startEditing() {
  isEditing.value = true
  editedTitle.value = todo.value?.title || ''
}

function saveEdit() {
  if (todo.value && editedTitle.value.trim()) {
    updateTodo({
      ...todo.value,
      title: editedTitle.value.trim()
    })
    isEditing.value = false
  }
}

function deleteTodo() {
  if (todo.value) {
    removeTodo(todo.value.id)
    router.push('/todos')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-2xl">
      <div v-if="todo" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold text-gray-800">Todo Details</h1>
            <div class="flex space-x-2">
              <NuxtLink class="text-blue-500 hover:text-blue-700" to="/todos">
                Back to List
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="p-6">
          <div class="mb-6">
            <div class="flex items-center mb-4">
              <span
                :class="todo.completed ? 'bg-green-500' : 'bg-gray-300'"
                class="w-4 h-4 rounded-full mr-3"
              ></span>
              <span class="text-gray-500">
                Status: {{ todo.completed ? 'Completed' : 'Active' }}
              </span>
              <button
                class="ml-4 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                @click="toggleComplete"
              >
                {{ todo.completed ? 'Mark as Active' : 'Mark as Completed' }}
              </button>
            </div>

            <div v-if="!isEditing" class="mb-4">
              <h2 class="text-xl font-semibold text-gray-800 mb-1">{{ todo.title }}</h2>
              <button class="text-sm text-blue-500 hover:text-blue-700" @click="startEditing">
                Edit Title
              </button>
            </div>

            <div v-else class="mb-4">
              <input
                v-model="editedTitle"
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                placeholder="Todo title"
              />
              <div class="flex space-x-2">
                <button
                  class="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  @click="saveEdit"
                >
                  Save
                </button>
                <button
                  class="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                  @click="isEditing = false"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div class="text-sm text-gray-500 mb-6">Created: {{ formatDate(todo.createdAt) }}</div>
          </div>

          <div class="border-t border-gray-200 pt-6 mt-6">
            <button
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              @click="deleteTodo"
            >
              Delete Todo
            </button>
          </div>
        </div>
      </div>

      <div v-else class="bg-white rounded-lg shadow-md p-6 text-center">
        <p class="text-gray-500 mb-4">Todo not found</p>
        <NuxtLink
          class="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          to="/todos"
        >
          Back to Todo List
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
