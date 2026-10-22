<script setup>
import { profil } from './data.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
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
        <p>Pilih film untuk melihat detailnya.</p>
      </section>
    </main>

    <footer id="footer">
      <p>Ananda Farrel Saputra-25523192-2026</p>
    </footer>
  </div>
</template>