
export const state = {
    daftarProyek: [],
    kategoriAktif: "semua",
    favorit: [],
    filmTerpilih: null
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  state.kategoriAktif = "semua";
}