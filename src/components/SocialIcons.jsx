import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const SocialIcon = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  margin: theme.spacing(0.5),
  backgroundColor: "transparent",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
  "& svg": {
    fontSize: "1.8rem",
    color: "#212121",
  },
}));

const SocialIcons = ({ accounts }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {accounts.map((account) => (
        <Tooltip title={account.name} key={account.name}>
          <a href={account.url}>
            <SocialIcon>
              {account.name === "facebook" && <Facebook color="inherit" />}
              {account.name === "twitter" && <Twitter color="inherit" />}
              {account.name === "instagram" && <Instagram color="inherit" />}
              {account.name === "linkedIn" && <LinkedIn color="inherit" />}
              {account.name === "github" && <GitHub color="inherit" />}
            </SocialIcon>
          </a>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialIcons;
