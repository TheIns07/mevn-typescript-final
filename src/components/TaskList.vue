<template>
    <div class="container p-5">
        <ul class="list-group">
            <li style = "cursor: pointer;" class="list-group-item list-group-item-action" v-for="(task, index) in tasks" :key="task._id"
                @click="$router.push(`/tasks/${task._id}`)">
                {{ index + 1 }}, {{ task.client }}
            </li>
        </ul>
    </div>

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
    methods: {
        async loadTasks() {
            const res = await getTasks()
            console.log(res)
        }
    },
    mounted() {
        this.loadTasks()
    },
})
</script>
