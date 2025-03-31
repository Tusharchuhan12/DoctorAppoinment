import { createContext } from "react";
import assets from '../compontes/doctorData/assets.json';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const value = {
        assets
    };

    return (
        <AppContext.Provider value={value}>  {/* Fixed: Using AppContext.Provider */}
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;