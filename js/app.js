
import { ambilProyek } from "./api.js";

import {
  render,
  aturMemuat,
  tampilkanGalat
} from "./dom.js";

import { isiProyek } from "./state.js";
import { pasangEventFilm } from "./events.js";

async function mulai() {
  aturMemuat(true);

  try {
    const daftar = await ambilProyek();

isiProyek(daftar);

    document
      .querySelector('#filter button[data-kategori="semua"]')
      ?.classList.add("aktif");

    pasangEventFilm();
    render(daftar);
  } catch (galat) {
    tampilkanGalat(
      "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman."
    );
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();
