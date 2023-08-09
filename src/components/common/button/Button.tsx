import { ProductI } from "../../../interfaces/donuts.interface";

interface ProductProps {
  title: string;
  product?: ProductI;
  quantity?: number;
  // callback: () => void
}

const Button = ({ product, quantity, title }: ProductProps) => (
  <button className="button-add-cart" onClick={() => {}}>{title.toUpperCase()}</button>
);

export default Button;
