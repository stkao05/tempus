import initTestPage from "./test_page";

(function () {
  function initImageRotate() {
    const images = document.querySelectorAll(".image-rotate img");

    let index = 0;
    function showImg() {
      images.forEach((elm) => {
        elm.style.display = null;
      });
      images[index].style.display = "block";
    }

    const container = document.querySelector(".image-rotate");
    container.addEventListener("click", () => {
      index = (index + 1) % images.length;
      showImg();
    });

    showImg();
  }

  function initPageSwitch() {
    function setPage() {
      let page = window.location.hash
        ? window.location.hash.substring(1)
        : "intro";

      document.documentElement.setAttribute("page", page);
    }

    window.addEventListener("hashchange", setPage, false);
    setPage();
  }

  initPageSwitch();
  initTestPage();
  initImageRotate();
})();
