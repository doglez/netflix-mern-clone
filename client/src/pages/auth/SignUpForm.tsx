import { Box, Button, styled, TextField, ThemeProvider } from "@mui/material";
import { ChevronRightSharp } from "@mui/icons-material";
import React, { useState } from "react";
import { themeLight } from "../../themes/theme";

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

const SignUpForm = () => {
    const [email, setEmail] = useState<String | null>(null);

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <form
            onSubmit={handleSendEmail}
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
            }}
        >
            <BoxForm>
                <ThemeProvider theme={themeLight}>
                    <TextField
                        id="email"
                        fullWidth
                        label="Email address"
                        placeholder="Email address"
                        onChange={handleChangeEmail}
                        type="email"
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
        </form>
    );
};

export default SignUpForm;
