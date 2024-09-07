<script setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';

// Definir los elementos del Menubar
const items = ref([
    {
        label: ' Home ',
        command: () => { console.log('Home clicked'); }
    },
    {
        label: ' About ',
        command: () => { console.log('About clicked'); }
    },
    {
        label: ' Contact ',
        command: () => { console.log('Contact clicked'); }
    }
]);
</script>

<template>
    
    <div class="bg-custom-gradient text-white items-center justify-center">
        <Menubar :model="items" />
    </div>
</template>

<style>
</style>