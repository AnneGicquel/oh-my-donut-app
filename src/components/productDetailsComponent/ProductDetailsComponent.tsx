import style from "components/productDetailsComponent/ProductDetailsComponent.module.css";

const ProductDetailsComponent = () => {
    return (
        <section className={style.productDetailsComponentSection}>
            <div className={style.centeredContent}>
                <h3 className={style.productName}>NomDuProdyuit entre accolades</h3>
                <p className={style.productPrez}>
                Recette blah blablah entre accollades Recette blah blabalh entre accollades Recette blah blablh entre accollades Recette blah blablh entre accollades
                </p>
                <p className={style.ingredient}>
                IngrédientsEntreAccolades, IngrédientsEntreAccolades, IngrédientsEntreAccolades, IngrédientsEntreAccolades; IngrédientsEntreAccolades, IngrédientsEntreAccolades, IngrédientsEntreAccolades, IngrédientsEntreAccolades;
                </p>

                {/* if produit personnalisable */}
                <div className={style.productCustomizable}>
                    <h3>
                        Produit personnalisable
                    </h3>
                    Personnalisation possible en cochant “oui” dans “Personnaliser”.
                    {/* if tower */}
                    <p>
                        ⚠️ COMMANDE A PASSER 48 HEURES A L’AVANCE ⚠️
                    </p>
                </div>
                <div className={style.allergens}>
                    <img className="GLUTEN" alt="Gluten" src="assets/images/oh-my-donut-images/ALLERGENS/GLUTEN.png" />
                    <img className="MILK" alt="Milk" src="assets/images/oh-my-donut-images/ALLERGENS/MILK.png" />
                    <img className="NUTS" alt="Nuts" src="assets/images/oh-my-donut-images/ALLERGENS/NUT.png" />
                </div>
                {/* pour après ⬇️ */}
                {/* <img className="imgProduct" alt="Pictures of NomDuProduitsEntreAccolades" src="srcPhotoEntreAccolades" /> */}
                {/* pour les tests ⬇️ */}
                <div className={style.colorBackground}>
                    <img className="imgProduct" alt="Pictures of NomDuProduitsEntreAccolades" src="assets/images/oh-my-donut-images/PRODUCTS/TOWER/tower-anniversaire/tower-anni-2.png" />
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsComponent;