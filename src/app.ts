import { cocktails } from "../data/cocktails";
import { IBACategory, isIBACategory } from "../data/ibaCategories";
import { Ingredient, ingredients, isIngredient } from "../data/ingredients";
import CocktailCard from "./components/CocktailCard";
import ExpandableInput from "./components/ExpandableInput";

customElements.define("expandable-input", ExpandableInput);
customElements.define("cocktail-card", CocktailCard);

const selectedIngredients = new Set<Ingredient>();
const selectedCategories = new Set<IBACategory>();

const { cocktailCards, cocktailNames } = cocktails.reduce<{
  cocktailCards: Record<string, HTMLElement>;
  cocktailNames: string[];
}>(
  (entities, { name }) => {
    entities.cocktailNames.push(name);
    const card = new CocktailCard();
    card.name = name;
    entities.cocktailCards[name] = card;
    return entities;
  },
  { cocktailCards: {}, cocktailNames: [] },
);

const cocktailSearchHandler = (event: Event) => {
  if (event.currentTarget instanceof ExpandableInput) {
    const value = event.currentTarget.value;
    let filteredCocktailNames = cocktailNames;
    if (value) {
      filteredCocktailNames = cocktailNames.filter((cocktailName) =>
        cocktailName.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
      );
    }
    buildCocktailList(filteredCocktailNames);
  }
};

const useStrictFilter = () => {
  const strictIngredientFilter = document.querySelector("#strict-ingredient-filter");
  if (strictIngredientFilter instanceof HTMLInputElement) {
    return strictIngredientFilter.checked;
  }
  return false;
};

const strictFilterChangeHandler = (event: Event) => {
  if (event.currentTarget instanceof HTMLInputElement) {
    filterCocktails();
  }
};

const filterCocktails = () => {
  let filteredCocktailNames = cocktailNames;
  if (selectedCategories.size > 0 || selectedIngredients.size > 0) {
    let filteredCocktails = [...cocktails];
    if (selectedCategories.size > 0) {
      filteredCocktails = filteredCocktails.filter((cocktail) =>
        selectedCategories.has(cocktail.category),
      );
    }
    if (selectedIngredients.size > 0) {
      if (useStrictFilter()) {
        filteredCocktails = filteredCocktails.filter((cocktail) =>
          cocktail.ingredients
            .map(({ name }) => name)
            .every((ingredient) => selectedIngredients.has(ingredient)),
        );
      } else {
        filteredCocktails = filteredCocktails.filter((cocktail) =>
          cocktail.ingredients
            .map(({ name }) => name)
            .some((ingredient) => selectedIngredients.has(ingredient)),
        );
      }
    }
    buildCocktailList(filteredCocktails.map(({ name }) => name));
  } else {
    buildCocktailList(filteredCocktailNames);
  }
};

const categoryChangeHandler = (event: Event) => {
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

const ingredientChangeHandler = (event: Event) => {
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

const createListCheckbox = (
  list: HTMLOListElement | HTMLUListElement,
  value: string,
  inputHandler: (event: Event) => void,
) => {
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

const buildIngredientList = (ingredients: Ingredient[]) => {
  const ingredientList = document.querySelector(".ingredient-list");
  if (ingredientList instanceof HTMLOListElement) {
    ingredientList.innerHTML = "";
    for (const ingredient of ingredients) {
      createListCheckbox(ingredientList, ingredient, ingredientChangeHandler);
    }
  }
};

const buildCocktailList = (cocktailNames: string[]) => {
  const cocktailList = document.querySelector(".cocktail-list");
  if (cocktailList instanceof HTMLOListElement) {
    cocktailList.innerHTML = "";
    for (const cocktailName of cocktailNames) {
      const card = cocktailCards[cocktailName];
      if (card) {
        cocktailList.appendChild(card);
      }
    }
  }
};

const init = () => {
  const cocktailSearch = document.querySelector("#cocktail-search");
  if (cocktailSearch) {
    const cocktailNames = cocktails.map((cocktail) => cocktail.name).join(",");

    cocktailSearch.setAttribute("suggestions", cocktailNames);
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
