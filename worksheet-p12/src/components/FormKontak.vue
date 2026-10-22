<template>
  <form id="form-rating" action="/simpan" method="post" novalidate>
    <p>
      <label for="nama">Nama</label>
      <input
        type="text"
        id="nama"
        name="nama"
        required
        aria-describedby="nama-galat"
      />
      <small id="nama-galat" class="pesan-galat" hidden></small>
    </p>

    <p>
      <label for="rating">Rating (1-10)</label>
      <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="10"
        required
        aria-describedby="rating-galat"
      />
      <small id="rating-galat" class="pesan-galat" hidden></small>
    </p>

    <p>
      <label for="komentar">Komentar</label>
      <input
        type="text"
        id="komentar"
        name="komentar"
        aria-describedby="komentar-galat"
      />
      <small id="komentar-galat" class="pesan-galat" hidden></small>
    </p>

    <button type="submit">Simpan</button>
  </form>
</template>