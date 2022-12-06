<template>
    <div class="container p-4">
        <h3>Lista de Ventas Registradas</h3>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action p-3" v-for="(task, index) in tasks" :key="task._id">
                <div>
                    <p class="lead">
                        {{ "#" + index }}: {{ "Cliente: " + task.client }} {{ "Producto: " + task.product }} {{
                                "Cantidad: " + task.price
                        }}
                    </p>
                    <div class="btn-group p-2">
                        <button @click="$router.push(`/tasks/${task._id}`)" class="btn btn-primary">Editar</button>
                        <button @click="handleDelete(task._id) " class="btn btn-danger">Borrar</button>
                    </div>
                </div>
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
                console.log(id)
                await deleteTask(id);
                window.location.reload();
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
