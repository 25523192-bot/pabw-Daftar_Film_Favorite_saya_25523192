
import { ambilProyek } from './api.js';

export const daftarFilm = [
    {
        judul: "Godzilla Minus One",
        tahun: 2023,
        genre: "Action",
        gambar: "Godzilla minus one.jpeg",
        deskripsi: "Godzilla mengancam Jepang setelah perang."
    },
    {
        judul: "Scream",
        tahun: 1996,
        genre: "Horror, Mystery",
        gambar: "Scream.jpeg",
        deskripsi: "Sekelompok remaja diteror oleh pembunuh bertopeng."
    },
    {
        judul: "Halloween",
        tahun: 1978,
        genre: "Horror",
        gambar: "Halloween.jpeg",
        deskripsi: "Michael Myers kembali meneror pada malam Halloween."
    }
];


const profil = {
    nama: "Ananda Farrel Saputra",
    peran: "Mahasiswa Informatika yang memiliki daftar film favorite",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const jumlahFilm = 3;



console.log(typeof profil.nama);
console.log(typeof jumlahFilm);

const kalimat = `Nama saya ${profil.nama}, dan saya memiliki ${jumlahFilm} film favorite.`;

console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

console.log(buatPerkenalan(profil));

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(formatKeahlian(profil.keahlian));
console.table(daftarFilm);

const judulFilm = daftarFilm.map((film) => film.judul);

console.table(judulFilm);

const filmHorror = daftarFilm.filter((film) => film.genre.includes("Horror"));

console.table(filmHorror);

const filmPilihan = daftarFilm.find((film) => film.judul === "Scream");

console.log(filmPilihan);

const urutFilm = [...daftarFilm].sort((a, b) => a.tahun - b.tahun);

console.table(urutFilm);
console.table(daftarFilm);


async function ujiAmbilProyek() {
    try {
        const daftar = await ambilProyek();
        console.log(daftar);
    } catch (galat) {
        const pesan = document.querySelector('#kosong');
        pesan.textContent =
            'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.';
        pesan.hidden = false;
    }
}

ujiAmbilProyek();
