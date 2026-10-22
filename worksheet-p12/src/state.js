import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: 'semua',
  favorit: [],
  filmTerpilih: null,
  memuat: true,
  galat: ''
})

export function isiProyek(daftar) {
  state.daftarProyek = daftar
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori
}

export function pilihFilm(judul) {
  const film = state.daftarProyek.find(
    (item) => item.judul === judul
  )

  if (!film) return

  state.filmTerpilih = film
}

export function tambahFavorit(id) {
  const idTeks = String(id)

  if (state.favorit.includes(idTeks)) return

  state.favorit = [...state.favorit, idTeks]
}

export function simpan(nilai = state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: nilai.kategoriAktif,
    favorit: nilai.favorit
  }

  localStorage.setItem(KUNCI, JSON.stringify(isi))
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI))

    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }

    return isi
  } catch {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function pulihkan(isi) {
  if (!isi) return

  state.kategoriAktif = isi.kategoriAktif
  state.favorit = Array.isArray(isi.favorit)
    ? isi.favorit
    : []
}

export function aturUlang() {
  state.kategoriAktif = 'semua'
  state.favorit = []
  state.filmTerpilih = null
  localStorage.removeItem(KUNCI)
}