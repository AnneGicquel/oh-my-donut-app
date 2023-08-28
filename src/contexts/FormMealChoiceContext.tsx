import { createContext, useContext, useState } from 'react';
import { StayOrGoType } from "interfaces/donuts.interface"

interface StayOrGoContextType {
  selectedChoice: StayOrGoType | null;
  setSelectedChoice: (choice: StayOrGoType) => void;
}

const FormMealChoiceContext = createContext<StayOrGoContextType | undefined>(undefined);

export const useStayOrGoContext = () => {
  const context = useContext(FormMealChoiceContext);
  if (!context) {
    throw new Error('useStayOrGoContext must be used within a StayOrGoProvider');
  }
  return context;
};

interface StayOrGoProviderProps {
    children: JSX.Element;	
}


export const StayOrGoProvider = (props: StayOrGoProviderProps) => {
    const {children} = props;  
    const [selectedChoice, setSelectedChoice] = useState<StayOrGoType | null>(null);

  return (
    <FormMealChoiceContext.Provider value={{ selectedChoice, setSelectedChoice }}>
      {children}
    </FormMealChoiceContext.Provider>
  );
};
