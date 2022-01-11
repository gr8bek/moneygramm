var elConverterForm = document.querySelector(".converter__form");
var elConverterInput = elConverterForm.querySelector(".converter__input");
var elconverterSelect = elConverterForm.querySelector(".converter__select");
var elConverterResultBox = elConverterForm.querySelector(".converter__result");

var SUM_TO_USD = 0.000093;
var SUM_TO_EURO = 0.000082;
var SUM_TO_RUB = 0.0069;

elConverterForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var converterInput = Number(elConverterInput.value.trim());
  var currencyChoosen = elconverterSelect.value.trim();

  if (isNaN(converterInput)) {
    elConverterResultBox.textContent = "Son kiriting.";
    return;
  }

  if (currencyChoosen == "usd") {
    currencyChoosen =
      "Sizda " + Math.floor(converterInput * SUM_TO_USD) + " dollar bor.";
  }

  if (currencyChoosen == "euro") {
    currencyChoosen =
      "Sizda " + Math.floor(converterInput * SUM_TO_EURO) + " yevro bor.";
  }

  if (currencyChoosen == "rub") {
    currencyChoosen =
      "Sizda " + Math.floor(converterInput * SUM_TO_RUB) + " rubl bor.";
  }

  var resultText = currencyChoosen;

  elConverterResultBox.textContent = resultText;
});
