import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ".././style.css"
import image from "../data/images/todo.jpg"

const ProjectCard = ({project}) => {
   return (
    <><Card sx={{ maxWidth: 345 }} className="project-card-view">
    <CardMedia
      // sx={{ height: 140 }}
      image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fponyfoo.com%2Farticles%2Fyou-dont-need-a-todo-app&psig=AOvVaw25mKNzbTnEWesWOWsCJcbR&ust=1682045478464000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjjwO65t_4CFQAAAAAdAAAAABAE"}
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
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card></>
  );
}

export default ProjectCard

{/* <Card className="project-card-view">
<Card.Img variant="top" src={props.imgPath} alt="card-img" />
<Card.Body>
  <Card.Title>{props.title}</Card.Title>
  <Card.Text style={{ textAlign: "justify" }}>
    {props.description}
  </Card.Text>
  <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
    View
  </Button>
  {"\n"}
  {"\n"}


  {!props.isBlog && props.demoLink && (
    <Button
      variant="primary"
      href={props.demoLink}
      target="_blank"
      style={{ marginLeft: "10px" }}
    >

      {"Demo"}
    </Button>
  )}
</Card.Body>
</Card> */}