import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignInSchema } from "../../../validations/AuthValidations";

type FormValue = {
    email: string;
    password: string;
};

const SignInForm = () => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValue>({ resolver: yupResolver(SignInSchema) });

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const submitSignIn = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    return (
        <Box
            component="form"
            onSubmit={submitSignIn}
            sx={{
                maxWidth: "100%",
            }}
        >
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
                sx={{
                    paddingTop: "10px",
                }}
            >
                {errors.password?.message}
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "2px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Checkbox
                        id="remember"
                        defaultChecked
                        size="small"
                        sx={{ padding: "0" }}
                    />
                    <label
                        style={{
                            color: "#616161",
                            fontSize: "0.875rem",
                            paddingTop: "7px",
                        }}
                        htmlFor="remember"
                    >
                        Remember me
                    </label>
                </Box>
                <Typography
                    color="primary.light"
                    variant="body2"
                    sx={{
                        paddingTop: "5px",
                    }}
                >
                    Need help?
                </Typography>
            </Box>
        </Box>
    );
};

export default SignInForm;