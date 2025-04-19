const garnishes = [
  "lemon zest",
  "maraschino cherry",
  "nutmeg",
  "orange peel",
  "orange slice",
] as const;

type Garnish = (typeof garnishes)[number];
