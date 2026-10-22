<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div class="kontrol-filter">
    <div id="filter">
      <button
        type="button"
        data-kategori="semua"
        @click="pilihKategori('semua')"
      >
        Semua
      </button>

      <button
        type="button"
        data-kategori="Action"
        @click="pilihKategori('Action')"
      >
        Action
      </button>

      <button
        type="button"
        data-kategori="Horror"
        @click="pilihKategori('Horror')"
      >
        Horror
      </button>

      <button
        type="button"
        data-kategori="Mystery"
        @click="pilihKategori('Mystery')"
      >
        Mystery
      </button>
    </div>

    <button
      type="button"
      id="atur-ulang"
      @click="aturUlang"
    >
      Atur ulang
    </button>
  </div>
</template>