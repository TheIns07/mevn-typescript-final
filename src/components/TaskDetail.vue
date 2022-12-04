<template>
    <div class="col-md-4 offset-md-4">
        <h1 class="text-center h3 mb-3">Detalle de la Venta</h1>
        <form class="card card-body">
            <input type="text" class="form-control mb-3" v-model="currentTask.client" />
            <input type="date" class="form-control mb-3" />
            <input type="text" class="form-control mb-3" v-model="currentTask.product" />
            <input type="number" class="form-control mb-3" v-model="currentTask.quantity" />
            <input type="number" class="form-control mb-3" v-model="currentTask.price" />
            <div class="text-center d-flex flex-column ">
                <button @click="handleUpdate()" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Task } from "@/Interfaces/Task";
import { getTask, updateTask } from "@/services/TaskService";
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
            const res = (await getTask(id)).data
            this.currentTask = res
            console.log(res)
        },
        async handleUpdate() {
            if (typeof this.$route.params.id === "string") {
                const res = await updateTask(this.$route.params.id, this.currentTask)
                console.log(res)
                this.$router.push("/")
            }
        },
        async formatDate () {
             var dateFormated = moment(this.currentTask.date, "MM-DD-YYYY").valueOf();
             console.log(dateFormated)
             return dateFormated
        }
    },
    mounted() {
        if (typeof this.$route.params.id === "string")
            this.loadTask(this.$route.params.id);
    },
})
</script>
