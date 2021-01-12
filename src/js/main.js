import initTestPage from "./test_page";

(function () {
  function initPageControl() {
    function setPage() {
      let page = window.location.hash
        ? window.location.hash.substring(1)
        : "intro";

      document.documentElement.setAttribute("page", page);
    }

    window.addEventListener("hashchange", setPage, false);
    setPage();
  }

  initPageControl();
  initTestPage();
})();
