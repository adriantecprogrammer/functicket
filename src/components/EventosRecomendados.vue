<script setup>

import { ref, onMounted } from "vue";

/*
const eventos = [
    {
        fecha: "13 Sep",
        nombre: "Eras Tour",
        artista: "Taylor Swift",
        imagenUrl: "/src/assets/erastour.png"
    },
    {
        fecha: "15 Dic",
        nombre: "Special Day",
        artista: "Vinicius Sulato",
        imagenUrl: "/src/assets/specialday.png"
    },
    {
        fecha: "22 Nov",
        nombre: "Rock",
        artista: "Bulit 88",
        imagenUrl: "/src/assets/rock.png"
    }
];
*/
const eventos = ref([]);
const eventosAux = ref([])

onMounted(() => {
    loadEvents();
});

const loadEvents = () => {
    const storedEvents = JSON.parse(localStorage.getItem('eventos'));
    if (storedEvents) {
        eventosAux.value = storedEvents;
        eventos.value = eventosAux.value.filter(evento => evento.categoria === "recomendado");
    }
};


</script>

<template>
    <div class="w-screen h-screen flex flex-col div-main p-2">
        <div class="ml-14">
            <h1 class="text-3xl font-bold text-white mt-7">
                ¡Diversión asegurada!
            </h1>
        </div>
        <div class="flex justify-center mt-12 ml-6 mr-6">
            <Carousel :value="eventos" :numVisible="2" :numScroll="1" circular :autoplayInterval="4000"
                class="p-carousel-next p-carousel-prev">
                <template #item="slotProps">
                    <div class="flex flex-col items-center justify-center">
                        <img  :src="slotProps.data.imagenUrl" alt="Imagen del evento"
                            class="carousel-item object-cover rounded-md shadow-lg ">
                        <div class="mt-8 text-center text-white">
                            <h2 class="text-2xl font-bold">{{ slotProps.data.nombre }}</h2>
                            <p class="text-lg">{{ slotProps.data.artista }}</p>
                            <p class="text-sm">{{ slotProps.data.fecha }}</p>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>

</template>

<style scoped>


.carousel-item {
    width: 24rem;
    height: 32rem;
}

/* Cambia el color de las flechas a blanco */
.p-carousel-prev,
.p-carousel-next {
    color: white;

}



.div-main {
    background: rgb(92, 0, 53);
    background: linear-gradient(0deg, rgba(92, 0, 53, 1) 8%, rgba(0, 0, 0, 1) 67%);
}
</style>