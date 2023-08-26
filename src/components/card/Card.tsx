import { Link } from "react-router-dom";
import { ProductI } from "../../interfaces/donuts.interface";
import Button from "../common/button/Button";
import './Card.css';
import { useCartContext } from "contexts/CartContext";

interface CardPropsI {
  item: ProductI;
}
const Card = (props: CardPropsI) => {

  const { addProductToCart } = useCartContext();

  const { item } = props;
  const { id, title, nbrPerson, price, description, imageUrl, allergenFree } = item;

  return (
    <section className="card-container d-flex">
      <img className="card-img" src={imageUrl.src} alt={imageUrl.alt} />
      <div className="card-text d-flex">
        <h4>
          <Link className="card-link" to={`/ProductDetails/${id}`}>{title.toUpperCase()} - {nbrPerson} PERSONNES</Link>
        </h4>
        <p>{ description }</p>
        <h4 className="price">{price} €</h4>

        <div className="allergen-container d-flex">
            {allergenFree?.map((aller) => (
            <img key={aller.id} src={aller.icon} alt={aller.name} />
            ))}
        </div>
      </div>
      <Button title="Ajouter au panier" callback={() => addProductToCart(item)}/>
    </section>
  );
};

export default Card;
