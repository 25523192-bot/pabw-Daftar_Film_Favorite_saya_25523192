
import { state } from "./state.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");


const detailFilm = document.querySelector("#detail-film");


function buatKartu(film) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.dataset.judul = film.judul;
  li.tabIndex = 0;
  li.setAttribute("role", "button");
  li.setAttribute("aria-label", `Tampilkan poster ${film.judul}`);
  

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = film.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${film.tahun}`;

  const genre = document.createElement("p");
  genre.textContent = `Genre: ${film.genre}`;

  li.append(judul, tahun, genre);

  if (film.deskripsi) {
    const deskripsi = document.createElement("p");
    deskripsi.className = "kartu__deskripsi";
    deskripsi.textContent = film.deskripsi;
    li.append(deskripsi);
  }

  return li;
}



export function renderDetail(film) {
  detailFilm.textContent = "";

  if (!film) {
    detailFilm.hidden = true;
    return;
  }

  detailFilm.hidden = false;

  const gambar = document.createElement("img");
  gambar.src = film.gambar;
  gambar.alt = `Poster film ${film.judul}`;
  gambar.loading = "lazy";

  detailFilm.append(gambar);
}





export function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.textContent = "Belum ada data.";
    kosong.hidden = false;
    renderDetail(null);
    return;
  }

  kosong.hidden = true;

  const filmAktif = daftar.find(
    (film) => film.judul === state.filmTerpilih?.judul
  ) ?? daftar[0];

  renderDetail(filmAktif);

  daftar.forEach((film) => {
    const kartu = buatKartu(film);

    if (film.judul === filmAktif.judul) {
      kartu.classList.add("terpilih");
    }

    wadah.append(kartu);
  });
}






export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  kosong.textContent = pesan;
  kosong.hidden = false;
}





