export enum IBACategory {
  Unforgettables = "The Unforgettables",
  Contemporary = "The Contemporary",
  NewEar = "The New Era",
}

export const isIBACategory = (obj: unknown): obj is IBACategory =>
  typeof obj === "string" && (Object.values(IBACategory) as string[]).includes(obj);
