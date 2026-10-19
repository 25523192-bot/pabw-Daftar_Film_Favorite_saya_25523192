
import { ambilProyek } from "./api.js";
import { isiProyek, muat, pulihkan } from "./state.js";

import {
  aturMemuat,
  tampilkanGalat
} from "./dom.js";


import { pasangEventFilm } from "./events.js";

async function mulai() {
  pulihkan(muat());
  pasangEventFilm();
  aturMemuat(true);

  try {
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
