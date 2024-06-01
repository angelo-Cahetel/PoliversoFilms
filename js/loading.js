// var carregamentoCompleto = !1;
// function reproduzirVideo() {
//   var e = document.getElementById("videoCarregamento");
//   e.addEventListener("ended", function () {
//     e.classList.add("hidden"),
//       document.getElementById("conteudo").classList.remove("hidden");
//   }),
//     e.play();
// }
// window.addEventListener("load", function () {
//   (carregamentoCompleto = !0), reproduzirVideo();
// }),
//   setTimeout(function () {
//     !carregamentoCompleto &&
//       ((document.getElementById("videoCarregamento").loop = !0),
//       reproduzirVideo());
//   }, 5e3),
//   window.addEventListener("unload", function () {
//     var e = document.getElementById("videoCarregamento");
//     (e.currentTime = 0), reproduzirVideo(), e.play();
//   });
