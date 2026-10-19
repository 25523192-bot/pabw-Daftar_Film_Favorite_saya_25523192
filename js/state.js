
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
  filmTerpilih: null
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function pilihFilm(judul) {
  const film = state.daftarProyek.find(
    (item) => item.judul === judul
  );

  if (!film) return;

  state.filmTerpilih = film;
   simpan(state);
  render(state);
}

export function tambahFavorit(id) {
  const idTeks = String(id);

  if (state.favorit.includes(idTeks)) return;

  state.favorit = [...state.favorit, idTeks];
   simpan(state);
  render(state);
}


export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}


export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));

    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}


export function pulihkan(isi) {
  if (!isi) return;

  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  render(state);
}

