<template>
    <div class="container p-5">
        <h3>Lista de Ventas Registradas</h3>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action p-4" v-for="(task, index) in tasks" :key="task._id"
                >
                {{ "Index: " + index }}: {{ "Cliente: " + task.client }} {{ "Fecha: " + task.date }}
                <button @click="$router.push(`/tasks/${task._id}`)" class="btn btn-primary">Editar</button>
                <button @click="handleDelete(task._id)" class="btn btn-danger">Borrar</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Task } from '@/Interfaces/Task';
import { deleteTask, getTasks } from '@/services/TaskService';
import { defineComponent } from 'vue';
export default defineComponent({
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
        async handleDelete(id: string) {
            try {
                if (typeof this.$route.params.id === "string") {
                    await deleteTask(id);
                    this.$router.push("/");
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.loadTasks()
    },
})
</script>
