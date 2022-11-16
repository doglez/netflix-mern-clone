import { SearchRounded } from "@mui/icons-material";
import {
    AppBar,
    InputBase,
    Link,
    MenuList,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { alpha } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MenuLinksPagesAdults, MenuPagesAdults } from "../../i18n/en";
import { HiddenDown } from "../../ui-components/BoxContainer&Content";
import AccountMenu from "./nav-components/AccountMenu";
import NotificationsBadge from "./nav-components/NotificationsBadge";

const pages = MenuPagesAdults;
const linksPages = MenuLinksPagesAdults;

const LogoText = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "1.9rem",
    color: theme.palette.secondary.main,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        width: "93%",
        margin: "auto",
    },
}));

const StyledLink: any = styled(Link)(({ theme }) => ({
    fontSize: "14px",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.2rem",
    },
}));

const MenuListLarge = styled(MenuList)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10px",
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));

const SearchDiv = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const SytledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    fontSize: "1.2rem",
    "& .MuiInputBase-input": {
        paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            fontSize: "14px",
            width: "0ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const NavBarBrowse = () => {
    return (
        <AppBar component="nav">
            <StyledToolbar>
                <LogoText variant="h3">Dogflix</LogoText>
                <MenuListLarge>
                    {pages.map((page, item) => (
                        <li key={page} style={{ marginLeft: "20px" }}>
                            <StyledLink
                                component={RouterLink}
                                to={linksPages[item]}
                                color="text.primary"
                                underline="none"
                            >
                                {page}
                            </StyledLink>
                        </li>
                    ))}
                </MenuListLarge>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        marginLeft: "auto",
                    }}
                >
                    <SearchDiv>
                        <SearchIconWrapper>
                            <SearchRounded sx={{ color: "text.primary" }} />
                        </SearchIconWrapper>
                        <SytledInputBase placeholder="Titles, peolpe, genres" />
                    </SearchDiv>
                    <HiddenDown size="md">
                        <StyledLink
                            component={RouterLink}
                            to="/kids"
                            color="text.primary"
                            underline="none"
                            sx={{
                                marginLeft: "15px",
                            }}
                        >
                            Kids
                        </StyledLink>
                        <NotificationsBadge />
                    </HiddenDown>
                    <HiddenDown size="sm">
                        <AccountMenu />
                    </HiddenDown>
                </div>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBarBrowse;
