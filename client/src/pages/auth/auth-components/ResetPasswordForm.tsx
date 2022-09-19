import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { resetPasswordCrt } from "../../../redux/reducers/authReducers/authSlice";
import { ResetPasswordSchema } from "../../../validations/AuthValidations";

type FormValue = {
    password: string;
    passwordConfirm: string;
    resettoken: string;
};

const resettoken = window.location.pathname.split("/")[2];

const ResetPasswordForm = () => {
    const error = useAppSelector((state) => state.authReucer.error);
    const dispatch = useAppDispatch();
    const [showPass, setShowPass] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValue>({
        resolver: yupResolver(ResetPasswordSchema),
    });

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const submitResetPassword = handleSubmit((data) => {
        data.resettoken = resettoken;
        dispatch(resetPasswordCrt(data));
        reset();
    });

    return (
        <Box
            component="form"
            onSubmit={submitResetPassword}
            sx={{ maxWidth: "100%" }}
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
            <FormControl
                variant="filled"
                fullWidth
                sx={{
                    backgroundColor: "primary.dark",
                    borderRadius: 1,
                }}
            >
                <InputLabel htmlFor="password">Password</InputLabel>
                <FilledInput
                    {...register("password")}
                    type={showPass ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPass}
                                edge="end"
                            >
                                {showPass ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Typography
                variant="caption"
                color="error"
                sx={{ paddingTop: "10px" }}
            >
                {errors.password?.message}
            </Typography>
            <div style={{ paddingBottom: "20px" }} />
            <FormControl
                variant="filled"
                fullWidth
                sx={{
                    backgroundColor: "primary.dark",
                    borderRadius: 1,
                }}
            >
                <InputLabel htmlFor="passwordConfirm">
                    Password Confirmation
                </InputLabel>
                <FilledInput
                    {...register("passwordConfirm")}
                    type={showPass ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPass}
                                edge="end"
                            >
                                {showPass ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Typography
                variant="caption"
                color="error"
                sx={{ paddingTop: "10px" }}
            >
                {errors.passwordConfirm?.message}
            </Typography>
            <div style={{ paddingBottom: "20px" }} />
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                sx={{ textTransform: "none" }}
            >
                Sign Up
            </Button>
        </Box>
    );
};

export default ResetPasswordForm;
