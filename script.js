// Dados da LANCHERIA BR. Atualize o telefone fixo quando for confirmado.
const CONFIG = {
  whatsapp: "5554991616996", // 55 + DDD 54 + 991616996
  endereco: "BR-116, km 145, nº 15945, CEP 95059-520, Caxias do Sul - RS",
  horarioSemana: "A partir das 6h • geralmente até as 18h",
  horarioDomingo: "A partir das 6h • geralmente até as 18h",
};

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");
if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    }),
  );
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("address-value").textContent = CONFIG.endereco;
document.getElementById("hours-week").textContent = CONFIG.horarioSemana;
document.getElementById("hours-sunday").textContent = CONFIG.horarioDomingo;
const maps = document.getElementById("maps-link");
maps.href =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(CONFIG.endereco);
maps.classList.remove("is-disabled");
maps.removeAttribute("aria-disabled");
maps.target = "_blank";
maps.rel = "noopener noreferrer";

const number = CONFIG.whatsapp.replace(/\D/g, "");
document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.href = `https://wa.me/${number}?text=${encodeURIComponent(link.dataset.message || "Olá!")}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
document.getElementById("whatsapp-note").textContent =
  "WhatsApp de teste do responsável pelo protótipo. Reservas de frango: apenas telefone fixo.";

  document.querySelectorAll('a[href="#topo"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  });
});