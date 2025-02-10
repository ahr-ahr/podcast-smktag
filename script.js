document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const breadcrumbs = document.querySelectorAll(".breadcrumbs li");
  const searchInput = document.getElementById("search-input");
  const tentangSection = document.getElementById("tentang");
  const anggotaSection = document.getElementById("anggota");
  const backgroundFoto = document.createElement("div");
  backgroundFoto.classList.add("anggota-bg");

  let lastScrollTop = 0;

  const anggotaList = [
    {
      nama: "Ahmad Haikal Rizal",
      alasan:
        "Alasan bergabung: Saya ingin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
      foto: "image/ahr1.jpg",
      umur: 17,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "IT",
      angkatan: "1",
    },
    {
      nama: "Ahmad Haikal Rizal",
      alasan:
        "Alasan bergabung: Saya ingin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
      foto: "image/ahr4.png",
      umur: 17,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "IT",
      angkatan: "1",
    },
    {
      nama: "Nama Lain",
      alasan:
        "Alasan bergabung: Saya ingin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
      foto: "image/ahr5.png",
      umur: 17,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "IT",
      angkatan: "1",
    },
    {
      nama: "Ahmad Haikal Rizal",
      alasan:
        "Alasan bergabung: Saya ingin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
      foto: "image/ahr4.png",
      umur: 16,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "ROR",
      angkatan: "1",
    },
    {
      nama: "Ahmad Haikal Rizal",
      alasan:
        "Alasan bergabung: Saya ingin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
      foto: "image/ahr5.png",
      umur: 17,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "IT",
      angkatan: "2",
    },
    // Tambahkan anggota lain di sini
  ];

  const itemsPerPage = 4;
  let currentPage = 1;
  const anggotaContainer = document.getElementById("anggota-list");
  const paginationContainer = document.getElementById("pagination");

  function renderAnggotaList(anggotaList, page = 1) {
    anggotaContainer.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedAnggotaList = anggotaList.slice(start, end);

    paginatedAnggotaList.forEach((anggota) => {
      const anggotaItem = document.createElement("div");
      anggotaItem.classList.add("anggota-item");

      // Membuat elemen background foto
      const backgroundFoto = document.createElement("div");
      backgroundFoto.classList.add("anggota-bg");
      //backgroundFoto.style.backgroundImage = `url('${anggota.foto}')`; // Pakai foto anggota sebagai background

      // Membuat link hanya untuk gambar
      const anggotaLink = document.createElement("a");
      anggotaLink.href = `divisi/it/index.html?nama=${encodeURIComponent(
        anggota.nama
      )}`; // URL detail anggota
      anggotaLink.classList.add("anggota-link");

      const anggotaFoto = document.createElement("img");
      anggotaFoto.src = anggota.foto;
      anggotaFoto.alt = "Foto Anggota";
      anggotaFoto.loading = "lazy";
      anggotaFoto.style.objectFit = "cover";

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");

      const anggotaNama = document.createElement("h3");
      anggotaNama.textContent = anggota.nama;

      const anggotaUmur = document.createElement("p");
      anggotaUmur.textContent = `Umur: ${anggota.umur}`;

      const anggotaKelas = document.createElement("p");
      anggotaKelas.textContent = `Kelas: ${anggota.kelas}`;

      const anggotaJurusan = document.createElement("p");
      anggotaJurusan.textContent = `Jurusan: ${anggota.jurusan}`;

      const anggotaDivisi = document.createElement("p");
      anggotaDivisi.textContent = `Divisi: ${anggota.divisi}`;

      const anggotaAngkatan = document.createElement("p");
      anggotaDivisi.textContent = `Angkatan: ${anggota.angkatan}`;

      const anggotaAlasan = document.createElement("p");
      anggotaAlasan.textContent = anggota.alasan;

      // Menyusun elemen
      anggotaLink.appendChild(backgroundFoto); // Background di dalam link
      anggotaLink.appendChild(anggotaFoto); // Tambahkan foto utama

      infoDiv.appendChild(anggotaNama);
      infoDiv.appendChild(anggotaUmur);
      infoDiv.appendChild(anggotaKelas);
      infoDiv.appendChild(anggotaJurusan);
      infoDiv.appendChild(anggotaDivisi);
      infoDiv.appendChild(anggotaAngkatan);
      infoDiv.appendChild(anggotaAlasan);

      anggotaItem.appendChild(anggotaLink); // Menambahkan link dengan foto
      anggotaItem.appendChild(infoDiv); // Menambahkan informasi anggota di luar link

      anggotaItem.addEventListener("mouseover", () => {
        anggotaItem.classList.add("focused");
      });

      anggotaItem.addEventListener("mouseout", () => {
        anggotaItem.classList.remove("focused");
      });

      anggotaContainer.appendChild(anggotaItem);
    });

    renderPaginationButtons(anggotaList.length, page);
  }

  function renderPaginationButtons(totalItems, currentPage) {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      if (i === currentPage) {
        button.classList.add("active");
      }
      button.addEventListener("click", () => {
        currentPage = i;
        renderAnggotaList(anggotaList, currentPage);
      });
      paginationContainer.appendChild(button);
    }
  }

  function filterAnggota(query) {
    const filteredAnggota = anggotaList.filter((anggota) => {
      return (
        anggota.nama.toLowerCase().includes(query.toLowerCase()) ||
        anggota.umur.toString().includes(query) ||
        anggota.kelas.toLowerCase().includes(query.toLowerCase()) ||
        anggota.jurusan.toLowerCase().includes(query.toLowerCase()) ||
        anggota.divisi.toLowerCase().includes(query.toLowerCase()) ||
        anggota.angkatan.toLowerCase().includes(query.toLowerCase())
      );
    });

    return filteredAnggota;
  }

  searchInput.addEventListener("input", function () {
    const query = searchInput.value;
    const filteredList = filterAnggota(query);
    renderAnggotaList(filteredList, 1);
  });

  function activateBreadcrumb() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    breadcrumbs.forEach((breadcrumb) => breadcrumb.classList.remove("active"));
    breadcrumbs[index]?.classList.add("active");
  }

  function checkVisibleSections() {
    if (window.scrollY > 50) {
      footer.classList.add("visible");
      document.querySelector(".breadcrumbs").classList.add("visible");
    } else {
      footer.classList.remove("visible");
      document.querySelector(".breadcrumbs").classList.remove("visible");
    }
  }

  function checkVisibilityOnScroll() {
    const sectionsToAnimate = [tentangSection, anggotaSection];

    sectionsToAnimate.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Jika elemen berada dalam jangkauan tampilan
      if (sectionTop < windowHeight && sectionBottom > 0) {
        section.classList.add("visible"); // Tambahkan animasi
      }
    });
  }

  window.addEventListener("scroll", function () {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      header.classList.remove("visible");
    } else {
      header.classList.add("visible");
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    checkVisibleSections();
    activateBreadcrumb();
  });

  window.addEventListener("load", function () {
    checkVisibilityOnScroll();
    checkVisibleSections();
    activateBreadcrumb();
    header.classList.add("visible");
  });

  renderAnggotaList(anggotaList, currentPage);
});
