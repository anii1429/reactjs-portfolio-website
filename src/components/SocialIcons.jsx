import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const SocialIcon = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  margin: theme.spacing(0.5),
}));

const SocialIcons = ({ accounts }) => {
  return (
    <Box sx={{display:"flex",flexDirection:"row"}}>
      {accounts.map((account) => (
        <Tooltip title={account.name}>
          <SocialIcon>
            {account.name === "facebook" && <Facebook color="action"  />}
            {account.name === "twitter" && <Twitter color="action"  />}
            {account.name === "instagram" && <Instagram color="action"  />}
            {account.name === "linkedIn" && <LinkedIn  color="action" />}
            {account.name === "github" && <GitHub color="action"  />}
          </SocialIcon>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialIcons;
