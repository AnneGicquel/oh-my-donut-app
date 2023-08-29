export type StayOrGoType = "Emporter" | "Sur place";

export interface SubMenu {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CategoryI {
  id: number;
  title: string;
  imageUrl: string;
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
  product: ProductI;
  quantity: number;
  totalPrice: number;
  tva: number;
}

export interface ExtraIngredientI {
  ingredient: IngredientI;
  additionalPrice: number;
}

export interface ExtraSubCategoriesI {
  id: number;
  title: string;
  label: string;
  isSelected: boolean;
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
  orderedProducts: ProductCartI[];
  customer?: CustomerInformationI;
  stayOrGo?: StayOrGoType;
  cgv?: false
  facturation?: {
    sub_total: number,
    tva: number,
    total: number;
  }
}
