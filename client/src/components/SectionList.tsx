import { Box, Container, Typography } from "@mui/material";
import React, { FC } from "react";
import ProgramCardList from "./ProgramCardList";

interface ISectionList {
    typeContent: string;
}

const SectionList: FC<ISectionList> = ({ typeContent }) => {
    return (
        <Container maxWidth="xl">
            <Typography variant="h6" color="white" fontWeight="bold" p="20px">
                {typeContent}
            </Typography>
            <Box sx={{ overflow: "hidden" }}>
                <ProgramCardList />
            </Box>
        </Container>
    );
};

export default SectionList;
