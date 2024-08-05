import { CatContext } from "./CategoryContext";
import { LangContext } from "./LangContext";
import { LoginContext } from "./LoginContext";
import { ProductContext } from "./ProductContext";
import { ProductFaqContext } from "./ProductFaqContext";
import { ProductReviewContext } from "./ProductReviewContext";
import { OrderContext } from "./OrderContext";
import { ProductVariantContext } from "./ProductVariantContext";
import { CustomerContext } from "./CustomerContext";
import { PartnerContext } from "./PartnerContext";
import { AdminContext } from "./AdminContext";
import { CartContext } from "./CartContext";
import { CountryStateCityContext } from "./CountryStateCityContext";
import { CommonContext } from "./CommonContext";
import { RoleContext } from "./RoleContext"
import { AttributeContext } from "./AttributeContext"
import { SpecificationContext } from "./SpecificationContext";

// eslint-disable-next-line react/prop-types
export const MainContext = ({ children }) => {

    return (
        <>
            <CommonContext>
                <LoginContext>
                    <RoleContext>
                        <CountryStateCityContext>
                            <LangContext>
                                <CustomerContext>
                                    <CartContext>
                                        <AdminContext>
                                            <PartnerContext>
                                                <ProductContext>
                                                <SpecificationContext>
                                                    <AttributeContext>
                                                    <ProductVariantContext>
                                                        <ProductFaqContext>
                                                            <ProductReviewContext>
                                                                <CatContext>
                                                                    <OrderContext>

                                                                        {children}

                                                                    </OrderContext>
                                                                </CatContext>
                                                            </ProductReviewContext>
                                                        </ProductFaqContext>
                                                    </ProductVariantContext>
                                                    </AttributeContext>
                                                    </SpecificationContext>
                                                </ProductContext>
                                            </PartnerContext>
                                        </AdminContext>
                                    </CartContext>
                                </CustomerContext>
                            </LangContext>
                        </CountryStateCityContext>
                    </RoleContext>
                </LoginContext>
            </CommonContext>
        </>

    );
};
