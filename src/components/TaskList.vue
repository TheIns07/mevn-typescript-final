<template>
    <div class="container p-5">
        <h3>Lista de Ventas Registradas</h3>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action p-4" 
            v-for="(task, index) in tasks" :key="task._id" >
                {{ "Index: "+ index }}: {{ "Cliente: "+task.client }} {{ "Fecha: "+task.date }}
                <button @click="$router.push(`/tasks/${task._id}`)" class="btn btn-primary">Update</button>
                <button @click="handleDelete(task._id)" class="btn btn-danger">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Task } from '@/Interfaces/Task';
import { deleteTasks, getTasks } from '@/services/TaskService';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
        async loadTasks() {
            const res = (await getTasks()).data
            this.tasks = res
        },
        async handleDelete(id: string) {
                const res = await deleteTasks(id)
                console.log(res)
                this.$router.push("/")
        }
    },
    mounted() {
        this.loadTasks()
    },
})
</script>
