import style from "components/productDetailsComponent/ProductDetailsComponent.module.css";
import { useProductContext } from "contexts/ProductContext";//fetch data
import { useEffect } from "react";//fetch data
import { useParams } from "react-router-dom";//fetch data




const ProductDetailsComponent = () => {

    // logique pour fetch les datas d'un produit
    const { product, getOneProduct } = useProductContext();


    const { id } = useParams(); //fetch data

    useEffect(() => {
        getOneProduct(Number(id));
        console.log(Number(id));
    }, [id, getOneProduct]);
    /* appeler getOneProduct sans fournir de tableau de dépendances
    -> ajoutez id et getOneProduct au tableau de dépendances
    -> getOneProduct est appelé uniquement lorsque id ou getOneProduct change.
    -> pas de risque de rendus infinis */

    const subCategoriesToCheck = [8, 9, 10, 4, 2];
    // liste des subCategories qui sont customisables

    return (
        <section className={style.productDetailsComponentSection}>
            {/* ⬇️ pour test fetch data*/}
            {/* {JSON.stringify(product)}  */}
            <div className={style.centeredContent}>

                {/* TITLE */}
                <h3 className={style.productName}>{product && product.title}</h3>
                {/*  doublecheck si product est défini ⬆️. 
                pour éviter l'erreur "Cannot read properties of undefined". */}

                {/* DESCRIPTION */}
                <p className={style.productPrez}>
                    {product && product.description}
                </p>

                {/* INGREDIENTS */}
                {/*  doublecheck si product est défini ⬆️. 
                pour éviter l'erreur "Cannot read properties of undefined". */}
                {product && product.ingredients && (
                    <p className={style.ingredient}>
                        {product.ingredients.map((ingredient: string, index: number) => (
                            <span key={index} style={{ fontFamily: ['farine', 'lait', 'crème', 'beurre', 'amande', 'noisette', 'noix', ' noix de cajou', 'noix de macadamia', 'noix de pécan', 'pistaches'].includes(ingredient.toLowerCase()) ? 'lilita one' : 'varela round' }}>
                                {ingredient}
                                {index < product.ingredients.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                )}

                {/* PARAGRAPH IF CUSTOMIZABLE */}
                {/*  doublecheck si product est défini ⬆️. 
                pour éviter l'erreur "Cannot read properties of undefined". */}
                {product && subCategoriesToCheck.includes(product.subCategory) && (
                    <div className={style.productCustomizable}>
                        <h3>
                            Produit personnalisable
                        </h3>
                        Personnalisation possible en cochant “oui” dans “Personnaliser”.

                        {/* ONLY FOR TOWER */}
                        {product.categoryId === 5 && (
                            <p>
                                ⚠️ COMMANDE A PASSER 48 HEURES A L’AVANCE ⚠️
                            </p>
                        )}
                    </div>
                )}

                {/* ALLERGENS ICONS */}
                {/*  doublecheck si product est défini ⬆️. 
                pour éviter l'erreur "Cannot read properties of undefined". */}
                {product && product.allergenFree && (
                    <div className={style.allergens}>
                        {product.allergenFree.map((allergen: { id: number; name: string; icon: string; }) => (
                            <img
                                key={allergen.id}
                                className={allergen.name.toUpperCase()}
                                alt={allergen.name}
                                src={allergen.icon}
                            />
                        ))}
                    </div>
                )}

                {/* PRODUCT IMAGE */}
                <div className={style.colorBackground}>
                    <img className="imgProduct" alt={product && product.imageUrl.alt} src={product && product.imageUrl.src} />
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsComponent;