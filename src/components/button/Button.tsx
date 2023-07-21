import { ProductI } from "../../interfaces/donuts.interface";

interface ProductProps {
  title: string;
  product?: ProductI;
  quantity?: number;
  // callback: () => void
}

const Button = ({ product, quantity, title }: ProductProps) => (
  <button onClick={() => {}}>{title.toUpperCase()}</button>
);

export default Button;
