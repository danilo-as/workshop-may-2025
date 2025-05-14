<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-2xl">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <h1 class="text-2xl font-bold text-gray-800 mb-4">About Todo App</h1>
        </div>

        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">Features</h2>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li>Create, edit and delete tasks</li>
            <li>Mark tasks as completed</li>
            <li>Filter tasks by status</li>
            <li>Persistent storage using localStorage</li>
            <li>Responsive design</li>
          </ul>

          <h2 class="text-xl font-semibold text-gray-700 mb-3">Technologies Used</h2>
          <ul class="list-disc pl-5 mb-6 space-y-2">
            <li>Nuxt 3 - Vue framework</li>
            <li>TypeScript - Type safety</li>
            <li>Pinia - State management</li>
            <li>TailwindCSS - Styling</li>
          </ul>

          <div class="mt-8 text-center">
            <NuxtLink
              class="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              to="/"
            >
              Back to Todos
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
