import { Link } from "react-router-dom";
import { ProductI } from "../../interfaces/donuts.interface";
import Button from "../common/button/Button";
import './Card.css';
import { useCartContext } from "contexts/CartContext";
import { useCategoryContext } from "contexts/CategoryContext";

interface CardPropsI {
  item: ProductI;
}
const Card = (props: CardPropsI) => {

  const { addProductToCart, getProductsFromCart } = useCartContext();
  const { categoryStyle } = useCategoryContext();

  const { item } = props;
  const { id, title, nbrPerson, price, description, imageUrl, allergenFree } = item;

  return (
    <Link className="card-link" to={`/ProductDetails/${id}`}>
    <section className="card-container d-flex" style={categoryStyle ? { backgroundColor: categoryStyle } : {}}>
      <div>
        {/* ⬆️ div pour que l'image ne déborde plus */}
        <img className="card-img" src={imageUrl.src} alt={imageUrl.alt} />
      </div>
      <div className="card-text d-flex">
        <h4>
          {/* {title.toUpperCase()} - {nbrPerson} PERSONNES */}
          {title.toUpperCase()} {nbrPerson && nbrPerson > 1 && `\n - ${nbrPerson} PERSONNES`}
        </h4>
        <p>{description}</p>
        <h4 className="price">{price.toFixed(2)} €</h4>

        <div className="allergen-container d-flex">
          {allergenFree?.map((aller) => (
            <img key={aller.id} src={aller.icon} alt={aller.name} />
          ))}
        </div>
      </div>
      <Button title="Ajouter au panier >" callback={() => addProductToCart(item)} />
    </section>
    </Link>
  );
};

export default Card;
