import testTextList from "./test_text_list.json";

(function () {
  function initTestPage() {
    function initRangeControl(rangeControl, value, onChange) {
      const input = rangeControl.querySelector("input[type='range']");
      const valueText = rangeControl.querySelector(".range-value");

      input.value = value;

      const displayValue = () => {
        valueText.textContent = input.value;
        onChange(input.value);
      };

      input.addEventListener("input", displayValue);
      displayValue();
    }

    let paramFontSize = 32;
    let paramLineHeight = 1.5;
    const testText = document.getElementById("page-test-text");

    function updateTestTextStyle() {
      testText.style.fontSize = `${paramFontSize}px`;
      testText.style.lineHeight = `${paramLineHeight}`;
    }

    const rangeFontSize = document.getElementById("range-fontsize");
    const rangeLineHeight = document.getElementById("range-line-height");

    initRangeControl(rangeFontSize, paramFontSize, (value) => {
      paramFontSize = value;
      updateTestTextStyle();
    });
    initRangeControl(rangeLineHeight, paramLineHeight, (value) => {
      paramLineHeight = value;
      updateTestTextStyle();
    });

    updateTestTextStyle();

    // test text switch
    let index = 0;
    document.getElementById("text-update-button").addEventListener("click", () => {
        testText.textContent = testTextList[index]
        index = (index + 1) % testTextList.length
    })
  }

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
