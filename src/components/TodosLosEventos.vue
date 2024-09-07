<script setup>
import { ref, onMounted } from 'vue'

const eventos = ref([]);
const eventosAux = ref([])

onMounted(() => {
    loadEvents();
});

const loadEvents = () => {
    const storedEvents = JSON.parse(localStorage.getItem('eventos'));
    if (storedEvents) {
        eventosAux.value = storedEvents;
        eventos.value = eventosAux.value.filter(evento => evento.categoria === "todos");
    }
};

</script>

<template>
    <div class="w-screen h-auto  div-main p-2 ">
        <div class="ml-14 mt-16">
            <h1 class="text-3xl font-bold text-white mt-20 ml-14">
                Todos los eventos
            </h1>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-24 ml-12 mr-12 items-center">
            <div v-for="evento in eventos" :key="evento.imagenUrl" class="flex items-center justify-center">
                <img class="img-fluid mt-4 imagen-evento wobble-hor-top" :src="evento.imagenUrl"
                    :alt="'Evento' + ' ' + evento.nombre">
            </div>
        </div>
    </div>


</template>

<style scoped>
.imagen-evento {
    width: 350px;
    height: 350px;
    border-radius: 8px;
}

.div-main {
    background: rgb(92, 0, 53);
    background: linear-gradient(0deg, rgba(92, 0, 53, 1) 0%, rgba(0, 0, 0, 1) 24%, rgba(4, 0, 2, 1) 63%, rgba(92, 0, 53, 1) 100%);

}

.wobble-hor-top:hover {
    -webkit-animation: wobble-hor-top 0.8s both;
    animation: wobble-hor-top 0.8s both;
}

@-webkit-keyframes wobble-hor-top {

    0%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-30px) rotate(6deg);
        transform: translateX(-30px) rotate(6deg);
    }

    30% {
        -webkit-transform: translateX(15px) rotate(-6deg);
        transform: translateX(15px) rotate(-6deg);
    }

    45% {
        -webkit-transform: translateX(-15px) rotate(3.6deg);
        transform: translateX(-15px) rotate(3.6deg);
    }

    60% {
        -webkit-transform: translateX(9px) rotate(-2.4deg);
        transform: translateX(9px) rotate(-2.4deg);
    }

    75% {
        -webkit-transform: translateX(-6px) rotate(1.2deg);
        transform: translateX(-6px) rotate(1.2deg);
    }
}

@keyframes wobble-hor-top {

    0%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-30px) rotate(6deg);
        transform: translateX(-30px) rotate(6deg);
    }

    30% {
        -webkit-transform: translateX(15px) rotate(-6deg);
        transform: translateX(15px) rotate(-6deg);
    }

    45% {
        -webkit-transform: translateX(-15px) rotate(3.6deg);
        transform: translateX(-15px) rotate(3.6deg);
    }

    60% {
        -webkit-transform: translateX(9px) rotate(-2.4deg);
        transform: translateX(9px) rotate(-2.4deg);
    }

    75% {
        -webkit-transform: translateX(-6px) rotate(1.2deg);
        transform: translateX(-6px) rotate(1.2deg);
    }
}
</style>