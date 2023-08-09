import ReusableCheckbox from "components/common/button/ReusableCheckbox/ReusableCheckbox";
import { AllergenI, ProductI } from "../../interfaces/donuts.interface";
import Button from "../common/button/Button";

interface CardPropsI {
  item: ProductI;
}
const Card = (props: CardPropsI) => {
  const { item } = props;
  const { title, nbrPerson, price, description, imageUrl, allergenFree } = item;
  const test = () => console.log ('TESTTT') //
  return (
    <section className="card-container d-flex">
      <img className="card-img" src={imageUrl.src} alt={imageUrl.alt} />
      <div className="card-text d-flex">
        <h4>
          {title.toUpperCase()} - {nbrPerson} PERSONNES
        </h4>
        <p>{ description }</p>
        <h4 className="price">{price} €</h4>

        <div className="allergen-container d-flex">
            {allergenFree?.map((aller) => (
            <img key={aller.id} src={aller.icon} alt={aller.name} />
            ))}
        </div>
      </div>
      <Button title="Ajouter au panier" />
      <ReusableCheckbox label="Bougie" callback={test} /> #
    </section>
  );
};

export default Card;
