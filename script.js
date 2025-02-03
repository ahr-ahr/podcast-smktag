document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const breadcrumbs = document.querySelectorAll(".breadcrumbs li");
  const searchInput = document.getElementById("search-input");

  let lastScrollTop = 0;

  const anggotaList = [
    {
      nama: "Ahmad Haikal Rizal",
      alasan: "Alasan bergabung: Saya ingin...",
      foto: "image/ahr1.jpg",
      umur: 17,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "IT",
    },
    {
      nama: "Ahmad Haikal Rizal",
      alasan: "Alasan bergabung: Saya ingin...",
      foto: "image/ahr2.jpg",
      umur: 17,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "IT",
    },
    {
      nama: "Ahmad Haikal Rizal",
      alasan: "Alasan bergabung: Saya ingin...",
      foto: "image/ahr3.jpg",
      umur: 17,
      kelas: "XI",
      jurusan: "Rekayasa Perangkat Lunak",
      divisi: "IT",
    },
    // Tambahkan anggota lain di sini
  ];

  const itemsPerPage = 2;
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

      const anggotaFoto = document.createElement("img");
      anggotaFoto.src = anggota.foto;
      anggotaFoto.alt = "Foto Anggota";
      anggotaFoto.style.width = "80px";
      anggotaFoto.style.height = "80px";
      anggotaFoto.style.objectFit = "cover";

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

      const anggotaAlasan = document.createElement("p");
      anggotaAlasan.textContent = anggota.alasan;

      anggotaItem.appendChild(anggotaFoto);
      anggotaItem.appendChild(anggotaNama);
      anggotaItem.appendChild(anggotaUmur);
      anggotaItem.appendChild(anggotaKelas);
      anggotaItem.appendChild(anggotaJurusan);
      anggotaItem.appendChild(anggotaDivisi);
      anggotaItem.appendChild(anggotaAlasan);

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
        anggota.divisi.toLowerCase().includes(query.toLowerCase())
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
    checkVisibleSections();
    activateBreadcrumb();
    header.classList.add("visible");
  });

  renderAnggotaList(anggotaList, currentPage);
});
