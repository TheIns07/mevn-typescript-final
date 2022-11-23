<template>
    <form @submit.prevent="saveTask()">
        <input type="text" placeholder="Introduce un cliente" v-model="task.client" />
        <input type="text" placeholder="Introduce un producto" v-model="task.product" />
        <input type="number" placeholder="Introduce un precio" v-model="task.price" />
        <input type="number" placeholder="Introduce una cantidad" v-model="task.quantity" />
        <input type="date" placeholder="Introduce una Fecha" v-model="task.date" />
        <button>Guardar</button>
    </form>
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
