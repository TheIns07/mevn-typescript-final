<template>
    <div class="container p-5">
        <h3>Lista de Ventas Registradas</h3>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action p-4" v-for="(task, index) in tasks" :key="task._id"
                @click="$router.push(`/tasks/${task._id}`)">
                {{ "Index: " + index }}: {{ "Cliente: " + task.client }} {{ "Fecha: " + task.date }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Task } from '@/Interfaces/Task';
import { getTasks } from '@/services/TaskService';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "tasks-list",
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
        async loadTasks() {
            try {
                const res = await getTasks();
                this.tasks = res.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.loadTasks()
    },
})
</script>
