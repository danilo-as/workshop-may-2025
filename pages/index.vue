<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <div class="flex justify-end mb-4 space-x-4">
        <NuxtLink class="text-blue-500 hover:text-blue-700" to="/todos"> View All Todos</NuxtLink>
        <NuxtLink class="text-blue-500 hover:text-blue-700" to="/about"> About</NuxtLink>
      </div>
      <TodoList />
    </div>
  </div>
</template>
