
import { ambilProyek } from "./api.js";
import { state, isiProyek } from "./state.js";

import {
  aturMemuat,
  tampilkanGalat
} from "./dom.js";


import { pasangEventFilm } from "./events.js";

async function mulai() {
  aturMemuat(true);

  try {
    pasangEventFilm();
    isiProyek(await ambilProyek());
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
