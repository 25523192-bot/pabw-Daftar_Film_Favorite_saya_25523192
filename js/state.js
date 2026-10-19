
import { render } from "./dom.js";

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
  filmTerpilih: null
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  state.kategoriAktif = "semua";
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}

export function pilihFilm(judul) {
  const film = state.daftarProyek.find(
    (item) => item.judul === judul
  );

  if (!film) return;

  state.filmTerpilih = film;
  render(state);
}

export function tambahFavorit(id) {
  const idTeks = String(id);

  if (state.favorit.includes(idTeks)) return;

  state.favorit = [...state.favorit, idTeks];
  render(state);
}
