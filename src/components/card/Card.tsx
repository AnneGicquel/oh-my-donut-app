import { AllergenI, ProductI } from "../../interfaces/donuts.interface";
import Button from "../button/Button";

interface CardPropsI {
  item: ProductI;
}
const Card = (props: CardPropsI) => {
  const { item } = props;
  const { title, nbrPerson, price, description, allergenFree } = item;
  return (
    <section>
      <img src={""} alt={""} />
      <div>
        <h4>
          {title.toUpperCase()} - {nbrPerson} PERSONNES
        </h4>
        <p>{description}</p>
        <h4>{price} €</h4>

        {allergenFree?.map((aller) => (
          <img key={aller.id} src={aller.icon} alt={aller.name} />
        ))}
      </div>
      <Button title="Ajouter au panier" />
    </section>
  );
};

export default Card;
