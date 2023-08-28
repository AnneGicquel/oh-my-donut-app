import { CommandeI, CustomerInformationI, ProductCartI, ProductI } from "interfaces/donuts.interface";
import { createContext, useContext, useState } from "react";
import { uid } from 'uid'


interface ICommandeProduct {
    command: CommandeI[];
    addToCommand:(newCommand: ProductCartI, customerInfo: CustomerInformationI ) => void;
    resetCommande: () => void
}

const defaultCommand: ICommandeProduct = {
    command: [],
    addToCommand: () => {}, 
    resetCommande: () => {}
}

const CommandeContext = createContext<ICommandeProduct>(defaultCommand)


interface CommandProviderProps {
    children: JSX.Element;
}

export const CommandeProvider = (props: CommandProviderProps) => {
    const {children} = props; 

    const [commandProducts, setCommandProducts] = useState<CommandeI[]>([]);

    const addToCommand = (newOrderedCart: ProductCartI, customerInfo: CustomerInformationI) => {
    const newCommandProduct : CommandeI = {
        id: uid(),
        orderedProducts: newOrderedCart,
        customer: customerInfo,
        stayOrGo: 'Sur place',
        cgv: false
    }

    setCommandProducts([...commandProducts, newCommandProduct])
    console.log(commandProducts)

    //Condition: vérifier si le produit existe dans le panier:
    const existingProduct = commandProducts.find((p) => p.id === newOrderedCart.id);

    if (!existingProduct) {
        setCommandProducts([...commandProducts, newCommandProduct]);
    }

    }


    const resetCommande = () => {
    }

    // ==> CREATION DU COEUR DE NOTRE PANIER, doit être codé après la déclaration des méthodes, sinon problème de scope 
    const commande: ICommandeProduct = {
        command: commandProducts,
        addToCommand,
        resetCommande
    }

    return <CommandeContext.Provider value = {commande}> {children} </CommandeContext.Provider>

}

// méthode pour pouvoir exporter et utiliser les méthodes de notre context dans les autres composants:
export const useCommandeContext = () => {
    return useContext(CommandeContext);
}



export default CommandeProvider