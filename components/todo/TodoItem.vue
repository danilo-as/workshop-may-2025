<script lang="ts" setup>
import { ref } from 'vue'
import type { TodoItem } from '~/types'

const props = defineProps<{
  todo: TodoItem
}>()

const emit = defineEmits<{
  (e: 'update', todo: TodoItem): void
  (e: 'delete', id: string): void
}>()

const isEditing = ref(false)
const editedTitle = ref(props.todo.title)

function toggleComplete() {
  emit('update', {
    ...props.todo,
    completed: !props.todo.completed
  })
}

function startEditing() {
  isEditing.value = true
  editedTitle.value = props.todo.title
}

function saveEdit() {
  if (editedTitle.value.trim()) {
    emit('update', {
      ...props.todo,
      title: editedTitle.value.trim()
    })
  }
  isEditing.value = false
}

function deleteTodo() {
  emit('delete', props.todo.id)
}
</script>

<template>
  <div class="flex items-center p-4 border-b border-gray-200 group">
    <input
      :checked="todo.completed"
      class="w-5 h-5 mr-4 rounded text-blue-500 focus:ring-blue-500"
      data-test="todo-checkbox"
      type="checkbox"
      @change="toggleComplete"
    />

    <div v-if="!isEditing" class="flex-grow">
      <span
        :class="{ 'line-through text-gray-400': todo.completed }"
        class="text-gray-800"
        @dblclick="startEditing"
      >
        {{ todo.title }}
      </span>
    </div>

    <div v-else class="flex-grow">
      <input
        ref="editInput"
        v-model="editedTitle"
        autofocus
        class="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        data-test="edit-todo-input"
        @blur="saveEdit"
        @keyup.enter="saveEdit"
      />
    </div>

    <div class="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        class="p-1 text-gray-500 hover:text-blue-500"
        data-test="edit-todo-button"
        @click="startEditing"
      >
        <span class="sr-only">Editar</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          />
        </svg>
      </button>

      <button
        class="p-1 text-gray-500 hover:text-red-500"
        data-test="delete-todo-button"
        @click="deleteTodo"
      >
        <span class="sr-only">Eliminar</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
