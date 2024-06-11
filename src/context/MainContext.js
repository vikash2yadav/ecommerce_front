import { CatContext } from "./CategoryContext";
import { LangContext } from "./LangContext";
import { LoginContext } from "./LoginContext";


// eslint-disable-next-line react/prop-types
export const MainContext = ({ children }) => {

    return (
        <>
            <LoginContext>
                <LangContext>
                    <CatContext>
                        {children}
                    </CatContext>
                </LangContext>
            </LoginContext>
        </>

    );
};
