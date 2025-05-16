<script setup lang="ts">
</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route}">
      <!-- If the Component component is present render the Suspense. "timeout" causes the load fallback template to load inbetween asynchronous loading states -->
      <Suspense v-if="Component" timeout="0">
      <Component :is="Component" :key="route.name"></Component>
        <template #fallback>Loading...</template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>