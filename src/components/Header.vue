<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const eventos = ref([]);
const eventosAux = ref([])
const indiceActual = ref(0);

onMounted(() => {
    loadEvents();
});

const loadEvents = () => {
    const storedEvents = JSON.parse(localStorage.getItem('eventos'));
    if (storedEvents) {
        eventosAux.value = storedEvents;
        eventos.value = eventosAux.value.filter(evento => evento.categoria === "slider");

        if (eventos.value.length > 0) {
            iniciarSlider();
        }
    } else {

    }
};

const iniciarSlider = () => {
    setInterval(() => {
        if (eventos.value.length > 0) {
            indiceActual.value = (indiceActual.value + 1) % eventos.value.length;
        }
    }, 5000);
};

const router = useRouter();
const goToAdmin = () => {
    router.push({ name: 'PanelAdministracion' });
};
</script>

<template>
    <div class="w-screen h-screen  div-gradiente">
        <div class=" w-screen h-14 p-4 grid grid-cols-2">
            <img src="/src/assets/funticket logo.svg" class="w-40 h-16 ml-20" />
            <button @click="goToAdmin"
                class=" w-12 h-12 boton-panel  text-white font-bold rounded  transition-colors duration-200 flex items-center justify-center">
                <i class="pi pi-cog  w-24"></i>
            </button>

        </div>
        <div class="bg-gradiente-div-evento grid grid-cols-2 w-auto  p-2 m-1 mt-6 items-center justify-center">
            <div class="text-center text-white">
                <h1 v-if="eventos.length > 0" class="font-bold text-6xl animacion-texto">{{ eventos[indiceActual].nombre
                    }}</h1>
                <p v-if="eventos.length > 0" class="mt-4 text-2xl animacion-texto">{{ eventos[indiceActual].artista }}
                </p>
                <p v-if="eventos.length > 0" class="mt-2 animacion-texto">{{ eventos[indiceActual].fecha }}</p>
                <p v-else class="text-2xl animacion-texto">No hay eventos disponibles</p>
                <button class="bg-fuchsia-700 p-4 mt-4 button jello-horizontal ">
                    Comprar
                </button>
            </div>
            <div v-if="eventos.length" class="image-background  mt-16"
                :style="{ backgroundImage: `url(${eventos[indiceActual].imagenUrl})` }">
            </div>
        </div>


    </div>
</template>

<style scoped>
.boton-panel {
    margin-left: 670px;
    border-radius: 64px;
}

.boton-panel:hover {
    background-color: black;
}

.div-gradiente {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 18%, rgba(92, 0, 53, 1) 100%);
}

.animacion-texto {
    transition: 1.5s;
}

.button {
    border-radius: 8px;
    width: 120px;
    height: 60px;
}

.jello-horizontal:hover {
    -webkit-animation: jello-horizontal 1s both;
    animation: jello-horizontal 1s both;
}

@-webkit-keyframes jello-horizontal {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }

    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

@keyframes jello-horizontal {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }

    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}



.image-background {
    width: 462px;
    height: 600px;
    margin-top: 12px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 4px;
    -webkit-box-shadow: -27px -12px 28px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -27px -12px 28px -3px rgba(0, 0, 0, 0.75);
    box-shadow: -27px -12px 28px -3px rgba(0, 0, 0, 0.75);
    transition: 1.5s;
}

.shadow-pop-tr {
    -webkit-animation: shadow-pop-tr 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    animation: shadow-pop-tr 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

@-webkit-keyframes shadow-pop-tr {
    0% {
        -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
    }

    100% {
        -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
        box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
        -webkit-transform: translateX(-8px) translateY(8px);
        transform: translateX(-8px) translateY(8px);
    }
}

@keyframes shadow-pop-tr {
    0% {
        -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
        -webkit-transform: translateX(0) translateY(0);
        transform: translateX(0) translateY(0);
    }

    100% {
        -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
        box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
        -webkit-transform: translateX(-8px) translateY(8px);
        transform: translateX(-8px) translateY(8px);
    }
}
</style>
