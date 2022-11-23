<template>
    <h1>Task Detail</h1>
    <form @submit.prevent="handleUpdate()">
        <input type="text" v-model="currentTask.client"/>
        <input type="text" v-model="currentTask.date"/>
        <input type="text" v-model="currentTask.product"/>
        <input type="text" v-model="currentTask.quantity"/>
        <input type="text" v-model="currentTask.price"/>
        <button>Update</button>
        
    </form>
    <button @click="handleDelete()">Delete</button>
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
