<script setup>

import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import CascadeSelect from 'primevue/cascadeselect';
import Select from 'primevue/select';


const eventos = ref([
    {
        fecha: "2024-09-10",
        nombre: "Christmas Party",
        artista: "Taylor Swift",
        imagenUrl: "https://i.pinimg.com/564x/96/77/b2/9677b2342dd5b262f148183a814bc995.jpg",
        categoria: "todos"
    },
    {
        fecha: "2024-09-15",
        nombre: "Disco Party",
        artista: "Dj Fest",
        imagenUrl: "https://i.pinimg.com/564x/3a/70/c4/3a70c4a6c6ae32f8c7af40b2d5f47224.jpg",
        categoria: "todos"
    },
    {
        fecha: "2024-09-20",
        nombre: "Gaming Cup",
        artista: "Dj Adams",
        imagenUrl: "https://i.pinimg.com/564x/8c/02/12/8c0212185b5ced27af9c63cbaa1bd37a.jpg",
        categoria: "todos"
    },
    {
        fecha: "2024-09-20",
        nombre: "Halloween Party",
        artista: "Dj Adams",
        imagenUrl: "https://i.pinimg.com/736x/da/cd/ca/dacdcab7925bc9224303fc0471f5d15a.jpg",
        categoria: "todos"
    },
    {
        fecha: "2024-09-20",
        nombre: "Music Club",
        artista: "Dj Adams",
        imagenUrl: "https://i.pinimg.com/564x/a3/84/66/a3846658e277d5c1bdbaf7b70aa4e66c.jpg",
        categoria: "todos"
    },
    {
        fecha: "2024-09-20",
        nombre: "Spring Party",
        artista: "Dj Adams",
        imagenUrl: "https://i.pinimg.com/736x/fe/d9/ec/fed9eca98b5ebdff71624942b86beba2.jpg",
        categoria: "todos"
    },
    {
        fecha: "2024-09-20",
        nombre: "Spring Party",
        artista: "Dj Adams",
        imagenUrl: "https://i.pinimg.com/564x/ac/8f/15/ac8f156a07d0fdd05a05ba12c32b5650.jpg",
        categoria: "todos"
    },
    {
        fecha: "2024-09-10",
        nombre: "Music Night",
        artista: "Taylor Swift",
        imagenUrl: "https://i.pinimg.com/564x/7d/94/1d/7d941db5d9e6007c045bfdde8c89abd5.jpg",
        categoria: "slider"
    },
    {
        fecha: "2024-09-15",
        nombre: "Urban Music",
        artista: "Dj Fest",
        imagenUrl: "https://i.pinimg.com/564x/e4/d6/da/e4d6dab484df35c8f5da349510291299.jpg",
        categoria: "slider"
    },
    {
        fecha: "2024-09-20",
        nombre: "Event Night",
        artista: "Dj Adams",
        imagenUrl: "https://i.pinimg.com/564x/d1/fa/d9/d1fad9a1320d31bdb4391a01814a5045.jpg",
        categoria: "slider"
    },
    {
        fecha: "13 Sep",
        nombre: "Eras Tour",
        artista: "Taylor Swift",
        imagenUrl: "https://i.pinimg.com/564x/83/7f/a7/837fa7a5ccd874159b0bc61db31712f7.jpg",
        categoria: "recomendado"
    },
    {
        fecha: "15 Dic",
        nombre: "Special Day",
        artista: "Vinicius Sulato",
        imagenUrl: "https://i.pinimg.com/564x/2a/aa/ef/2aaaefee34d42f7d7fbd18597265f7ba.jpg",
        categoria: "recomendado"
    },
    {
        fecha: "22 Nov",
        nombre: "Rock",
        artista: "Bulit 88",
        imagenUrl: "https://i.pinimg.com/564x/1f/aa/15/1faa15a7f9ccc7ca6095b2dfa4086b1b.jpg",
        categoria: "recomendado"
    }
]);


//const eventos = ref([]);

const visible = ref(false);
const selectedEvent = ref({ nombre: '', artista: '', fecha: '', imagenUrl: '', categoria: '' });
const editingIndex = ref(null);

var selectedCategoria = ref('');
const categoriaSeleccionada = ref('');

const categorias = ref([
    { categoria: "slider" },
    { categoria: "recomendado" },
    { categoria: "todos" }
]);

const onCategorySelected = (categoria) => {
    selectedCategoria.value = categoria.categoria;
    selectedEvent.value.categoria = categoria.categoria;
};

onMounted(() => {
    loadEvents();
});

const loadEvents = () => {
    const storedEvents = JSON.parse(localStorage.getItem('eventos'));
    if (storedEvents) {
        eventos.value = storedEvents;
    }
};


const saveEvents = () => {
    localStorage.setItem('eventos', JSON.stringify(eventos.value));
};


