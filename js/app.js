
import { ambilProyek } from './api.js';

import {
    render,
    pasangFilter,
    aturMemuat,
    tampilkanGalat
} from './dom.js';




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




async function muat() {
    aturMemuat(true);

    try {
        const daftar = await ambilProyek();

        pasangFilter(daftar);
        render(daftar);
    } catch (galat) {
        tampilkanGalat(
            'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
        );
        console.error(galat.message);
    } finally {
        aturMemuat(false);
    }
}

muat();
