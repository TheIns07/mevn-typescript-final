<template>
    <form>
        <input type="text" placeholder="Introduce un cliente"/>
        <input type="text" placeholder="Introduce un producto"/>
        <input type="number" placeholder="Introduce un precio"/>
        <input type="number" placeholder="Introduce una cantidad"/>
        <input type="date" placeholder="Introduce una Fecha"/>
        <button>Guardar</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            client: "",
            product: "",
            price: "",
            quantity: "",
            date: ""
        }
    }
})
</script>
