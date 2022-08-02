import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    styled,
    Typography,
} from "@mui/material";
import React from "react";
import LenguageSelect from "../../components/LenguageSelect";
import { FooterTexts } from "../../i18n/en";

const ContentBox = styled(Box)(({ theme }) => ({
    width: "75%",
    margin: "60px 0",
    [theme.breakpoints.down("sm")]: { width: "85%" },
}));

const FooterAuth = () => {
    return (
        <Box
            sx={{
                backgroundColor: "black",
            }}
        >
            <Divider
                sx={{
                    height: "0px",
                    border: "none",
                    borderTop: "7px solid",
                    borderColor: "primary.dark",
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ContentBox>
                    <Typography variant="subtitle1" color="primary.light">
                        Questions? Call +1 (408) 514-5239 (USA)
                    </Typography>
                    <List dense sx={{ marginBottom: "20px" }}>
                        <Grid container spacing={2}>
                            {FooterTexts.map((text) => (
                                <Grid item xs={6} md={4} lg={3} key={text}>
                                    <ListItem
                                        sx={{
                                            color: "primary.light",
                                            paddingLeft: 0,
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {text}
                                    </ListItem>
                                </Grid>
                            ))}
                        </Grid>
                    </List>
                    <LenguageSelect />
                    <Typography
                        variant="subtitle2"
                        color="primary.light"
                        sx={{ paddingTop: "20px" }}
                    >
                        DOGFLIX
                    </Typography>
                </ContentBox>
            </Box>
        </Box>
    );
};

export default FooterAuth;
