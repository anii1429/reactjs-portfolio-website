import React from "react";
import { styled, useTheme } from "@mui/material/styles";
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
  },
}));

const SocialIcons = ({ accounts }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {accounts.map((account) => (
        <Tooltip title={account.name} key={account.name}>
          <a href={account.url}>
            <SocialIcon>
              {account.name === "facebook" && (
                <Facebook
                  sx={{
                    color: theme.palette.mode === "dark" ? "#f1f1f1" : "#3b5998",
                  }}
                />
              )}
              {account.name === "twitter" && (
                <Twitter sx={{ color: "#1DA1F2" }} />
              )}
              {account.name === "instagram" && (
                <Instagram
                  sx={{
                    color: theme.palette.mode === "dark" ? "#f1f1f1": "#E1306C",
                  }}
                />
              )}
              {account.name === "linkedIn" && (
                <LinkedIn
                  sx={{
                    color: theme.palette.mode === "dark" ? "#f1f1f1" : "#0e76a8",
                  }}
                />
              )}
              {account.name === "github" && (
                <GitHub
                  sx={{
                    color: theme.palette.mode === "dark" ? "#f1f1f1" : "#000000",
                  }}
                />
              )}
            </SocialIcon>
          </a>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialIcons;
