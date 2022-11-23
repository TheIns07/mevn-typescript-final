<template>

    <div class="col-md-4 offset-md-4">
        <h1 class="text-center h3 mb-3">Task Detail</h1>
        <form @submit.prevent="handleUpdate()" class="card card-body">
        <input type="text" class="form-control mb-3" v-model="currentTask.client"/>
        <input type="text" class="form-control mb-3" v-model="currentTask.date"/>
        <input type="text" class="form-control mb-3" v-model="currentTask.product"/>
        <input type="text" class="form-control mb-3" v-model="currentTask.quantity"/>
        <input type="text" class="form-control mb-3" v-model="currentTask.price"/>
        <button class="btn btn-primary" >Update</button>
        
    </form>
    <div class="text-center">
        <button @click="handleDelete()" class="btn btn-danger">Delete</button>
    </div>
    </div>
   
    
</template>

<script lang="ts">
import { Task } from "@/Interfaces/Task";
import { deleteTasks, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data (){
        return {
            currentTask: {} as Task
        }
    },
    methods: {
        async loadTask(id: string) {
            const res = await getTask(id)
            this.currentTask = res.data
        },
        async handleUpdate(){
            if (typeof this.$route.params.id === "string"){
               const res = await updateTask(this.$route.params.id, this.currentTask)
               console.log(res)
               this.$router.push("/")
            }
        },
        async handleDelete(){
            if (typeof this.$route.params.id === "string"){
                const res = deleteTasks(this.$route.params.id)
                console.log(res)
                this.$router.push("/")
            }
        }
    },
    mounted() {
        if (typeof this.$route.params.id === "string")
            this.loadTask(this.$route.params.id);
    }
})
</script>
