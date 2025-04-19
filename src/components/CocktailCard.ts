import { Cocktail, CocktailIngredient, cocktails } from "../../data/cocktails";

enum CSSClass {
  Container = "cocktail-card-container",
  Header = "cocktail-card-header",
  Category = "cocktail-card-category",
  Hide = "hide",
}

const ibaBaseUrl = "https://iba-world.com/iba-cocktail/";

export default class CocktailCard extends HTMLElement {
  static observedAttributes = ["name"];

  #container: HTMLDivElement;
  #cardHeader: HTMLDivElement;
  #cardHeading: HTMLHeadingElement;
  #category: HTMLSpanElement;
  #link: HTMLAnchorElement;
  #ingredients: HTMLDivElement;
  #ingredientHeader: HTMLHeadingElement;
  #ingredientList: HTMLUListElement;
  #method: HTMLDivElement;
  #methodHeader: HTMLHeadingElement;
  #methodList: HTMLOListElement;
  #garnish: HTMLDivElement;
  #garnishHeader: HTMLHeadingElement;
  #garnishParagraph: HTMLParagraphElement;

  name: string | null;
  #cocktail?: Cocktail;

  constructor() {
    super();
    this.name = this.getAttribute("name");

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <link rel="stylesheet" type="text/css" href="./src/components/CocktailCard.css" />
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=open_in_new" 
      />
    `;

    this.#container = document.createElement("div");
    this.#container.classList.add(CSSClass.Container);
    shadowRoot.appendChild(this.#container);

    this.#cardHeader = document.createElement("div");
    this.#cardHeader.classList.add(CSSClass.Header);
    this.#container.appendChild(this.#cardHeader);

    this.#cardHeading = document.createElement("h4");
    this.#cardHeader.appendChild(this.#cardHeading);

    this.#link = document.createElement("a");
    this.#link.target = "_blank";
    this.#cardHeader.appendChild(this.#link);

    this.#category = document.createElement("span");
    this.#category.classList.add(CSSClass.Category);
    this.#cardHeader.appendChild(this.#category);

    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.textContent = "open_in_new";
    this.#link.appendChild(span);

    this.#ingredients = document.createElement("div");
    this.#container.appendChild(this.#ingredients);

    this.#ingredientHeader = document.createElement("h5");
    this.#ingredientHeader.textContent = "Ingredients";
    this.#ingredients.appendChild(this.#ingredientHeader);

    this.#ingredientList = document.createElement("ol");
    this.#ingredients.appendChild(this.#ingredientList);

    this.#method = document.createElement("div");
    this.#container.appendChild(this.#method);

    this.#methodHeader = document.createElement("h5");
    this.#methodHeader.textContent = "Method";
    this.#method.appendChild(this.#methodHeader);

    this.#methodList = document.createElement("ol");
    this.#method.appendChild(this.#methodList);

    this.#garnish = document.createElement("div");
    this.#garnish.classList.add(CSSClass.Hide);
    this.#container.appendChild(this.#garnish);

    this.#garnishHeader = document.createElement("h5");
    this.#garnishHeader.textContent = "Garnish";
    this.#garnish.appendChild(this.#garnishHeader);

    this.#garnishParagraph = document.createElement("p");
    this.#garnish.appendChild(this.#garnishParagraph);
  }

  connectedCallback() {
    this.setCocktail();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (newValue !== oldValue) {
      this.onAttributeChanged(name, newValue);
    }
  }

  private onAttributeChanged = (name: string, value: string) => {
    switch (name) {
      case "name":
        this.name = value;
        this.setCocktail();
        break;
    }
  };

  private setCocktail = () => {
    this.#ingredientList.innerHTML = "";
    this.#methodList.innerHTML = "";
    this.#garnish.classList.add(CSSClass.Hide);
    this.#garnishParagraph.textContent = "";

    if (this.name !== null) {
      this.#cardHeading.textContent = this.name;
      this.#link.href = `${ibaBaseUrl}${this.name}`;

      this.#cocktail = cocktails.find((cocktail) => cocktail.name === this.name);
      if (this.#cocktail) {
        this.#category.textContent = this.#cocktail.category;

        this.#cocktail.ingredients.forEach((ingredient) => {
          const listElement = createIngredientListElement(ingredient);
          this.#ingredientList.appendChild(listElement);
        });

        this.#cocktail.method.split(/(?<=\.)/).forEach((step) => {
          const listElement = document.createElement("li");
          listElement.textContent = step;
          this.#methodList.appendChild(listElement);
        });

        if (this.#cocktail.garnish) {
          this.#garnish.classList.remove(CSSClass.Hide);
          this.#garnishParagraph.innerHTML = this.#cocktail.garnish; //.split(/(?<=\.)/).join("<br>");
        }
      }
    } else {
      this.#cardHeading.textContent = "[no name]";
      this.#link.href = "#";
    }
  };
}

const createIngredientListElement = ({ unit, quantity, name, note }: CocktailIngredient) => {
  const listElement = document.createElement("li");
  let text = `${quantity}${unit} ${name}`;
  if (note) {
    text += ` - ${note}`;
  }
  listElement.textContent = text;
  return listElement;
};
