<script setup lang="ts">
usePageStore().pageData.title = "Homepage"
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/projects">Go to projects</RouterLink>
  </div>
</template>
