class StepanError{
  constructor() {
    this.message = "StepanError occured: parent is null or undefined or invalid!"
    this.name = "StepanError"
  }
}

function validElement( arg ) {
  try {
    return document.createElement( arg ).toString() !== "[object HTMLUnknownElement]";
  }catch (e) {
    return false;
  }
}

export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name

    if ( !validElement(element) ){
      throw new StepanError()
    }

    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object

      if ( parent === null || parent === undefined || !( parent instanceof Element ) ){
        throw new StepanError();
      }

      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}
