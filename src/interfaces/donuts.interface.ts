export type StayOrGoType = "Emporter" | "Sur place";

export interface SubMenu {
  id: number;
  title: string;
}

export interface CategoryI {
  id: number;
  title: string;
  subCategories?: SubMenu[];
  isVisible?: boolean;
  isDefault?: boolean;
}

interface ImageI {
  src: string;
  alt: string;
}

export interface ProductI {
  id: number;
  title: string;
  nbrPerson?: number;
  description: string;
  price: number;
  imageUrl: ImageI;
  allergenFree: AllergenI[];
  ingredients: IngredientI[];
  extras: [];
  quantity?: number;
  isCustomizable: boolean;
  categoryId: number;
}

export interface AllergenI {
  id: number;
  name: string;
  icon: string;
}

export interface IngredientI {
  id: number;
  name: string;
}

export interface ProductCartI {
  id: string;
  products: ProductI;
  quantity: number;
  totalPrice: number;
  tva: number;
}

export interface ExtraIngredientI {
  ingredient: IngredientI;
  additionalPrice: number;
}

export interface CustomerInformationI {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
}

export interface CommandeI {
  id: string;
  cart: ProductCartI;
  Customer: CustomerInformationI;
  StayOrGo: StayOrGoType;
}
