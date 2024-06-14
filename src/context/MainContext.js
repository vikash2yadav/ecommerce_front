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

// eslint-disable-next-line react/prop-types
export const MainContext = ({ children }) => {

    return (
        <>
            <LoginContext>
                <LangContext>
                    <CartContext>
                        <AdminContext>
                            <PartnerContext>
                                <ProductContext>
                                    <CustomerContext>
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
                                    </CustomerContext>
                                </ProductContext>
                            </PartnerContext>
                        </AdminContext>
                    </CartContext>
                </LangContext>
            </LoginContext>
        </>

    );
};
