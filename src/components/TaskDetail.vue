<template>
    <div class="col-md-4 offset-md-4">
        <h1 class="text-center h3 mb-3">Detalle de la Venta</h1>
        <form @submit.prevent="handleUpdate()" class="card card-body">
            <input type="text" class="form-control mb-3" v-model="currentTask.client" />
            <input type="text" class="form-control mb-3" v-model="currentTask.date" />
            <input type="text" class="form-control mb-3" v-model="currentTask.product" />
            <input type="number" class="form-control mb-3" v-model="currentTask.quantity" />
            <input type="number" class="form-control mb-3" v-model="currentTask.price" />
            <button class="btn btn-primary">Update</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Task } from "@/Interfaces/Task";
import {  getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";
import moment from 'moment'


export default defineComponent({
    data() {
        return {
            currentTask: {} as Task
        }
    },
    methods: {
        async loadTask(id: string) {
            try {
                const { data } = await getTask(id);
                this.currentTask = data;
            } catch (error) {
                console.error(error);
            }
        },
        async handleUpdate() {
            try {
                if (typeof this.$route.params.id === "string") {
                    await updateTask(this.$route.params.id, this.currentTask)
                    this.$router.push("/")
                }
            } catch (error) {
                console.error(error);
            }
        },
        async formatDate() {
            return moment(this.currentTask.date, "MM-DD-YYYY").valueOf();
        }
        
    },
    mounted() {
        if (typeof this.$route.params.id === "string")
            this.loadTask(this.$route.params.id);
    },
})
</script>
