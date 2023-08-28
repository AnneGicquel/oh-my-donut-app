import { CommandeI, CustomerInformationI, ProductCartI, ProductI, StayOrGoType } from "interfaces/donuts.interface";
import { createContext, useContext, useState } from "react";
import { uid } from 'uid'


interface ICommandeProduct {
    command: CommandeI[] ;
    addToCommand: (newCommand: ProductCartI[], customerInfo?: CustomerInformationI, stay?: StayOrGoType ) => void;
    getCommand: () =>void;
    createCommand: () => void;
    saveCommand: (command: CommandeI) => void;
    resetCommande: () => void
}

const defaultCommand: ICommandeProduct = {
    command: [],
    getCommand:() => {},
    addToCommand: () => {}, 
    createCommand: () => {},
    saveCommand: () => { },
    resetCommande: () => {}
}

const CommandeContext = createContext<ICommandeProduct>(defaultCommand)


interface CommandProviderProps {
    children: JSX.Element;
}

export const CommandeProvider = (props: CommandProviderProps) => {
    const {children} = props; 

    const [commandProducts, setCommandProducts] = useState<CommandeI[]>([]);

    const saveCommand = (command: CommandeI) => {
        localStorage.setItem('command', JSON.stringify(command));
    }

    const createCommand = () => {
        const newCommand: [] = [];
        const stringifyCommand = JSON.stringify(newCommand);
        localStorage.setItem('command', stringifyCommand);
    }

    const getCommand = () => {

        const command = localStorage.getItem("command");
        console.log('CART PRODUCT INSIDE GETPRODUCTSFROMCART =>', commandProducts)
        if (command) {
            setCommandProducts(() => JSON.parse(command));
            return JSON.parse(command);
        } else {
            createCommand();
            getCommand();
        }
    }

    const addToCommand = (newOrderedCart: ProductCartI[], customerInfo?: CustomerInformationI, stay?: StayOrGoType) => {

        console.log('HEHOOO => ', newOrderedCart)
        console.log('HEHOOO2 => ', customerInfo)
        console.log('HEHOOO3 => ', stay)

    const command = getCommand();

    const newCommandProduct : CommandeI = {
        id: uid(),
        orderedProducts: newOrderedCart,
        customer: customerInfo,
        stayOrGo: stay,
        cgv: false
    }

    setCommandProducts(() => commandProducts);
    saveCommand(newCommandProduct);
    
    }


    const resetCommande = () => {
    }

    // ==> CREATION DU COEUR DE NOTRE PANIER, doit être codé après la déclaration des méthodes, sinon problème de scope 
    const commande: ICommandeProduct = {
        command: commandProducts,
        addToCommand,
        getCommand,
        createCommand,
        saveCommand,
        resetCommande
    }

    return <CommandeContext.Provider value = {commande}> {children} </CommandeContext.Provider>

}

// méthode pour pouvoir exporter et utiliser les méthodes de notre context dans les autres composants:
export const useCommandeContext = () => {
    return useContext(CommandeContext);
}



export default CommandeProvider