import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ".././style.css";
import notes from "../data/images/todo.jpg";
import palette from "../data/images/colors-app.avif";
import News from "../data/images/news.avif";

const ProjectCard = ({ project }) => {
  const [animatedStyle, setAnimatedStyle] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(50px)",
  }));

  // animate the card on mount
  React.useEffect(() => {
    setAnimatedStyle({
      opacity: 1,
      transform: "translateY(0px)",
      delay: 100,
    });
  }, [setAnimatedStyle]);

  return (
    <animated.div style={animatedStyle}>
      <Card className="project-card-view">
        <CardMedia
          sx={{ height: 100 }}
          image={
            project.img === "palette"
              ? palette
              : project.img === "News"
              ? News
              : notes
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </animated.div>
  );
};

export default ProjectCard;
