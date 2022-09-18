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
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { SignUpCrt } from "../../../redux/reducers/authReducers/authSlice";
import { SignUpSchema } from "../../../validations/AuthValidations";

type FormValue = {
    email: string;
    password: string;
    passwordConfirm: string;
};

const SignUpForm = () => {
    const pathname = window.location.pathname;
    const errorState = useAppSelector((state) => state.authReucer.error);
    const dispatch = useAppDispatch();
    const [showPass, setShowPass] = useState<boolean>(false);
    const [email, setEmail] = useState<string>(pathname.split("/")[2]);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValue>({ resolver: yupResolver(SignUpSchema) });

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const submitSignUp = handleSubmit((data) => {
        setEmail("");
        reset();
        dispatch(SignUpCrt(data));
    });

    return (
        <Box component="form" onSubmit={submitSignUp} sx={{ maxWidth: "100%" }}>
            {errorState ? (
                <Typography
                    variant="caption"
                    color="error"
                    sx={{ paddingTop: "10px" }}
                >
                    {errorState}
                </Typography>
            ) : (
                <></>
            )}
            <TextField
                {...register("email")}
                label="Email"
                variant="filled"
                type="email"
                sx={{ backgroundColor: "primary.dark", borderRadius: 1 }}
                fullWidth
                onChange={handleEmail}
                value={email}
            />
            <Typography
                variant="caption"
                color="error"
                sx={{ paddingTop: "10px" }}
            >
                {errors.email?.message}
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

export default SignUpForm;
