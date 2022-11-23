<template>
    <ul>
        <li v-for="(task, index) in tasks" :key="task._id" @click="$router.push(`/tasks/${task._id}`)">
           {{index}}, {{task.client}}, {{task.date}}
        </li>
    </ul>
</template>

<script lang="ts">
import { Task } from '@/Interfaces/Task';
import { getTasks } from '@/services/TaskService';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods:{
        async loadTasks(){
            const res = await getTasks()
            console.log(res)
        }
    },
    mounted(){
        this.loadTasks()
    },
})
</script>
