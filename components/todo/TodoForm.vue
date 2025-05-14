<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits<(e: 'add', title: string) => void>()

const newTodoTitle = ref('')

function addTodo() {
  const title = newTodoTitle.value.trim()
  if (title) {
    emit('add', title)
    newTodoTitle.value = ''
  }
}
</script>

<template>
  <form class="mb-6" @submit.prevent="addTodo">
    <div class="flex items-center">
      <input
        v-model="newTodoTitle"
        class="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-test="new-todo-input"
        placeholder="Add a new task..."
        type="text"
      />
      <button
        class="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-test="add-todo-button"
        type="submit"
      >
        Add
      </button>
    </div>
  </form>
</template>
