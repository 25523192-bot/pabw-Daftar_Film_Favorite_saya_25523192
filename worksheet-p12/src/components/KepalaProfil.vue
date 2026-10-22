<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <div class="header-baris">
      <div>
        <h1>Film Favorite Saya</h1>
        <p>{{ props.profil.nama }} — {{ props.profil.peran }}</p>
      </div>

      <nav aria-label="Navigasi Utama">
        <ul>
          <li><a href="#Bagian-1">Daftar Film</a></li>
          <li><a href="#Bagian-2">Rating saya</a></li>
          <li><a href="#footer">Footer</a></li>

          <input
            type="checkbox"
            id="tema"
            class="pengalih-tema"
          />
          <label for="tema" class="tombol-tema">
            Tema gelap
          </label>
        </ul>
      </nav>
    </div>
  </header>
</template>