function adicionarEventosVideo(e, o) {
  var a = document.getElementById(e);
  a.addEventListener("mouseenter", function () {
    o &&
      o.play().catch(function (e) {
        console.error("Erro ao reproduzir o v\xeddeo:", e);
      });
  }),
    a.addEventListener("mouseleave", function () {
      o &&
        o.pause().catch(function (e) {
          console.error("Erro ao pausar o v\xeddeo:", e);
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelectorAll(".filter-button"),
    o = document.querySelectorAll(".image-container > div");
  e.forEach((a) => {
    a.addEventListener("click", function () {
      e.forEach((e) => e.classList.remove("active")),
        this.classList.add("active");
      let a = this.getAttribute("data-filter");
      o.forEach((e) => {
        let o = e.querySelector("h1").getAttribute("data-category");
        "all" === a || o === a
          ? (e.style.display = "block")
          : (e.style.display = "none");
      });
    });
  });
});
var vimeoPlayerBoss = new Vimeo.Player("videoBoss"),
  vimeoPlayerAurea = new Vimeo.Player("videoAurea"),
  vimeoPlayerVintage = new Vimeo.Player("videoVintage"),
  vimeoPlayer30 = new Vimeo.Player("video30"),
  vimeoPlayerPride = new Vimeo.Player("videoPride"),
  vimeoPlayerBpro = new Vimeo.Player("videoBpro"),
  vimeoPlayerGatorade = new Vimeo.Player("videoGatorade"),
  vimeoPlayerBarracadabra = new Vimeo.Player("videoBarracadabra"),
  vimeoPlayerApp = new Vimeo.Player("videoApp"),
  vimeoPlayerIguatemi = new Vimeo.Player("videoIguatemi"),
  vimeoPlayerTermolar = new Vimeo.Player("videoTermolar"),
  vimeoPlayerCaldeira = new Vimeo.Player("videoCaldeira"),
  vimeoPlayerInos = new Vimeo.Player("videoInos"),
  vimeoPlayerSports = new Vimeo.Player("videoSports"),
  vimeoPlayerWine = new Vimeo.Player("videoWine"),
  vimeoPlayerBraskem = new Vimeo.Player("videoBraskem"),
  vimeoPlayerAshuaJovem = new Vimeo.Player("videoAshuaJovem"),
  vimeoPlayerJessica = new Vimeo.Player("videoJessica");
(vimeoPlayerBemPromotora = new Vimeo.Player("videoPromotora")),
  adicionarEventosVideo("videoBoss", vimeoPlayerBoss),
  adicionarEventosVideo("videoAurea", vimeoPlayerAurea),
  adicionarEventosVideo("videoVintage", vimeoPlayerVintage),
  adicionarEventosVideo("video30", vimeoPlayer30),
  adicionarEventosVideo("videoPride", vimeoPlayerPride),
  adicionarEventosVideo("videoBpro", vimeoPlayerBpro),
  adicionarEventosVideo("videoGatorade", vimeoPlayerGatorade),
  adicionarEventosVideo("videoBarracadabra", vimeoPlayerBarracadabra),
  adicionarEventosVideo("videoApp", vimeoPlayerApp),
  adicionarEventosVideo("videoIguatemi", vimeoPlayerIguatemi),
  adicionarEventosVideo("videoTermolar", vimeoPlayerTermolar),
  adicionarEventosVideo("videoCaldeira", vimeoPlayerCaldeira),
  adicionarEventosVideo("videoInos", vimeoPlayerInos),
  adicionarEventosVideo("videoSports", vimeoPlayerSports),
  adicionarEventosVideo("videoWine", vimeoPlayerWine),
  adicionarEventosVideo("videoBraskem", vimeoPlayerBraskem),
  adicionarEventosVideo("videoAshuaJovem", vimeoPlayerAshuaJovem),
  adicionarEventosVideo("videoJessica", vimeoPlayerJessica),
  adicionarEventosVideo("videoPromotora", vimeoPlayerBemPromotora);