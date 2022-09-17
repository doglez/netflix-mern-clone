import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ResetPasswordSchema } from "../../../validations/AuthValidations";

type FormValue = {
    password: string;
    passwordConfirm: string;
};

const ResetPasswordForm = () => {
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
        console.log(data);
        reset();
    });

    return (
        <Box
            component="form"
            onSubmit={submitResetPassword}
            sx={{ maxWidth: "100%" }}
        >
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
