<script setup>

import { onMounted } from 'vue'

onMounted(() => {
  const storedEvents = JSON.parse(localStorage.getItem("eventos"));
  if (!storedEvents || storedEvents.length === 0) {
    const eventosIniciales = [
      {
        fecha: "2024-09-10",
        nombre: "Christmas Party",
        artista: "Taylor Swift",
        imagenUrl:
          "https://i.pinimg.com/564x/96/77/b2/9677b2342dd5b262f148183a814bc995.jpg",
        categoria: "todos",
      },
      {
        fecha: "2024-09-15",
        nombre: "Disco Party",
        artista: "Dj Fest",
        imagenUrl:
          "https://i.pinimg.com/564x/3a/70/c4/3a70c4a6c6ae32f8c7af40b2d5f47224.jpg",
        categoria: "todos",
      },
      {
        fecha: "2024-09-20",
        nombre: "Gaming Cup",
        artista: "Dj Adams",
        imagenUrl:
          "https://i.pinimg.com/564x/8c/02/12/8c0212185b5ced27af9c63cbaa1bd37a.jpg",
        categoria: "todos",
      },
      {
        fecha: "2024-09-20",
        nombre: "Halloween Party",
        artista: "Dj Adams",
        imagenUrl:
          "https://i.pinimg.com/736x/da/cd/ca/dacdcab7925bc9224303fc0471f5d15a.jpg",
        categoria: "todos",
      },
      {
        fecha: "2024-09-20",
        nombre: "Music Club",
        artista: "Dj Adams",
        imagenUrl:
          "https://i.pinimg.com/564x/a3/84/66/a3846658e277d5c1bdbaf7b70aa4e66c.jpg",
        categoria: "todos",
      },
      {
        fecha: "2024-09-20",
        nombre: "Spring Party",
        artista: "Dj Adams",
        imagenUrl:
          "https://i.pinimg.com/736x/fe/d9/ec/fed9eca98b5ebdff71624942b86beba2.jpg",
        categoria: "todos",
      },
      {
        fecha: "2024-09-20",
        nombre: "Spring Party",
        artista: "Dj Adams",
        imagenUrl:
          "https://i.pinimg.com/564x/ac/8f/15/ac8f156a07d0fdd05a05ba12c32b5650.jpg",
        categoria: "todos",
      },
      {
        fecha: "2024-09-10",
        nombre: "Music Night",
        artista: "Taylor Swift",
        imagenUrl:
          "https://i.pinimg.com/564x/7d/94/1d/7d941db5d9e6007c045bfdde8c89abd5.jpg",
        categoria: "slider",
      },
      {
        fecha: "2024-09-15",
        nombre: "Urban Music",
        artista: "Dj Fest",
        imagenUrl:
          "https://i.pinimg.com/564x/e4/d6/da/e4d6dab484df35c8f5da349510291299.jpg",
        categoria: "slider",
      },
      {
        fecha: "2024-09-20",
        nombre: "Event Night",
        artista: "Dj Adams",
        imagenUrl:
          "https://i.pinimg.com/564x/d1/fa/d9/d1fad9a1320d31bdb4391a01814a5045.jpg",
        categoria: "slider",
      },
      {
        fecha: "13 Sep",
        nombre: "Eras Tour",
        artista: "Taylor Swift",
        imagenUrl:
          "https://i.pinimg.com/564x/83/7f/a7/837fa7a5ccd874159b0bc61db31712f7.jpg",
        categoria: "recomendado",
      },
      {
        fecha: "15 Dic",
        nombre: "Special Day",
        artista: "Vinicius Sulato",
        imagenUrl:
          "https://i.pinimg.com/564x/2a/aa/ef/2aaaefee34d42f7d7fbd18597265f7ba.jpg",
        categoria: "recomendado",
      },
      {
        fecha: "22 Nov",
        nombre: "Rock",
        artista: "Bulit 88",
        imagenUrl:
          "https://i.pinimg.com/564x/1f/aa/15/1faa15a7f9ccc7ca6095b2dfa4086b1b.jpg",
        categoria: "recomendado",
      },

    ];
    localStorage.setItem("eventos", JSON.stringify(eventosIniciales));
    console.log("Eventos precargados en LocalStorage:", eventosIniciales);
  }
});
</script>

<template>
  <div>
    <router-view />
  </div>

</template>

<style></style>