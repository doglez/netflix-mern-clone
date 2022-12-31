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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LandingPageSchema } from "../../../validations/AuthValidations";
import { useNavigate } from "react-router-dom";

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

const LandingPageForm = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: yupResolver(LandingPageSchema),
    });

    const submitEmail = handleSubmit((data) => {
        navigate(`/signup/${data.email}`);
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
            data-testid="form-to-signup"
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
                            inputProps={{ "data-testid": "email-to-signup" }}
                        />
                    </ThemeProvider>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        sx={{ width: "45%" }}
                        data-testid="button-to-signup"
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

export default LandingPageForm;
