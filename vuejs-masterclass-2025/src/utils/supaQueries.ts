import { supabase } from "@/lib/supabaseClient";
import type { QueryData } from "@supabase/supabase-js";

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
    *,
    projects(
    id,
    name,
    description,
    slug
    )
    `)

 export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>;

 export const projectsQuery = supabase.from('projects').select();

 export type Projects = QueryData<typeof projectsQuery>;

export const projectQuery = (slug: string) => 
    supabase.from('projects').select(`
    *,
    tasks (
    id,
    name,
    description,
    status, 
    due_date
    )`)
    .eq('slug', slug)
    .single();


export type Project = QueryData<ReturnType<typeof projectQuery>>;

export const taskQuery = (id: number) =>
    supabase.from('tasks')  
    .select(`
        *,
        projects (
        id,
        name,
        slug
        )
        `)
    .eq('id', id)
    .single();

export type Task = QueryData<ReturnType<typeof taskQuery>>;