const showDialog = () => {
    selectedEvent.value = { nombre: '', artista: '', fecha: '', imagenUrl: '' };
    editingIndex.value = null;
    visible.value = true;
};


const saveEvent = () => {
    if (editingIndex.value === null) {
        eventos.value.push({ ...selectedEvent.value });
    } else {

        eventos.value[editingIndex.value] = { ...selectedEvent.value };
    }
    saveEvents();
    visible.value = false;
};

// Editar un evento existente
const editEvent = (evento) => {
    editingIndex.value = eventos.value.indexOf(evento);
    selectedEvent.value = { ...evento };
    visible.value = true;
};

// Eliminar un evento
const deleteEvent = (evento) => {
    const index = eventos.value.indexOf(evento);
    if (index > -1) {
        eventos.value.splice(index, 1);
        saveEvents();
    }
};


</script>


<template>
    <div class="w-screen h-screen  div-gradiente">
        <div class="w-screen h-screen div-gradiente">
            <div class="w-screen h-16 p-8 grid grid-cols-2">
                <h1 class="text-2xl text-white font-bold ml-16 justify-center">
                    Panel De Administracion
                </h1>
                <button @click="showDialog" class="boton-nuevo bg-fuchsia-600 w-28 h-10 ">Nuevo</button>
            </div>
            <div class="card flex justify-center">
                <Dialog v-model:visible="visible" modal header="Nuevo Evento" :style="{ width: '25rem' }">
                    <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega Información del
                        Evento.</span>
                    <div class="flex items-center gap-4 mb-4">
                        <label for="nombre" class="font-semibold w-24">Evento</label>
                        <InputText id="nombre" v-model="selectedEvent.nombre" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex items-center gap-4 mb-8">
                        <label for="artista" class="font-semibold w-24">Artista</label>
                        <InputText id="artista" v-model="selectedEvent.artista" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex items-center gap-4 mb-8">
                        <label for="fecha" class="font-semibold w-24">Fecha</label>
                        <InputText id="fecha" v-model="selectedEvent.fecha" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex items-center gap-4 mb-8">
                        <label for="urlImagen" class="font-semibold w-24">Url de Imagen</label>
                        <InputText id="urlImagen" v-model="selectedEvent.imagenUrl" class="flex-auto"
                            autocomplete="off" />
                    </div>
                    <div class="flex items-center gap-4 mb-8">
                        <label for="categoria" class="font-semibold w-24">Categoria</label>
                        <Select v-model="categoriaSeleccionada" :options="categorias" optionLabel="categoria"
                            placeholder="Seleccione una categoria" class="w-full md:w-56"
                            @update:modelValue="onCategorySelected" />
                    </div>
                    <div class="flex justify-end gap-2">
                        <Button type="button" label="Cancelar" severity="secondary" @click="visible = false"></Button>
                        <Button class="bg-fuchsia-700" type="button" label="Guardar" @click="saveEvent"></Button>
                    </div>
                </Dialog>
            </div>
            <div>
                <DataTable :value="eventos" scrollable scrollHeight="600px" scrollWidth="100%"
                    class="tabla ml-7 mr-7 mt-10">
                    <Column field="nombre" header="Nombre" />
                    <Column field="artista" header="Artista" />
                    <Column field="fecha" header="Fecha" />
                    <Column field="categoria" header="categoria" />
                    <Column field="imagenUrl" header="Imagen">
                        <template #body="slotProps">
                            <img :src="slotProps.data.imagenUrl" alt="Imagen del evento"
                                class="w-16 h-16 object-cover" />
                        </template>
                    </Column>
                    <Column header="Acciones">
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                                @click="editEvent(slotProps.data)" />
                            <Button icon="pi pi-trash" class="p-button-rounded p-button-danger"
                                @click="deleteEvent(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>


<style scoped>
.tabla {
    border-radius: 8px;
}

.boton-nuevo {
    border-radius: 8px;
    margin-left: 470px;
}

.boton-nuevo:hover {
    background-color: fuchsia;
}

.div-gradiente {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 18%, rgba(92, 0, 53, 1) 100%);
}

.columna-color {
    background-color: blue;
}

.custom-dialog .p-dialog {
    background-color: #333;
    /* Color de fondo oscuro */
    color: #fff;
    /* Color del texto */
}

.custom-dialog .p-dialog .p-dialog-header {
    background-color: #444;
    /* Fondo del encabezado */
    color: #fff;
    /* Color del texto del encabezado */
}

.custom-dialog .p-dialog .p-dialog-content {
    color: #fff;
    /* Color del texto del contenido */
}

.custom-dialog .p-dialog .p-button {
    color: #fff;
    /* Color del texto de los botones */
    border-color: #444;
    /* Color del borde de los botones */
}

.custom-dialog .p-dialog .p-button.p-button-secondary {
    background-color: #555;
    /* Fondo de los botones secundarios */
    border-color: #555;
    /* Borde de los botones secundarios */
}
</style>