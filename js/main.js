const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("open");
});

const loading = document.getElementById("loading");
const loadingDuration = 2000; // 2 sekund

setTimeout(() => {
  loading.classList.add("loading-none"); // loading-none klassini qo'shish
}, loadingDuration);

// kelish

$(document).ready(function () {
  $(".share-btn").click(function () {
    $(".share-btn").toggleClass("active");
    $("ul").toggleClass("active");
  });
});






