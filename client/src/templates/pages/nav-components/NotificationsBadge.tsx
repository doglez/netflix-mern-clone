import { Notifications } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

const NotificationsBadge = () => {
    return (
        <Badge badgeContent={3} color="error" sx={{ marginLeft: "16px" }}>
            <Notifications />
        </Badge>
    );
};

export default NotificationsBadge;
