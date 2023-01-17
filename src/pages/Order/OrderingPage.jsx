import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import { TextField } from "@mui/material";
import SectionLayout from "../../layout/SectionLayout.jsx";
import OrderingCard from "../../components/order/OrderingCard.jsx";
import TimeSelect from "../../components/order/TimeSelect.jsx";
import PaymentMethod from "../../components/order/PaymentMethod.jsx";
import Product from "../../components/product/Product.jsx";
import DataContext from "../../data/DataContext.jsx";
import { Controller, useForm } from "react-hook-form";
import apiService from "../../api/services/firebaseService.js";

// full width style
const fullWidth = {
    width: "100%",
};

/**
 * required rule object
 */
const requireRule = {
    required: true,
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
const ContactInfo = ({ label, type, name, required, onChange }) => (
    <InfoWrap container>
        <Grid2 lg={6} md={6} sm={6} xs={12}>
            <TextField
                sx={fullWidth}
                variant="standard"
                label={label || ""}
                type={type || "text"}
                name={name}
                required={required || false}
                onChange={onChange}
            />
        </Grid2>
    </InfoWrap>
);

const OrderFormControl = ({ name, rules, control, label, type }) => {
    const required = rules ? true : false;

    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field: { onChange, value } }) => (
                <ContactInfo
                    onChange={onChange}
                    value={value}
                    label={label}
                    type={type}
                    required={required}
                />
            )}
        />
    );
};

const OrderingPage = () => {
    const { cart_items } = useContext(DataContext); // shopping cart data
    const [orderId, setOrderId] = useState("");

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        data.products = cart_items;
        data.memo = data.memo ? data.memo : "";

        const orderPromise = apiService
            .postOrder(data)
            .then((id) => setOrderId(id));

        const cartPromise = apiService.deleteCart("guest");

        Promise.all([orderPromise, cartPromise]).then(() => {
            location.href = "/";
        });
    };

    return (
        <>
            <SectionLayout
                title="Place an order"
                detailText="Back to menu"
                detailLink="/menu"
            >
                <OrderingCard />
            </SectionLayout>
            <form action="/" onSubmit={handleSubmit(onSubmit)}>
                <SectionLayout title="Contact Information">
                    <OrderFormControl
                        name="user"
                        label="Name"
                        rules={requireRule}
                        control={control}
                    />
                    <OrderFormControl
                        name="phone"
                        label="Phone"
                        type="tel"
                        rules={requireRule}
                        control={control}
                    />
                    <OrderFormControl
                        name="email"
                        label="Email"
                        type="email"
                        rules={requireRule}
                        control={control}
                    />
                </SectionLayout>
                <SectionLayout title="Delivery and Payment">
                    <OrderFormControl
                        name="address"
                        label="Delivery Address"
                        rules={requireRule}
                        control={control}
                    />
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
                    <OrderFormControl
                        name="memo"
                        label="Memo"
                        control={control}
                    />
                    <InfoWrap container>
                        <Grid2 lg={6} md={6} sm={6}>
                            <Product.Button
                                component="button"
                                type="submit"
                                sx={fullWidth}
                            >
                                Checkout
                            </Product.Button>
                        </Grid2>
                    </InfoWrap>
                </SectionLayout>
            </form>
        </>
    );
};

export default OrderingPage;
