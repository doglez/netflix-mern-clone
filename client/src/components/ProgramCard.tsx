import { Box, Skeleton, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { IMG_TMDB } from "../config/Config";
import { ITrending } from "../interfaces/InterfacesTrending";

interface IProgramCard {
    program: ITrending;
}

const ProgramCard: FC<IProgramCard> = ({ program }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Box sx={{ width: 230, marginRight: 0.5, mb: 1 }}>
            {program ? (
                <div onClick={handleClickOpen}>
                    <img
                        style={{ width: 230, height: 118 }}
                        alt={program.title || program.name}
                        src={`${IMG_TMDB}/${program.backdrop_path}`}
                    />
                    <Box sx={{ pr: 2 }}>
                        <Typography gutterBottom variant="body2" color="white">
                            {program.title || program.name}
                        </Typography>
                    </Box>
                </div>
            ) : (
                <>
                    <Skeleton variant="rectangular" width={230} height={118} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ProgramCard;
