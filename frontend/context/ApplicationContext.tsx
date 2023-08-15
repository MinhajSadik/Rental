import React, { createContext, useState } from 'react';


type AppContextType = {
    setActiveComponent: (active: number) => void;
    activeComponent: number
  };

const defaultValue: AppContextType = {
    setActiveComponent: (active: number) => {},
    activeComponent: 1
}

export const AppContext = createContext<AppContextType>(defaultValue)

interface contextPropsType {
    children: React.ReactNode
}

const ApplicationContext: React.FC<contextPropsType> = ({children}) => {
    const [activeComponent, setActiveComponent] = useState<React.SetStateAction<number>>(1)

    const contextValues = {
        activeComponent,
        setActiveComponent
    }

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

export default ApplicationContext;