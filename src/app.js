"use strict";
(() => {
  // data/ibaCategories.ts
  var IBACategory = /* @__PURE__ */ ((IBACategory2) => {
    IBACategory2["Unforgettables"] = "The Unforgettables";
    IBACategory2["Contemporary"] = "The Contemporary";
    IBACategory2["NewEar"] = "The New Era";
    return IBACategory2;
  })(IBACategory || {});
  var isIBACategory = (obj) => typeof obj === "string" && Object.values(IBACategory).includes(obj);

  // data/cocktails.ts
  var cocktails = [
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Alexander",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 30, name: "Cognac" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Cr\xE9me de Cacao", note: "Brown" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Soda Water" }
      ],
      method: "Pour all ingredients into cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.",
      garnish: "Sprinkle fresh ground nutmeg on top."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Americano",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 30, name: "Campari" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Vermouth", note: "Sweet" },
        { unit: "splash" /* Splash */, quantity: 1, name: "Cream" }
      ],
      method: "Mix the ingredients directly in an old fashioned glass filled with ice cubes. Add a splash of Soda Water. Stir gently.",
      garnish: "Garnish with half orange slice and a lemon zest."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Angel Face",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 30, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Apricot brandy" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Calvados" }
      ],
      method: "Pour all ingredients into cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Aviation",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 15, name: "Maraschino Luxardo" },
        { unit: "ml" /* Ml */, quantity: 15, name: "Lemon Juice" },
        { unit: "bar spoon" /* BarSpoon */, quantity: 1, name: "Cr\xE8me de Violette" }
      ],
      method: "Add all ingredients into a cocktail shaker. Shake with cracked ice and strain into a chilled cocktail glass.",
      garnish: "Optional Maraschino Cherry."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Between the Sheets",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 30, name: "White Rum" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Cognac" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Triple Sec" },
        { unit: "ml" /* Ml */, quantity: 20, name: "Lemon Juice" }
      ],
      method: "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Boulevardier",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Bourbon", note: "or Rye Whiskey" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Campari" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Vermouth", note: "red" }
      ],
      method: "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
      garnish: "Garnish with a orange zest, optionally a lemon zest."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Brandy Crusta ",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 52.5, name: "Brandy" },
        { unit: "ml" /* Ml */, quantity: 7.5, name: "Maraschino Luxardo" },
        { unit: "bar spoon" /* BarSpoon */, quantity: 1, name: "Cura\xE7ao" },
        { unit: "ml" /* Ml */, quantity: 15, name: "Lemon Juice" },
        { unit: "bar spoon" /* BarSpoon */, quantity: 1, name: "Simple Syrup" },
        { unit: "dash" /* Dash */, quantity: 2, name: "Aromatic Bitters" }
      ],
      method: "Mix together all ingredients with ice cubes in a mixing glass. Strain into a prepared slim cocktail glass.",
      garnish: "Rub a slice of orange (or lemon) around the rim of the glass and dip it in pulverized white sugar, so that the sugar will adhere to the edge of the glass. Carefully curling place the orange/lemon peel around the inside of the glass."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Casino",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 40, name: "Gin", note: "Old Tom" },
        { unit: "ml" /* Ml */, quantity: 10, name: "Maraschino Luxardo" },
        { unit: "ml" /* Ml */, quantity: 10, name: "Lemon Juice" },
        { unit: "dash" /* Dash */, quantity: 2, name: "Orange Bitters" }
      ],
      method: "Pour all ingredients into cocktails shaker, shake well with ice, strain into chilled rocks glass with ice.",
      garnish: "Garnish with a lemon zest and a maraschino cherry."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Clover Club",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 15, name: "Raspberry Syrup" },
        { unit: "ml" /* Ml */, quantity: 15, name: "Lemon Juice" },
        { unit: "drops" /* Drops */, quantity: "few", name: "Egg White" }
      ],
      method: "Pour all ingredients into cocktails shaker, shake well with ice, strain into chilled cocktail glass.",
      garnish: "Fresh raspberries."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Daiquiri",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 60, name: "White Rum" },
        { unit: "ml" /* Ml */, quantity: 20, name: "Lemon Juice" },
        { unit: "bar spoon" /* BarSpoon */, quantity: 2, name: "Sugar" }
      ],
      method: "In a cocktail shaker add all ingredients. Stir well to dissolve the sugar. Add ice and shake. Strain into chilled cocktail glass."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Dry Martini",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 60, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 10, name: "Vermouth", note: "dry" }
      ],
      method: "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. ",
      garnish: "Squeeze oil from lemon peel onto the drink, or garnish with a green olives if requested."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Gin Fizz",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Lemon Juice" },
        { unit: "ml" /* Ml */, quantity: 10, name: "Simple Syrup" },
        { unit: "splash" /* Splash */, quantity: 1, name: "Soda Water" }
      ],
      method: "Shake all ingredients with ice except soda water. Pour into thin tall Tumbler glass, top with a splash soda water. NOTE: Serve without ice.",
      garnish: "Garnish with lemon slice, optional lemon zest."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Hanky Panky",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 45, name: "Vermouth", note: "Sweet, red" },
        { unit: "ml" /* Ml */, quantity: 7.5, name: "Fernet" }
      ],
      method: "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
      garnish: "Orange zest."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "John Collins",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Lemon Juice" },
        { unit: "ml" /* Ml */, quantity: 15, name: "Simple Syrup" },
        { unit: "ml" /* Ml */, quantity: 60, name: "Soda Water" }
      ],
      method: "Pour all ingredients directly into highball filled with ice. Stir gently. NOTE: Use \u2018Old Tom\u2019 Gin for Tom Collins.",
      garnish: "Garnish with lemon slice and maraschino cherry."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Last Word",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 22.5, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 22.5, name: "Green Chartreuse" },
        { unit: "ml" /* Ml */, quantity: 22.5, name: "Maraschino Luxardo" },
        { unit: "ml" /* Ml */, quantity: 22.5, name: "Lemon Juice" }
      ],
      method: "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Manhattan",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 50, name: "Whiskey", note: "Rye" },
        { unit: "ml" /* Ml */, quantity: 20, name: "Vermouth", note: "Sweet, red" },
        { unit: "dash" /* Dash */, quantity: 1, name: "Angostura Bitters" }
      ],
      method: "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
      garnish: "Garnish with cocktail cherry."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Martinez",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Gin", note: "London Dry" },
        { unit: "ml" /* Ml */, quantity: 45, name: "Vermouth", note: "Sweet, red" },
        { unit: "bar spoon" /* BarSpoon */, quantity: 1, name: "Maraschino Luxardo" },
        { unit: "dash" /* Dash */, quantity: 2, name: "Orange Bitters" }
      ],
      method: "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
      garnish: "Lemon zest."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Mary Pickford",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "White Rum" },
        { unit: "ml" /* Ml */, quantity: 45, name: "Pineapple Juice" },
        { unit: "ml" /* Ml */, quantity: 7.5, name: "Maraschino Luxardo" },
        { unit: "ml" /* Ml */, quantity: 5, name: "Grenadine Syrup" }
      ],
      method: "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Monkey Gland",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 45, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 45, name: "Lemon Juice" },
        { unit: "tbsp" /* Tablespoon */, quantity: 1, name: "Absinthe" },
        { unit: "tbsp" /* Tablespoon */, quantity: 1, name: "Grenadine Syrup" }
      ],
      method: "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass."
    },
    {
      category: "The Unforgettables" /* Unforgettables */,
      name: "Negroni",
      ingredients: [
        { unit: "ml" /* Ml */, quantity: 30, name: "Gin" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Campari" },
        { unit: "ml" /* Ml */, quantity: 30, name: "Vermouth", note: "Sweet, red" }
      ],
      method: "Pour all ingredients directly into chilled old fashioned glass filled with ice.  Stir gently.",
      garnish: "Garnish with half orange slice."
    }
  ];

  // data/ingredients.ts
  var ingredients = [
    "Absinthe",
    "Agave nectar",
    "Angostura Bitters",
    "Aperol",
    "Apricot brandy",
    "Aromatic Bitters",
    "Blackberry liqueur",
    "Blue Cura\xE7ao",
    "Bourbon",
    "Brandy",
    "Cachaca",
    "Calvados",
    "Campari",
    "Champagne",
    "Cherry liqueur",
    "Citron Vodka",
    "Coconut milk",
    "Coffee",
    "Coffee liqueur",
    "Cognac",
    "Cola",
    "Cranberry juice",
    "Cream",
    "Cr\xE9me de Cacao",
    "Cr\xE9me de Cassis",
    "Cr\xE9me de Menthe",
    "Cr\xE8me de Violette",
    "Cream liqueur",
    "Cura\xE7ao",
    "Dark rum",
    "DiSaronno",
    "DOM B\xE9n\xE9dictine",
    "Drambuie",
    "Dry White Wine",
    "Egg White",
    "Egg yolk",
    "Fernet",
    "Galliano",
    "Gin",
    "Ginger Ale",
    "Ginger beer",
    "Grapefruit juice",
    "Green Chartreuse",
    "Grenadine Syrup",
    "Honey",
    "Kirsch",
    "Lemon Juice",
    "Lillet Blonde",
    "Lime",
    "Lime Juice",
    "Maraschino Luxardo",
    "Mint",
    "Olive juice",
    "Orange Bitters",
    "Orange flower water",
    "Orange juice",
    "Peach bitters",
    "Peach puree",
    "Peach schnapps",
    "Peychaud's bitters",
    "Pineapple Juice",
    "Pisco",
    "Prosecco",
    "Raspberry liqueur",
    "Raspberry Syrup",
    "Red Port",
    "Soda Water",
    "Sparkling Wine",
    "Sugar",
    "Simple Syrup",
    "Tequila",
    "Tomato juice",
    "Triple Sec",
    "Vanilla extract",
    "Vermouth",
    "Vodka",
    "Whiskey",
    "White Rum",
    "Worcestershire Sauce"
  ];
  var isIngredient = (obj) => typeof obj === "string" && ingredients.includes(obj);

  // src/components/CocktailCard.ts
  var ibaBaseUrl = "https://iba-world.com/iba-cocktail/";
  var CocktailCard = class extends HTMLElement {
    static observedAttributes = ["name"];
    #container;
    #cardHeader;
    #cardHeading;
    #category;
    #link;
    #ingredients;
    #ingredientHeader;
    #ingredientList;
    #method;
    #methodHeader;
    #methodList;
    #garnish;
    #garnishHeader;
    #garnishParagraph;
    name;
    #cocktail;
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
      this.#container.classList.add("cocktail-card-container" /* Container */);
      shadowRoot.appendChild(this.#container);
      this.#cardHeader = document.createElement("div");
      this.#cardHeader.classList.add("cocktail-card-header" /* Header */);
      this.#container.appendChild(this.#cardHeader);
      this.#cardHeading = document.createElement("h4");
      this.#cardHeader.appendChild(this.#cardHeading);
      this.#link = document.createElement("a");
      this.#link.target = "_blank";
      this.#cardHeader.appendChild(this.#link);
      this.#category = document.createElement("span");
      this.#category.classList.add("cocktail-card-category" /* Category */);
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
      this.#garnish.classList.add("hide" /* Hide */);
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
    attributeChangedCallback(name, oldValue, newValue) {
      if (newValue !== oldValue) {
        this.onAttributeChanged(name, newValue);
      }
    }
    onAttributeChanged = (name, value) => {
      switch (name) {
        case "name":
          this.name = value;
          this.setCocktail();
          break;
      }
    };
    setCocktail = () => {
      this.#ingredientList.innerHTML = "";
      this.#methodList.innerHTML = "";
      this.#garnish.classList.add("hide" /* Hide */);
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
            this.#garnish.classList.remove("hide" /* Hide */);
            this.#garnishParagraph.innerHTML = this.#cocktail.garnish;
          }
        }
      } else {
        this.#cardHeading.textContent = "[no name]";
        this.#link.href = "#";
      }
    };
  };
  var createIngredientListElement = ({ unit, quantity, name, note }) => {
    const listElement = document.createElement("li");
    let text = `${quantity}${unit} ${name}`;
    if (note) {
      text += ` - ${note}`;
    }
    listElement.textContent = text;
    return listElement;
  };

  // src/components/ExpandableInput.ts
  var ExpandableInput = class extends HTMLElement {
    static observedAttributes = ["placeholder", "suggestions", "type", "value"];
    #container;
    #slot;
    #input;
    #list;
    placeholder;
    suggestions;
    type;
    value;
    constructor() {
      super();
      this.placeholder = this.getAttribute("placeholder");
      this.suggestions = this.getAttribute("suggestions")?.split(",");
      this.type = this.getAttribute("type");
      this.value = this.getAttribute("value");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = '<link rel="stylesheet" type="text/css" href="./src/components/ExpandableInput.css" />';
      this.#container = document.createElement("div");
      this.#container.classList.add("expandable-input-container" /* Container */);
      shadowRoot.appendChild(this.#container);
      this.#slot = document.createElement("slot");
      this.#slot.name = "expandable-input-icon";
      this.#container.appendChild(this.#slot);
      this.#input = document.createElement("input");
      this.#input.classList.add("expandable-input" /* Input */);
      this.#container.appendChild(this.#input);
      this.#list = document.createElement("ol");
      this.#list.tabIndex = -1;
      this.#list.classList.add("expandable-input-list" /* List */);
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
        this.#input.classList.add("expanded" /* Expanded */);
      }
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (newValue !== oldValue) {
        this.onAttributeChanged(name, newValue);
      }
    }
    onAttributeChanged = (name, value) => {
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
      this.#list.classList.remove("expanded" /* Expanded */);
    };
    inputHandler = () => {
      this.value = this.#input.value;
      this.setSuggestions(this.value);
    };
    clickSuggestionHandler = (event) => {
      if (event.currentTarget instanceof HTMLLIElement && event.currentTarget.textContent) {
        this.#input.value = event.currentTarget.textContent;
        this.value = event.currentTarget.textContent;
        this.#list.classList.remove("expanded" /* Expanded */);
        this.dispatchEvent(new Event("input", { bubbles: true }));
      }
    };
    onValueChanged = (value) => {
      this.value = value;
      this.#input.value = value;
      if (value) {
        this.setExpanded(true);
      }
    };
    setExpanded = (expanded) => {
      if (expanded) {
        this.#container.classList.add("expanded" /* Expanded */);
        this.#input.classList.add("expanded" /* Expanded */);
      } else {
        this.#container.classList.remove("expanded" /* Expanded */);
        this.#input.classList.remove("expanded" /* Expanded */);
      }
    };
    setSuggestions = (value) => {
      this.#list.innerHTML = "";
      if (this.suggestions && value) {
        const suggestions = this.suggestions.filter(
          (suggestion) => suggestion.length !== value.length && suggestion.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
        );
        suggestions.forEach((suggestion) => {
          this.#list.appendChild(this.createSuggestion(suggestion));
        });
      }
      if (this.#list.childNodes.length > 0) {
        this.#list.classList.add("expanded" /* Expanded */);
      } else {
        this.#list.classList.remove("expanded" /* Expanded */);
      }
    };
    createSuggestion = (suggestion) => {
      const listElement = document.createElement("li");
      listElement.textContent = suggestion;
      listElement.addEventListener("click", this.clickSuggestionHandler);
      return listElement;
    };
  };

  // src/app.ts
  customElements.define("expandable-input", ExpandableInput);
  customElements.define("cocktail-card", CocktailCard);
  var selectedIngredients = /* @__PURE__ */ new Set();
  var selectedCategories = /* @__PURE__ */ new Set();
  var { cocktailCards, cocktailNames } = cocktails.reduce(
    (entities, { name }) => {
      entities.cocktailNames.push(name);
      const card = new CocktailCard();
      card.name = name;
      entities.cocktailCards[name] = card;
      return entities;
    },
    { cocktailCards: {}, cocktailNames: [] }
  );
  var cocktailSearchHandler = (event) => {
    if (event.currentTarget instanceof ExpandableInput) {
      const value = event.currentTarget.value;
      let filteredCocktailNames = cocktailNames;
      if (value) {
        filteredCocktailNames = cocktailNames.filter(
          (cocktailName) => cocktailName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
      }
      buildCocktailList(filteredCocktailNames);
    }
  };
  var useStrictFilter = () => {
    const strictIngredientFilter = document.querySelector("#strict-ingredient-filter");
    if (strictIngredientFilter instanceof HTMLInputElement) {
      return strictIngredientFilter.checked;
    }
    return false;
  };
  var strictFilterChangeHandler = (event) => {
    if (event.currentTarget instanceof HTMLInputElement) {
      filterCocktails();
    }
  };
  var filterCocktails = () => {
    let filteredCocktailNames = cocktailNames;
    if (selectedCategories.size > 0 || selectedIngredients.size > 0) {
      let filteredCocktails = [...cocktails];
      if (selectedCategories.size > 0) {
        filteredCocktails = filteredCocktails.filter(
          (cocktail) => selectedCategories.has(cocktail.category)
        );
      }
      if (selectedIngredients.size > 0) {
        if (useStrictFilter()) {
          filteredCocktails = filteredCocktails.filter(
            (cocktail) => cocktail.ingredients.map(({ name }) => name).every((ingredient) => selectedIngredients.has(ingredient))
          );
        } else {
          filteredCocktails = filteredCocktails.filter(
            (cocktail) => cocktail.ingredients.map(({ name }) => name).some((ingredient) => selectedIngredients.has(ingredient))
          );
        }
      }
      buildCocktailList(filteredCocktails.map(({ name }) => name));
    } else {
      buildCocktailList(filteredCocktailNames);
    }
  };
  var categoryChangeHandler = (event) => {
    if (event.currentTarget instanceof HTMLInputElement) {
      const { checked, value } = event.currentTarget;
      if (isIBACategory(value)) {
        if (checked) {
          selectedCategories.add(value);
        } else {
          selectedCategories.delete(value);
        }
      }
      filterCocktails();
    }
  };
  var ingredientChangeHandler = (event) => {
    if (event.currentTarget instanceof HTMLInputElement) {
      const { checked, value } = event.currentTarget;
      if (isIngredient(value)) {
        if (checked) {
          selectedIngredients.add(value);
        } else {
          selectedIngredients.delete(value);
        }
      }
      filterCocktails();
    }
  };
  var createListCheckbox = (list, value, inputHandler) => {
    const listElement = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.id = value;
    checkbox.type = "checkbox";
    checkbox.value = value;
    checkbox.addEventListener("input", inputHandler);
    const span = document.createElement("span");
    span.classList.add("checkbox");
    const label = document.createElement("label");
    label.htmlFor = value;
    label.textContent = value;
    span.appendChild(checkbox);
    listElement.appendChild(span);
    listElement.appendChild(label);
    list.appendChild(listElement);
  };
  var buildIngredientList = (ingredients2) => {
    const ingredientList = document.querySelector(".ingredient-list");
    if (ingredientList instanceof HTMLOListElement) {
      ingredientList.innerHTML = "";
      for (const ingredient of ingredients2) {
        createListCheckbox(ingredientList, ingredient, ingredientChangeHandler);
      }
    }
  };
  var buildCocktailList = (cocktailNames2) => {
    const cocktailList = document.querySelector(".cocktail-list");
    if (cocktailList instanceof HTMLOListElement) {
      cocktailList.innerHTML = "";
      for (const cocktailName of cocktailNames2) {
        const card = cocktailCards[cocktailName];
        if (card) {
          cocktailList.appendChild(card);
        }
      }
    }
  };
  var init = () => {
    const cocktailSearch = document.querySelector("#cocktail-search");
    if (cocktailSearch) {
      const cocktailNames2 = cocktails.map((cocktail) => cocktail.name).join(",");
      cocktailSearch.setAttribute("suggestions", cocktailNames2);
      cocktailSearch.addEventListener("input", cocktailSearchHandler);
    }
    const filterButton = document.querySelector(".filter-button");
    if (filterButton instanceof HTMLButtonElement) {
      filterButton.addEventListener("click", () => {
        const filterContainer = document.querySelector(".filters");
        if (filterContainer) {
          filterContainer.classList.toggle("expanded");
        }
      });
    }
    const categoryList = document.querySelector(".category-list");
    if (categoryList instanceof HTMLOListElement) {
      for (const category of Object.values(IBACategory)) {
        createListCheckbox(categoryList, category, categoryChangeHandler);
      }
    }
    const strictIngredientFilter = document.querySelector("#strict-ingredient-filter");
    if (strictIngredientFilter instanceof HTMLInputElement) {
      strictIngredientFilter.addEventListener("input", strictFilterChangeHandler);
    }
    buildIngredientList([...ingredients]);
    buildCocktailList(cocktailNames);
  };
  init();
})();
