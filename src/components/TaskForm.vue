<template>
    <div class="container mt-4">
        <div class="col-md-4 offset-md-4">
        <h1 class = "text-center h3 mb-3"> Create Task</h1>
        <form @submit.prevent="saveTask()" class="card card-body">
        <input type="text" class = "form-control mb-3" autofocus placeholder="Introduce un cliente" v-model="task.client" />
        <input type="text" class = "form-control mb-3" placeholder="Introduce un producto" v-model="task.product" />
        <input type="number" class = "form-control mb-3" placeholder="Introduce un precio" v-model="task.price" />
        <input type="number" class = "form-control mb-3" placeholder="Introduce una cantidad" v-model="task.quantity" />
        <input type="date" class = "form-control mb-3"  placeholder="Introduce una Fecha" v-model="task.date" />
        <button class="btn btn-primary">Guardar</button>
    </form>
    </div>

    </div>
    
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { saveTask } from '@/services/TaskService'
import { Task } from '@/Interfaces/Task';
export default defineComponent({
    data() {
        return {
            task: {} as Task,
        };
    },
    methods: {
        async saveTask() {
            const res = await saveTask(this.task)
            console.log(res)
            this.$router.push({name: 'tasks'})
        },
    },
})
</script>
