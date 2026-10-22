<script setup>
import { computed, onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const filmDetail = computed(() =>
  state.daftarProyek.find(
    (film) => film.judul === state.filmTerpilih?.judul
  ) ?? state.daftarProyek[0] ?? null
)

onMounted(async () => {
  pulihkan(muat())

  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <section class="sisi">
        <section id="Bagian-1">
          <h2>Genre</h2>

          <TombolFilter />

          <h2>Daftar Film</h2>

          <DaftarProyek />

        </section>

        <section id="Bagian-2">
          <h2>Rating Saya</h2>

          <FormKontak />

        </section>
      </section>

      <section id="detail-film" class="kartu" aria-live="polite">
  <img
    v-if="filmDetail"
    :src="`/${filmDetail.gambar}`"
    :alt="`Poster film ${filmDetail.judul}`"
    loading="lazy"
  />
  <p v-else>Pilih film untuk melihat detailnya.</p>
</section>
    </main>

    <footer id="footer">
      <p>Ananda Farrel Saputra-25523192-2026</p>
    </footer>
  </div>
</template>