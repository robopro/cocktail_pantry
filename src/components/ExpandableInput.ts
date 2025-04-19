enum CSSClass {
  Container = "expandable-input-container",
  Input = "expandable-input",
  List = "expandable-input-list",
  Expanded = "expanded",
}

export default class ExpandableInput extends HTMLElement {
  static observedAttributes = ["placeholder", "suggestions", "type", "value"];

  #container: HTMLDivElement;
  #slot: HTMLSlotElement;
  #input: HTMLInputElement;
  #list: HTMLOListElement;

  placeholder: string | null;
  suggestions?: string[];
  type: string | null;
  value: string | null;

  constructor() {
    super();
    this.placeholder = this.getAttribute("placeholder");
    this.suggestions = this.getAttribute("suggestions")?.split(",");
    this.type = this.getAttribute("type");
    this.value = this.getAttribute("value");

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML =
      '<link rel="stylesheet" type="text/css" href="./src/components/ExpandableInput.css" />';

    this.#container = document.createElement("div");
    this.#container.classList.add(CSSClass.Container);
    shadowRoot.appendChild(this.#container);

    this.#slot = document.createElement("slot");
    this.#slot.name = "expandable-input-icon";
    this.#container.appendChild(this.#slot);

    this.#input = document.createElement("input");
    this.#input.classList.add(CSSClass.Input);
    this.#container.appendChild(this.#input);

    this.#list = document.createElement("ol");
    this.#list.tabIndex = -1;
    this.#list.classList.add(CSSClass.List);
    this.#container.appendChild(this.#list);

    this.#container.addEventListener("click", this.clickContainerHandler);
    this.#input.addEventListener("focus", this.focusInputHandler);
    this.#input.addEventListener("blur", this.blurInputHandler);
    this.#input.addEventListener("input", this.inputHandler);
  }

  connectedCallback() {
    if (this.type !== null) {
      this.#input.type = this.type;
    }

    if (this.placeholder !== null) {
      this.#input.placeholder = this.placeholder;
    }

    if (this.value !== null) {
      this.#input.value = this.value;
      this.#input.classList.add(CSSClass.Expanded);
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (newValue !== oldValue) {
      this.onAttributeChanged(name, newValue);
    }
  }

  private onAttributeChanged = (name: string, value: string) => {
    switch (name) {
      case "placeholder":
        this.placeholder = value;
        this.#input.placeholder = value;
        break;
      case "suggestions":
        this.suggestions = value.split(",");
        break;
      case "type":
        this.type = value;
        this.#input.type = value;
        break;
      case "value":
        this.onValueChanged(value);
        break;
    }
  };

  clickContainerHandler = () => {
    this.#input.focus();
  };

  focusInputHandler = () => {
    this.setExpanded(true);
  };

  blurInputHandler = () => {
    if (!this.value) {
      this.setExpanded(false);
    }
    this.#list.classList.remove(CSSClass.Expanded);
  };

  inputHandler = () => {
    this.value = this.#input.value;
    this.setSuggestions(this.value);
  };

  clickSuggestionHandler = (event: Event) => {
    if (event.currentTarget instanceof HTMLLIElement && event.currentTarget.textContent) {
      this.#input.value = event.currentTarget.textContent;
      this.value = event.currentTarget.textContent;
      this.#list.classList.remove(CSSClass.Expanded);
      this.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  onValueChanged = (value: string) => {
    this.value = value;
    this.#input.value = value;
    if (value) {
      this.setExpanded(true);
    }
  };

  setExpanded = (expanded: boolean) => {
    if (expanded) {
      this.#container.classList.add(CSSClass.Expanded);
      this.#input.classList.add(CSSClass.Expanded);
    } else {
      this.#container.classList.remove(CSSClass.Expanded);
      this.#input.classList.remove(CSSClass.Expanded);
    }
  };

  setSuggestions = (value: string) => {
    this.#list.innerHTML = "";
    if (this.suggestions && value) {
      const suggestions = this.suggestions.filter(
        (suggestion) =>
          suggestion.length !== value.length &&
          suggestion.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()),
      );

      suggestions.forEach((suggestion) => {
        this.#list.appendChild(this.createSuggestion(suggestion));
      });
    }
    if (this.#list.childNodes.length > 0) {
      this.#list.classList.add(CSSClass.Expanded);
    } else {
      this.#list.classList.remove(CSSClass.Expanded);
    }
  };

  createSuggestion = (suggestion: string) => {
    const listElement = document.createElement("li");
    listElement.textContent = suggestion;
    listElement.addEventListener("click", this.clickSuggestionHandler);
    return listElement;
  };
}
