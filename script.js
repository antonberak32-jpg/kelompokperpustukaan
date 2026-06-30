/* ============================================================
   PUSTAKA NUSANTARA — SCRIPT.JS
   Data buku, render, filter, modal detail & pinjam
   ============================================================ */

// ===== DATA BUKU =====
const dataBuku = [
  {
    id: 1,
    judul: "Bumi Manusia",
    pengarang: "Pramoedya Ananta Toer",
    kategori: "sastra",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388938990i/1398898.jpg",
    tahun: 1980,
    penerbit: "Hasta Mitra",
    halaman: 336,
    isbn: "978-979-961-013-1",
    rating: 4.8,
    stok: 3,
    sinopsis: "Novel pertama dari Tetralogi Buru karya Pramoedya Ananta Toer. Mengisahkan Minke, seorang pemuda Jawa terpelajar pada masa penjajahan Belanda yang jatuh cinta kepada Annelies, anak seorang perempuan bernama Nyai Ontosoroh. Karya agung yang menggambarkan perjuangan kemanusiaan dan cinta di tengah sistem kolonial yang penuh ketidakadilan."
  },
  {
    id: 2,
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    kategori: "fiksi",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388212311i/1362193.jpg",
    tahun: 2005,
    penerbit: "Bentang Pustaka",
    halaman: 529,
    isbn: "978-979-1227-00-1",
    rating: 4.7,
    stok: 5,
    sinopsis: "Kisah persahabatan sepuluh anak dari keluarga miskin di Pulau Belitung yang berjuang mendapatkan pendidikan. Dipenuhi semangat, mimpi, dan keindahan alam Belitung, novel ini telah menjadi salah satu karya fiksi terlaris dalam sejarah sastra Indonesia."
  },
  {
    id: 3,
    judul: "Sapiens: Riwayat Singkat Umat Manusia",
    pengarang: "Yuval Noah Harari",
    kategori: "sejarah",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420585954i/23692271.jpg",
    tahun: 2011,
    penerbit: "KPG (Kepustakaan Populer Gramedia)",
    halaman: 512,
    isbn: "978-602-481-230-6",
    rating: 4.6,
    stok: 2,
    sinopsis: "Sebuah perjalanan menakjubkan menelusuri sejarah umat manusia sejak 70.000 tahun lalu hingga era revolusi ilmiah. Harari mengajak pembaca merenungkan bagaimana Homo sapiens menjadi spesies paling dominan di bumi dan ke mana perjalanan kita selanjutnya."
  },
  {
    id: 4,
    judul: "Clean Code",
    pengarang: "Robert C. Martin",
    kategori: "teknologi",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    tahun: 2008,
    penerbit: "Prentice Hall",
    halaman: 431,
    isbn: "978-0-13-235088-4",
    rating: 4.5,
    stok: 4,
    sinopsis: "Panduan fundamental bagi para pengembang perangkat lunak untuk menulis kode yang bersih, efisien, dan mudah dipelihara. Dipenuhi studi kasus dan prinsip-prinsip praktis yang dapat langsung diterapkan dalam pekerjaan sehari-hari."
  },
  {
    id: 5,
    judul: "Filosofi Teras",
    pengarang: "Henry Manampiring",
    kategori: "bisnis",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555079553i/44890908.jpg",
    tahun: 2018,
    penerbit: "Kompas",
    halaman: 296,
    isbn: "978-979-709-992-0",
    rating: 4.6,
    stok: 6,
    sinopsis: "Panduan praktis menerapkan Filosofi Stoa dalam kehidupan modern Indonesia. Henry Manampiring memadukan kebijaksanaan filsuf Yunani-Romawi dengan konteks keseharian kita untuk mengatasi stres, kecemasan, dan meraih hidup yang lebih tenang."
  },
  {
    id: 6,
    judul: "A Brief History of Time",
    pengarang: "Stephen Hawking",
    kategori: "sains",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
    tahun: 1988,
    penerbit: "Bantam Dell",
    halaman: 212,
    isbn: "978-0-553-38016-3",
    rating: 4.5,
    stok: 0,
    sinopsis: "Stephen Hawking memaparkan alam semesta mulai dari teori big bang, lubang hitam, hingga perjalanan waktu dengan bahasa yang mudah dipahami. Sebuah eksplorasi mendalam tentang asal-usul, sifat, dan nasib akhir alam semesta kita."
  },
  {
    id: 7,
    judul: "Harry Potter dan Batu Bertuah",
    pengarang: "J.K. Rowling",
    kategori: "fiksi",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
    tahun: 1997,
    penerbit: "Gramedia Pustaka Utama",
    halaman: 360,
    isbn: "978-979-22-0101-4",
    rating: 4.9,
    stok: 3,
    sinopsis: "Kisah seorang anak yatim piatu bernama Harry Potter yang menemukan dirinya adalah seorang penyihir dan belajar di Sekolah Sihir Hogwarts. Petualangan magis yang telah memikat jutaan pembaca di seluruh dunia selama lebih dari dua dekade."
  },
  {
    id: 8,
    judul: "Rich Dad Poor Dad",
    pengarang: "Robert T. Kiyosaki",
    kategori: "bisnis",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387016183i/69571.jpg",
    tahun: 1997,
    penerbit: "Plata Publishing",
    halaman: 336,
    isbn: "978-1-61268-116-2",
    rating: 4.3,
    stok: 4,
    sinopsis: "Melalui kisah dua ayah yang berbeda pandangan tentang uang, Kiyosaki mengajarkan konsep kebebasan finansial, investasi, dan cara berpikir seperti orang kaya. Buku yang telah mengubah cara pandang jutaan orang terhadap uang dan investasi."
  },
  {
    id: 9,
    judul: "Perahu Kertas",
    pengarang: "Dee Lestari",
    kategori: "fiksi",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322516696i/12875581.jpg",
    tahun: 2009,
    penerbit: "Bentang Pustaka",
    halaman: 444,
    isbn: "978-979-1227-18-6",
    rating: 4.5,
    stok: 2,
    sinopsis: "Kisah cinta Kugy dan Keenan yang bertemu di kampus dan memiliki mimpi masing-masing. Sebuah novel tentang persahabatan, cinta, impian, dan pilihan hidup yang diwarnai oleh keindahan sastra Dee Lestari."
  },
  {
    id: 10,
    judul: "The Power of Habit",
    pengarang: "Charles Duhigg",
    kategori: "bisnis",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366758683i/12609433.jpg",
    tahun: 2012,
    penerbit: "Random House",
    halaman: 371,
    isbn: "978-1-4000-6928-6",
    rating: 4.4,
    stok: 3,
    sinopsis: "Duhigg mengungkap ilmu di balik pembentukan kebiasaan dan bagaimana menggunakannya untuk mengubah hidup. Mengombinasikan riset ilmiah dengan kisah nyata tentang mengapa kebiasaan muncul dan bagaimana mengubahnya."
  },
  {
    id: 11,
    judul: "Cosmos",
    pengarang: "Carl Sagan",
    kategori: "sains",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388180892i/55030.jpg",
    tahun: 1980,
    penerbit: "Random House",
    halaman: 365,
    isbn: "978-0-345-33135-9",
    rating: 4.7,
    stok: 1,
    sinopsis: "Carl Sagan membawa kita dalam perjalanan epik melintasi galaksi, memperkenalkan asal-usul kehidupan, evolusi, dan peradaban. Sebuah karya yang memadukan sains, filsafat, dan puisi untuk menggambarkan keajaiban alam semesta."
  },
  {
    id: 12,
    judul: "Pulang",
    pengarang: "Tere Liye",
    kategori: "fiksi",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449498625i/28016508.jpg",
    tahun: 2015,
    penerbit: "Republika",
    halaman: 400,
    isbn: "978-602-061-051-3",
    rating: 4.4,
    stok: 5,
    sinopsis: "Kisah Bujang, seorang anak dari pedalaman Sumatra yang terseret ke dalam dunia bayangan, organisasi kriminal bawah tanah yang menguasai separuh perekonomian dunia. Sebuah petualangan aksi yang dipenuhi dengan nilai-nilai keluarga dan keberanian."
  }
];

