import testTextList from "./test_text_list.json";

/* --------------- range --------------- */

function initTextControl() {
  let paramFontSize = 32;
  let paramLineHeight = 1.5;

  const testText = document.getElementById("page-test-text");
  function updateTestTextStyle() {
    testText.style.fontSize = `${paramFontSize}px`;
    testText.style.lineHeight = `${paramLineHeight}`;
  }

  function initRangeInput(rangeControl, value, onChange) {
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

  initRangeInput(
    document.getElementById("range-fontsize"),
    paramFontSize,
    (value) => {
      paramFontSize = value;
      updateTestTextStyle();
    }
  );

  initRangeInput(
    document.getElementById("range-line-height"),
    paramLineHeight,
    (value) => {
      paramLineHeight = value;
      updateTestTextStyle();
    }
  );
}

/* --------------- text switch --------------- */

function initTextSwitch() {
  let textIndex = 0;
  const testText = document.getElementById("page-test-text");

  // test text switch
  document
    .getElementById("text-update-button")
    .addEventListener("click", () => {
      testText.textContent = testTextList[textIndex];
      textIndex = (textIndex + 1) % testTextList.length;
    });
}

/* --------------- page init --------------- */

export default function initTestPage() {
  initTextControl();
  initTextSwitch();
}
