<script setup>
import { computed } from 'vue'
import { state, pilihFilm, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif)
)
</script>

<template>
  <p v-if="state.memuat">Memuat data...</p>
  <p v-else-if="state.galat">{{ state.galat }}</p>
  <p v-else-if="tampil.length === 0">Belum ada data.</p>

  <ul v-else id="daftar">
    <li
  v-for="film in tampil"
  :key="film.id"
  class="kartu"
  @click="pilihFilm(film.judul)"
>
      <h3 class="kartu__judul">{{ film.judul }}</h3>
      <p>Tahun: {{ film.tahun }}</p>
      <p>Genre: {{ film.genre }}</p>
      <p v-if="film.deskripsi" class="kartu__deskripsi">
        {{ film.deskripsi }}
      </p>

      <button
  type="button"
  class="favorit"
  :aria-label="`Favorit ${film.judul}`"
  :aria-pressed="state.favorit.includes(String(film.id))"
  @click.stop="tambahFavorit(film.id)"
>
  {{ state.favorit.includes(String(film.id)) ? '★' : '☆' }}
</button>
    </li>
  </ul>
</template>