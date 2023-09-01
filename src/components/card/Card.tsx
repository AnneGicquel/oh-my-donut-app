import { Link } from "react-router-dom";
import { ProductI } from "../../interfaces/donuts.interface";
import Button from "../common/button/Button";
import './Card.css';
import { useCartContext } from "contexts/CartContext";
import { useCategoryContext } from "contexts/CategoryContext";
import toast, { Toaster } from 'react-hot-toast';

interface CardPropsI {
  item: ProductI;
}
const Card = (props: CardPropsI) => {

  const notify = () => toast.success('Le produit a été ajouté au panier!', {
    position: "top-center"
  });

  const { addProductToCart, getProductsFromCart, getRound } = useCartContext();
  const { categoryStyle } = useCategoryContext();

  const { item } = props;
  const { id, title, nbrPerson, price, description, imageUrl, allergenFree } = item;
  item.customExtras = {
    nbrPersonnes: { nbr: 0, price: 0 },
    plaque: false,
    name: { title: '', price: 0 },
    candle: { isSelected: false, price: 0 },
    allergen: { gluten: false, lactose: false, fruits: false }
  }
  return (
    <section className="card-container d-flex" style={categoryStyle ? { backgroundColor: categoryStyle } : {}}>
      <div>
        {/* ⬆️ div pour que l'image ne déborde plus */}
        <img className="card-img" src={imageUrl.src} alt={imageUrl.alt} />
      </div>
      <div className="card-text d-flex">
       <Link className="card-link" to={`/ProductDetails/${id}`}>
        <h4>
          {/* {title.toUpperCase()} - {nbrPerson} PERSONNES */}
          {title.toUpperCase()} {nbrPerson && nbrPerson > 1 && `\n - ${nbrPerson} PERSONNES`}
        </h4>
        <p>{description}</p>
        <h4 className="price">{getRound(price).toFixed(2)} €</h4>
           </Link>

        <div className="allergen-container d-flex">
          {allergenFree?.map((aller) => (
            <img key={aller.id} src={aller.icon} alt={aller.name} />
          ))}
        </div>
      </div>
      <Button title="Ajouter au panier >" callback={() =>{ addProductToCart(item); notify()}} />
      <Toaster />
    </section>
  );
};

export default Card;
