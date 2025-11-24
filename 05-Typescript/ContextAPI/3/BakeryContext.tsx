import { createContext, useState, type ReactNode, type FC } from "react";

interface BakeryContextProps {
    cakeType: string;
    setCakeType: (type: string) => void;
}

export const BakeryContext = createContext<BakeryContextProps>({
    cakeType: "Chocolate",
    setCakeType: () => {},
});

const BakeryProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [cakeType, setCakeType ] = useState("Chocolate");

    return(
        <BakeryContext.Provider value={{cakeType, setCakeType }}>
            {children}
        </BakeryContext.Provider>
    );
};

export default BakeryProvider;