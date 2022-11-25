import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { DialogTitleProps } from "../interfaces/InterfacesFC";
import { BgDescriptions } from "../ui-components/bgHome";

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, backdropPath, ...other } = props;

    return (
        <BgDescriptions
            sx={{ m: 0, p: 2 }}
            {...other}
            backdropPath={backdropPath}
        >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Close />
                </IconButton>
            ) : null}
        </BgDescriptions>
    );
};

export default BootstrapDialogTitle;
