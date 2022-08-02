import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    FilledInput,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputAdornment,
    InputLabel,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBarAuth from "../../../templates/auth/NavBarAuth";

const ContainerBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -45%)",
    width: "450px",
    backgroundColor: "black",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

const ContentBox = styled(Box)(({ theme }) => ({
    margin: "40px 70px",
    [theme.breakpoints.down("sm")]: {
        margin: "40px 40px",
    },
}));

const SignIn = () => {
    const [showPass, setShowPass] = useState<boolean>(false);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    return (
        <>
            <NavBarAuth />
            <ContainerBox>
                <ContentBox>
                    <Typography
                        color="white"
                        variant="h4"
                        sx={{ fontWeight: "bold", paddingBottom: "25px" }}
                    >
                        Sign In
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            id="email"
                            label="Email"
                            variant="filled"
                            type="email"
                            sx={{
                                backgroundColor: "primary.dark",
                                borderRadius: 1,
                            }}
                            fullWidth
                            required
                        />
                        <div style={{ paddingBottom: "20px" }} />
                        <FormControl
                            variant="filled"
                            fullWidth
                            required
                            sx={{
                                backgroundColor: "primary.dark",
                                borderRadius: 1,
                            }}
                        >
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <FilledInput
                                id="password"
                                type={showPass ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleShowPass}
                                            edge="end"
                                        >
                                            {showPass ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div style={{ paddingBottom: "40px" }} />
                        <Button
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
                    <div style={{ paddingBottom: "40px" }} />
                    <Typography
                        color="primary.light"
                        variant="body1"
                        sx={{ fontWeight: "bold" }}
                    >
                        New to Netflix?{" "}
                        <Link
                            to="/"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Sign up now
                        </Link>
                    </Typography>
                </ContentBox>
            </ContainerBox>
        </>
    );
};

export default SignIn;
