import { CatContext } from "./CategoryContext";
import { LangContext } from "./LangContext";


// eslint-disable-next-line react/prop-types
export const MainContext = ({ children }) => {

    return (
        <>
            <LangContext>
                <CatContext>
                    {children}
                </CatContext>
            </LangContext>
        </>

    );
};