// ===== STATE =====
let filterAktif = "semua";
let bukuDipinjam = JSON.parse(localStorage.getItem("bukuDipinjam") || "[]");

// ===== RENDER BUKU =====
function renderBuku(list) {
  const grid = document.getElementById("booksGrid");
  const empty = document.getElementById("emptyState");

  if (list.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  grid.innerHTML = list.map(buku => {
    const sudahDipinjam = bukuDipinjam.includes(buku.id);
    const habis = buku.stok === 0;
    const badgeText = habis ? "Habis" : (sudahDipinjam ? "Dipinjam" : `Stok: ${buku.stok}`);
    const badgeClass = habis ? "book-badge habis" : "book-badge";

    return `
      <div class="book-card" id="card-${buku.id}">
        <div class="book-cover" onclick="openDetail(${buku.id})">
          <img src="${buku.cover}" alt="${buku.judul}" loading="lazy"
            onerror="this.src='https://via.placeholder.com/200x270/1a2744/c9a84c?text=${encodeURIComponent(buku.judul)}'" />
          <span class="${badgeClass}">${badgeText}</span>
        </div>
        <div class="book-info" onclick="openDetail(${buku.id})">
          <span class="book-category">${buku.kategori}</span>
          <h3 class="book-title">${buku.judul}</h3>
          <p class="book-author">${buku.pengarang}</p>
          <p class="book-rating">
            <span class="star">★</span> ${buku.rating} · ${buku.tahun}
          </p>
        </div>
        <div class="book-actions">
          <button class="btn-detail" onclick="openDetail(${buku.id})">Detail</button>
          <button class="btn-pinjam" id="btn-pinjam-${buku.id}"
            onclick="event.stopPropagation(); openPinjam(${buku.id})"
            ${habis || sudahDipinjam ? 'disabled' : ''}>
            ${sudahDipinjam ? '✓ Dipinjam' : (habis ? 'Habis' : 'Pinjam')}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ===== FILTER =====
function setFilter(kategori, el) {
  filterAktif = kategori;
  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  el.classList.add("active");
  tampilkanBuku();
}

function filterBooks() {
  tampilkanBuku();
}

function tampilkanBuku() {
  const q = document.getElementById("searchInput").value.toLowerCase().trim();
  let hasil = dataBuku;

  if (filterAktif !== "semua") {
    hasil = hasil.filter(b => b.kategori === filterAktif);
  }

  if (q) {
    hasil = hasil.filter(b =>
      b.judul.toLowerCase().includes(q) ||
      b.pengarang.toLowerCase().includes(q) ||
      b.kategori.toLowerCase().includes(q)
    );
  }

  renderBuku(hasil);
}

// ===== MODAL DETAIL =====
function openDetail(id) {
  const buku = dataBuku.find(b => b.id === id);
  if (!buku) return;

  const sudahDipinjam = bukuDipinjam.includes(buku.id);
  const habis = buku.stok === 0;

  document.getElementById("modalDetailContent").innerHTML = `
    <img class="modal-cover" src="${buku.cover}" alt="${buku.judul}"
      onerror="this.src='https://via.placeholder.com/200x270/1a2744/c9a84c?text=${encodeURIComponent(buku.judul)}'" />
    <div class="modal-info">
      <h2>${buku.judul}</h2>
      <p class="book-author">${buku.pengarang}</p>
      <div style="font-size:.85rem; color: var(--text-lt); margin-bottom:4px;">
        <span class="star">★</span> ${buku.rating} / 5.0
      </div>
      <div class="modal-meta">
        <div class="meta-item">
          <label>Kategori</label>
          <span>${buku.kategori.charAt(0).toUpperCase() + buku.kategori.slice(1)}</span>
        </div>
        <div class="meta-item">
          <label>Tahun Terbit</label>
          <span>${buku.tahun}</span>
        </div>
        <div class="meta-item">
          <label>Penerbit</label>
          <span>${buku.penerbit}</span>
        </div>
        <div class="meta-item">
          <label>Jumlah Halaman</label>
          <span>${buku.halaman} hal.</span>
        </div>
        <div class="meta-item">
          <label>ISBN</label>
          <span>${buku.isbn}</span>
        </div>
        <div class="meta-item">
          <label>Stok Tersedia</label>
          <span style="color:${buku.stok > 0 ? '#2e7d32' : 'var(--red)'}; font-weight:600;">
            ${buku.stok > 0 ? `${buku.stok} buku` : 'Habis'}
          </span>
        </div>
      </div>
      <p class="modal-sinopsis">${buku.sinopsis}</p>
      <div class="modal-actions">
        <button class="btn-pinjam" 
          onclick="closeModal('detailModal'); setTimeout(() => openPinjam(${buku.id}), 150);"
          ${habis || sudahDipinjam ? 'disabled' : ''}>
          ${sudahDipinjam ? '✓ Sudah Dipinjam' : (habis ? 'Stok Habis' : 'Pinjam Buku Ini')}
        </button>
      </div>
    </div>
  `;

  openModal("detailModal");
}

// ===== MODAL PINJAM =====
function openPinjam(id) {
  const buku = dataBuku.find(b => b.id === id);
  if (!buku) return;

  const today = new Date();
  const kembali = new Date(today);
  kembali.setDate(kembali.getDate() + 7);
  const fmt = d => d.toLocaleDateString("id-ID", { day:"2-digit", month:"long", year:"numeric" });

  document.getElementById("pinjamContent").innerHTML = `
    <div class="pinjam-form">
      <h3>📖 Pinjam Buku</h3>
      <p>Isi data berikut untuk meminjam buku <strong>${buku.judul}</strong></p>
      <div class="form-group">
        <label>Nama Lengkap</label>
        <input type="text" id="pinjamNama" placeholder="Nama lengkap Anda" />
      </div>
      <div class="form-group">
        <label>Nomor Kartu Anggota</label>
        <input type="text" id="pinjamKartu" placeholder="Contoh: PN-2024-0123" />
      </div>
      <div class="form-group">
        <label>Tanggal Pinjam</label>
        <input type="text" value="${fmt(today)}" disabled />
      </div>
      <div class="form-group">
        <label>Estimasi Pengembalian</label>
        <input type="text" id="pinjamKembali" value="${fmt(kembali)}" disabled />
      </div>
      <div class="form-group">
        <label>Durasi Peminjaman</label>
        <select id="pinjamDurasi" onchange="updateKembali(${buku.id})">
          <option value="7">7 hari (standar)</option>
          <option value="14">14 hari (perpanjangan)</option>
        </select>
      </div>
      <button class="btn-primary w-full" onclick="konfirmasiPinjam(${buku.id})" style="margin-top:8px;">
        Konfirmasi Peminjaman
      </button>
    </div>
  `;

  openModal("pinjamModal");
}

function updateKembali(id) {
  const durasi = parseInt(document.getElementById("pinjamDurasi").value);
  const kembali = new Date();
  kembali.setDate(kembali.getDate() + durasi);
  const fmt = d => d.toLocaleDateString("id-ID", { day:"2-digit", month:"long", year:"numeric" });
  document.getElementById("pinjamKembali").value = fmt(kembali);
}

function konfirmasiPinjam(id) {
  const nama = document.getElementById("pinjamNama").value.trim();
  const kartu = document.getElementById("pinjamKartu").value.trim();

  if (!nama) { showToast("⚠️ Mohon isi nama lengkap Anda"); return; }
  if (!kartu) { showToast("⚠️ Mohon isi nomor kartu anggota"); return; }

  const buku = dataBuku.find(b => b.id === id);

  // Update stok
  buku.stok = Math.max(0, buku.stok - 1);

  // Catat peminjaman
  bukuDipinjam.push(id);
  localStorage.setItem("bukuDipinjam", JSON.stringify(bukuDipinjam));

  const kode = "PN-" + Date.now().toString().slice(-6);

  document.getElementById("pinjamContent").innerHTML = `
    <div class="success-state">
      <div class="success-icon">✅</div>
      <h3>Peminjaman Berhasil!</h3>
      <p>Selamat, <strong>${nama}</strong>! Buku <em>${buku.judul}</em> telah berhasil dipinjam.</p>
      <div class="kode-pinjam">${kode}</div>
      <p style="font-size:.78rem; color: var(--text-lt);">Simpan kode ini sebagai bukti peminjaman. Harap kembalikan tepat waktu.</p>
      <button class="btn-primary" onclick="closeModal('pinjamModal')" style="margin-top:8px;">
        Selesai
      </button>
    </div>
  `;

  // Refresh tampilan
  tampilkanBuku();
  showToast("✅ Buku berhasil dipinjam!");
}

// ===== MODAL LOGIN =====
function openLoginModal() {
  openModal("loginModal");
}

function handleLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const pass  = document.getElementById("loginPass").value;

  if (!email || !pass) {
    showToast("⚠️ Mohon isi email dan kata sandi");
    return;
  }

  showToast("✅ Berhasil masuk!");
  closeModal("loginModal");
}

function switchToRegister() {
  showToast("🔗 Fitur pendaftaran akan segera hadir");
}

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

// Tutup modal dengan Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    ["detailModal","pinjamModal","loginModal"].forEach(m => closeModal(m));
  }
});

// ===== TOAST =====
let toastTimer;
function showToast(pesan) {
  const toast = document.getElementById("toast");
  toast.textContent = pesan;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// ===== NAVBAR ACTIVE STATE PADA SCROLL =====
window.addEventListener("scroll", () => {
  const sections = ["beranda","koleksi","tentang","kontak"];
  const scrollY = window.scrollY + 100;

  sections.forEach(id => {
    const el = document.getElementById(id);
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!el || !link) return;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  tampilkanBuku();
});
