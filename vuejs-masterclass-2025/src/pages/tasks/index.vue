<script setup lang="ts">
import { tasksWithProjectsQuery } from '../../utils/supaQueries';
import type { TasksWithProjects } from '../../utils/supaQueries';
import { columns } from '@/utils/TableColumns/tasksColumns'
usePageStore().pageData.title = "Tasks"

const getTasks = async () => {
  const {data, error} = await tasksWithProjectsQuery;  
  if(error) console.log(error);
    console.log(data)
    tasks.value = data;
  };
const tasks = ref<TasksWithProjects | null>(null);
await getTasks();

</script>

<template>
     <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
