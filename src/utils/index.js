export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const categoriesArray = [
  "aroma_and_bath_melts",
  "bar_soap",
  "bath_bombs",
  "bath_oils",
  "body_butters_and_conditioners",
  "body_cleansers",
  "body_lotions",
  "body_scrubs",
  "bubble_bars",
  "cleansers_and_scrubs",
  "conditioners",
  "eye_skincare",
  "hair_treatments",
  "henna_hair_dyes",
  "lip_scrubs_and_balms",
  "little_lushies",
  "makeup",
  "masks",
  "moisturizers",
  "oral_care",
  "shampoo",
  "shampoo_bars",
  "shaving",
  "shaving_creams",
  "shower_bombs",
  "shower_gels",
  "styling",
  "toners",
  "vegan_skincare",
];

export const formatName = (name) => {
  return name
    .replace(/_/g, " ")
    .replace(/\b(\w)/g, (char) => char.toUpperCase());
};
