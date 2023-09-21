export const formatPrice = (price, cents = false) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
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

const categoryImages = {
  "bath_bombs": '/images/bath_bombs.jpg',
  "cleansers_and_scrubs": '/images/cleansers_and_scrubs.jpg',
  "hair_treatments": '/images/hair_treatments.jpg',
  "body_scrubs": '/images/body_scrubs.jpg',
  "styling": '/images/styling.jpg',
  "aroma_and_bath_melts": '/images/aroma_and_bath_melts.jpg',
  "makeup": '/images/makeup.jpg',
  "conditioners": '/images/conditioners.jpg',
};

export function getImageSrc(category) {
  return categoryImages[category] || '/images/bath_bomb_7.jpg';
}

