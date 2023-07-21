import { AllergenI, ProductI } from "../../interfaces/donuts.interface";
import Button from "../button/Button";

interface CardPropsI {
  item: ProductI;
}
const Card = (props: CardPropsI) => {
  const { item } = props;
  const { title, nbrPerson, price, description, imageUrl, allergenFree } = item;
  return (
    <section className="card-container d-flex">
      <img className="card-img" src={imageUrl.src} alt={imageUrl.alt} />
      <div className="card-text d-flex">
        <h4>
          {title.toUpperCase()} - {nbrPerson} PERSONNES
        </h4>
        <p>{ description }</p>
        <h4>{price} €</h4>

        <div className="allergen-container d-flex">
            {allergenFree?.map((aller) => (
            <img key={aller.id} src={aller.icon} alt={aller.name} />
            ))}
        </div>
      </div>
      <Button title="Ajouter au panier" />
    </section>
  );
};

export default Card;
