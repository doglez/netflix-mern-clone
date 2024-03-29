import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { forgotPasswordCrt } from "../../../redux/reducers/authReducers/authSlice";
import { ForgotPasswordSchema } from "../../../validations/AuthValidations";

type FormValue = {
    email: string;
};

const ForgotPasswordForm = () => {
    const { error, data } = useAppSelector((state) => state.authReucer);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValue>({
        resolver: yupResolver(ForgotPasswordSchema),
    });

    const submitForgotPassword = handleSubmit((data) => {
        dispatch(forgotPasswordCrt(data));
        reset();
    });

    return (
        <Box
            component="form"
            onSubmit={submitForgotPassword}
            sx={{
                maxWidth: "100%",
            }}
        >
            {error ? (
                <Typography
                    variant="caption"
                    color="error"
                    sx={{ paddingTop: "10px" }}
                >
                    {error}
                </Typography>
            ) : (
                <></>
            )}
            {data ? (
                <Typography
                    variant="caption"
                    color="success.main"
                    sx={{ paddingTop: "10px" }}
                >
                    {String(data)}
                </Typography>
            ) : (
                <></>
            )}
            <TextField
                {...register("email")}
                label="Email"
                variant="filled"
                type="email"
                sx={{
                    backgroundColor: "primary.dark",
                    borderRadius: 1,
                }}
                fullWidth
            />
            <Typography
                variant="caption"
                color="error"
                sx={{
                    paddingTop: "10px",
                }}
            >
                {errors.email?.message}
            </Typography>
            <div style={{ paddingBottom: "40px" }} />
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                sx={{
                    textTransform: "none",
                }}
            >
                Sign In
            </Button>
        </Box>
    );
};

export default ForgotPasswordForm;
