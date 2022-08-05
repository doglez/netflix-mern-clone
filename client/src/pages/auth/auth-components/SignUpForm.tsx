import {
    Box,
    Button,
    styled,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { ChevronRightSharp } from "@mui/icons-material";
import React from "react";
import { themeLight } from "../../../themes/theme";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
    email: string;
};

const BoxForm = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "48%",
    backgroundColor: "white",
    borderRadius: 4,
    [theme.breakpoints.down("md")]: {
        width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "95%",
        backgroundColor: "transparent",
        flexDirection: "column",
    },
}));

// Validation data
const Schema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required!"),
});

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: yupResolver(Schema),
    });

    const submitEmail = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    return (
        <Box
            component="form"
            onSubmit={submitEmail}
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <BoxForm>
                    <ThemeProvider theme={themeLight}>
                        <TextField
                            {...register("email")}
                            placeholder="Email address"
                            type="email"
                            fullWidth
                            label="Email address"
                            variant="standard"
                            sx={{
                                paddingLeft: "5px",
                                backgroundColor: "white",
                            }}
                        />
                    </ThemeProvider>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        sx={{ width: "45%" }}
                    >
                        Get Started{<ChevronRightSharp />}
                    </Button>
                </BoxForm>

                <Typography
                    variant="caption"
                    color="error"
                    sx={{
                        paddingTop: "10px",
                    }}
                >
                    {errors.email?.message}
                </Typography>
            </Box>
        </Box>
    );
};

export default SignUpForm;
