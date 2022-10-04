import {
    ArrowDropDown,
    EditOutlined,
    HelpOutline,
    PersonOutline,
} from "@mui/icons-material";
import {
    Avatar,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";
import React, { useState } from "react";

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    disableRipple
                >
                    <Avatar variant="rounded" sx={{ width: 32, height: 32 }} />
                    <ArrowDropDown />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem>
                    <Avatar variant="rounded" /> Kids
                </MenuItem>
                <MenuItem>
                    <Avatar variant="rounded" /> Other User
                </MenuItem>
                <MenuItem>
                    <EditOutlined sx={{ marginRight: "12px" }} /> Manage Profile
                </MenuItem>
                <MenuItem>
                    <PersonOutline sx={{ marginRight: "12px" }} /> Account
                </MenuItem>
                <MenuItem>
                    <HelpOutline sx={{ marginRight: "12px" }} /> Help Center
                </MenuItem>
                <Divider />
                <MenuItem>Sign out to Dogflix</MenuItem>
            </Menu>
        </>
    );
};

export default AccountMenu;
