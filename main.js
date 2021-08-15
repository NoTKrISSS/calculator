const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousNumberTextElement = document.querySelector(
  "[data-previous-number]"
);
const currentNumberTextelement = document.querySelector(
  "[data-current-number]"
);

class Calculator {
  constructor(previousNumberTextElement, currentNumberTextelement) {
    this.previousNumberTextElement = previousNumberTextElement;
    this.currentNumberTextelement = currentNumberTextelement;
  }
  clear() {
    this.curr;
  }

  delete() {}

  appendNumber() {}

  chooseOperation() {}

  compute() {}

  updateDisplay() {}
}
