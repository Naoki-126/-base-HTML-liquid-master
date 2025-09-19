// alert("テスト");

/* ドロワー
=========================== */
const drawerBtn = document.getElementById("js-drawer");
const drawerContents = document.getElementById("js-drawer__contents")

drawerBtn.addEventListener("click",function (e) {
  e.preventDefault();
  drawerBtn.classList.toggle("is-checked");
  drawerContents.classList.toggle("is-checked");
});
