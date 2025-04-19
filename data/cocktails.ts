import { IBACategory } from "./ibaCategories";
import { Ingredient } from "./ingredients";
import { Unit } from "./units";

export interface CocktailIngredient {
  name: Ingredient;
  unit: Unit;
  quantity: number | string;
  note?: string;
}

export interface Cocktail {
  category: IBACategory;
  name: string;
  ingredients: CocktailIngredient[];
  method: string;
  garnish?: string;
}

export const cocktails: Cocktail[] = [
  {
    category: IBACategory.Unforgettables,
    name: "Alexander",
    ingredients: [
      { unit: Unit.Ml, quantity: 30, name: "Cognac" },
      { unit: Unit.Ml, quantity: 30, name: "Créme de Cacao", note: "Brown" },
      { unit: Unit.Ml, quantity: 30, name: "Soda Water" },
    ],
    method:
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.",
    garnish: "Sprinkle fresh ground nutmeg on top.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Americano",
    ingredients: [
      { unit: Unit.Ml, quantity: 30, name: "Campari" },
      { unit: Unit.Ml, quantity: 30, name: "Vermouth", note: "Sweet" },
      { unit: Unit.Splash, quantity: 1, name: "Cream" },
    ],
    method:
      "Mix the ingredients directly in an old fashioned glass filled with ice cubes. Add a splash of Soda Water. Stir gently.",
    garnish: "Garnish with half orange slice and a lemon zest.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Angel Face",
    ingredients: [
      { unit: Unit.Ml, quantity: 30, name: "Gin" },
      { unit: Unit.Ml, quantity: 30, name: "Apricot brandy" },
      { unit: Unit.Ml, quantity: 30, name: "Calvados" },
    ],
    method:
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Aviation",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Gin" },
      { unit: Unit.Ml, quantity: 15, name: "Maraschino Luxardo" },
      { unit: Unit.Ml, quantity: 15, name: "Lemon Juice" },
      { unit: Unit.BarSpoon, quantity: 1, name: "Crème de Violette" },
    ],
    method:
      "Add all ingredients into a cocktail shaker. Shake with cracked ice and strain into a chilled cocktail glass.",
    garnish: "Optional Maraschino Cherry.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Between the Sheets",
    ingredients: [
      { unit: Unit.Ml, quantity: 30, name: "White Rum" },
      { unit: Unit.Ml, quantity: 30, name: "Cognac" },
      { unit: Unit.Ml, quantity: 30, name: "Triple Sec" },
      { unit: Unit.Ml, quantity: 20, name: "Lemon Juice" },
    ],
    method:
      "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Boulevardier",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Bourbon", note: "or Rye Whiskey" },
      { unit: Unit.Ml, quantity: 30, name: "Campari" },
      { unit: Unit.Ml, quantity: 30, name: "Vermouth", note: "red" },
    ],
    method:
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
    garnish: "Garnish with a orange zest, optionally a lemon zest.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Brandy Crusta ",
    ingredients: [
      { unit: Unit.Ml, quantity: 52.5, name: "Brandy" },
      { unit: Unit.Ml, quantity: 7.5, name: "Maraschino Luxardo" },
      { unit: Unit.BarSpoon, quantity: 1, name: "Curaçao" },
      { unit: Unit.Ml, quantity: 15, name: "Lemon Juice" },
      { unit: Unit.BarSpoon, quantity: 1, name: "Simple Syrup" },
      { unit: Unit.Dash, quantity: 2, name: "Aromatic Bitters" },
    ],
    method:
      "Mix together all ingredients with ice cubes in a mixing glass. Strain into a prepared slim cocktail glass.",
    garnish:
      "Rub a slice of orange (or lemon) around the rim of the glass and dip it in pulverized white sugar, so that the sugar will adhere to the edge of the glass. Carefully curling place the orange/lemon peel around the inside of the glass.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Casino",
    ingredients: [
      { unit: Unit.Ml, quantity: 40, name: "Gin", note: "Old Tom" },
      { unit: Unit.Ml, quantity: 10, name: "Maraschino Luxardo" },
      { unit: Unit.Ml, quantity: 10, name: "Lemon Juice" },
      { unit: Unit.Dash, quantity: 2, name: "Orange Bitters" },
    ],
    method:
      "Pour all ingredients into cocktails shaker, shake well with ice, strain into chilled rocks glass with ice.",
    garnish: "Garnish with a lemon zest and a maraschino cherry.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Clover Club",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Gin" },
      { unit: Unit.Ml, quantity: 15, name: "Raspberry Syrup" },
      { unit: Unit.Ml, quantity: 15, name: "Lemon Juice" },
      { unit: Unit.Drops, quantity: "few", name: "Egg White" },
    ],
    method:
      "Pour all ingredients into cocktails shaker, shake well with ice, strain into chilled cocktail glass.",
    garnish: "Fresh raspberries.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Daiquiri",
    ingredients: [
      { unit: Unit.Ml, quantity: 60, name: "White Rum" },
      { unit: Unit.Ml, quantity: 20, name: "Lemon Juice" },
      { unit: Unit.BarSpoon, quantity: 2, name: "Sugar" },
    ],
    method:
      "In a cocktail shaker add all ingredients. Stir well to dissolve the sugar. Add ice and shake. Strain into chilled cocktail glass.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Dry Martini",
    ingredients: [
      { unit: Unit.Ml, quantity: 60, name: "Gin" },
      { unit: Unit.Ml, quantity: 10, name: "Vermouth", note: "dry" },
    ],
    method:
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. ",
    garnish:
      "Squeeze oil from lemon peel onto the drink, or garnish with a green olives if requested.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Gin Fizz",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Gin" },
      { unit: Unit.Ml, quantity: 30, name: "Lemon Juice" },
      { unit: Unit.Ml, quantity: 10, name: "Simple Syrup" },
      { unit: Unit.Splash, quantity: 1, name: "Soda Water" },
    ],
    method:
      "Shake all ingredients with ice except soda water. Pour into thin tall Tumbler glass, top with a splash soda water. NOTE: Serve without ice.",
    garnish: "Garnish with lemon slice, optional lemon zest.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Hanky Panky",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Gin" },
      { unit: Unit.Ml, quantity: 45, name: "Vermouth", note: "Sweet, red" },
      { unit: Unit.Ml, quantity: 7.5, name: "Fernet" },
    ],
    method:
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
    garnish: "Orange zest.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "John Collins",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Gin" },
      { unit: Unit.Ml, quantity: 30, name: "Lemon Juice" },
      { unit: Unit.Ml, quantity: 15, name: "Simple Syrup" },
      { unit: Unit.Ml, quantity: 60, name: "Soda Water" },
    ],
    method:
      "Pour all ingredients directly into highball filled with ice. Stir gently. NOTE: Use ‘Old Tom’ Gin for Tom Collins.",
    garnish: "Garnish with lemon slice and maraschino cherry.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Last Word",
    ingredients: [
      { unit: Unit.Ml, quantity: 22.5, name: "Gin" },
      { unit: Unit.Ml, quantity: 22.5, name: "Green Chartreuse" },
      { unit: Unit.Ml, quantity: 22.5, name: "Maraschino Luxardo" },
      { unit: Unit.Ml, quantity: 22.5, name: "Lemon Juice" },
    ],
    method:
      "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Manhattan",
    ingredients: [
      { unit: Unit.Ml, quantity: 50, name: "Whiskey", note: "Rye" },
      { unit: Unit.Ml, quantity: 20, name: "Vermouth", note: "Sweet, red" },
      { unit: Unit.Dash, quantity: 1, name: "Angostura Bitters" },
    ],
    method:
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
    garnish: "Garnish with cocktail cherry.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Martinez",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Gin", note: "London Dry" },
      { unit: Unit.Ml, quantity: 45, name: "Vermouth", note: "Sweet, red" },
      { unit: Unit.BarSpoon, quantity: 1, name: "Maraschino Luxardo" },
      { unit: Unit.Dash, quantity: 2, name: "Orange Bitters" },
    ],
    method:
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
    garnish: "Lemon zest.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Mary Pickford",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "White Rum" },
      { unit: Unit.Ml, quantity: 45, name: "Pineapple Juice" },
      { unit: Unit.Ml, quantity: 7.5, name: "Maraschino Luxardo" },
      { unit: Unit.Ml, quantity: 5, name: "Grenadine Syrup" },
    ],
    method:
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Monkey Gland",
    ingredients: [
      { unit: Unit.Ml, quantity: 45, name: "Gin" },
      { unit: Unit.Ml, quantity: 45, name: "Lemon Juice" },
      { unit: Unit.Tablespoon, quantity: 1, name: "Absinthe" },
      { unit: Unit.Tablespoon, quantity: 1, name: "Grenadine Syrup" },
    ],
    method:
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
  },
  {
    category: IBACategory.Unforgettables,
    name: "Negroni",
    ingredients: [
      { unit: Unit.Ml, quantity: 30, name: "Gin" },
      { unit: Unit.Ml, quantity: 30, name: "Campari" },
      { unit: Unit.Ml, quantity: 30, name: "Vermouth", note: "Sweet, red" },
    ],
    method:
      "Pour all ingredients directly into chilled old fashioned glass filled with ice.  Stir gently.",
    garnish: "Garnish with half orange slice.",
  },
];
