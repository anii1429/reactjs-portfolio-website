import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIcon = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  margin: theme.spacing(0.5),
}));

const SocialIcons = ({ accounts }) => {
  return (
    <Box>
      {accounts.map((account) => (
        <Tooltip title={account.name}>
          <SocialIcon>
            {account.type === "facebook" && <FacebookIcon />}
            {account.type === "twitter" && <TwitterIcon />}
            {account.type === "instagram" && <InstagramIcon />}
          </SocialIcon>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialIcons;
