import { ProductI } from "../../../interfaces/donuts.interface";
import './Button.css';

interface ProductProps {
  title: string;
  product?: ProductI;
  quantity?: number;
  callback?: () => void
}

const Button = ({ product, quantity, title, callback }: ProductProps) => (
  <button className="button-add-cart" onClick={callback}>{title.toUpperCase()}</button>
);

export default Button;
