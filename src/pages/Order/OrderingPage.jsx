import React from "react";
import styled from "@emotion/styled";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import { Container, TextField } from "@mui/material";
import SiteFooter from "../../components/shared/SiteFooter.jsx";
import SiteHeader from "../../components/shared/SiteHeader.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import OrderingCard from "../../components/order/OrderingCard.jsx";
import TimeSelect from "../../components/order/TimeSelect.jsx";
import PaymentMethod from "../../components/order/PaymentMethod.jsx";
import Product from "../../components/product/Product.jsx";

// full width style
const fullWidth = {
    width: "100%",
};

/**
 * InfoWrap component
 */
const InfoWrap = styled(Grid2)(() => ({
    marginBottom: "1rem",
    padding: "0 1rem",
}));

/**
 * ContactInfo component
 * @param {Object} props Contact component props
 * @returns Contact text field
 */
const ContactInfo = ({ label, type, placeholder }) => (
    <InfoWrap container>
        <Grid2 lg={6} md={6} sm={6} xs={12}>
            <TextField
                sx={fullWidth}
                variant="standard"
                label={label || ""}
                type={type || "text"}
                placeholder={placeholder || ""}
                required
            />
        </Grid2>
    </InfoWrap>
);

const OrderingPage = () => (
    <>
        <Container>
            <SiteHeader />
            <SectionLayout
                title="Place an order"
                detailText="Back to menu"
                detailLink="/menu"
            >
                <OrderingCard />
            </SectionLayout>
            <SectionLayout title="Contact Information">
                <ContactInfo label="Name" />
                <ContactInfo label="Phone" type="tel" />
                <ContactInfo label="Email" type="email" />
            </SectionLayout>
            <SectionLayout title="Delivery and Payment">
                <ContactInfo label="Delivery Address" />
                <ContactInfo type="date" />
                <InfoWrap container>
                    <Grid2 lg={6} md={6} sm={6} xs={12}>
                        <TimeSelect />
                    </Grid2>
                </InfoWrap>
                <InfoWrap container>
                    <Grid2 lg={6} md={6} sm={6}>
                        <PaymentMethod />
                    </Grid2>
                </InfoWrap>
                <ContactInfo label="Memo" />
                <InfoWrap container>
                    <Grid2 lg={6} md={6} sm={6}>
                        <Product.Button sx={fullWidth} href="/">
                            Checkout
                        </Product.Button>
                    </Grid2>
                </InfoWrap>
            </SectionLayout>
        </Container>
        <SiteFooter />
    </>
);

export default OrderingPage;
