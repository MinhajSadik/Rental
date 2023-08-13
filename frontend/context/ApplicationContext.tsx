import React, { createContext, useState } from 'react';


export const AppContext = createContext()

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