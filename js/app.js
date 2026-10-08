const profil = {
    nama: "Ananda Farrel Saputra",
    peran: "Mahasiswa Informatika yang memiliki daftar film favorite",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const jumlahFilm = 3;

const daftarFilm = [
    { judul: "Godzilla Minus One", tahun: 2023, genre: "Action" },
    { judul: "Scream", tahun: 1996, genre: "Horror, Mystery" },
    { judul: "Halloween", tahun: 1978, genre: "Horror" }
];

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


