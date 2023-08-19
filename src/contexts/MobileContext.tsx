import { useContext, createContext, useState } from "react";

interface ToggleDataI {
    toggleMobileMenu: boolean;
    getToggle: () => void;
}

const defaultMobile: ToggleDataI = {
    toggleMobileMenu: false,
    getToggle: () => {},
}


const MobileContext = createContext<ToggleDataI>(defaultMobile);

interface ToggleProviderProps {
    children: JSX.Element;
}

const MobileProvider = ({ children }: ToggleProviderProps): JSX.Element => {

    const [toggleMobileMenu, SetToggleMobileMenu] = useState<boolean>(false);

    const getToggle = () => {
        SetToggleMobileMenu(!toggleMobileMenu);
    }

    const allToggles: ToggleDataI = {
        toggleMobileMenu: toggleMobileMenu,
        getToggle,
    }

    return <MobileContext.Provider value={allToggles}>{children}</MobileContext.Provider>
           
}

export const useMobileContext = (): ToggleDataI => useContext(MobileContext);

export default MobileProvider;