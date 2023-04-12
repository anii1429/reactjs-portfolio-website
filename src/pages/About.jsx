import { Grid } from '@mui/material'
import React from 'react'
const aboutme = require("../data/aboutme.json")

const About = () => {
  return (
    <div className='aboutpagebackground'>
         <Grid container spacing={2}>
         <Grid item xs={8}  md={7}>
         <h3 className='aboutmetext'>About <span>Me</span></h3>
                <p className='aboutdetails'>I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                </p>
                <ul className='skilllist'>
                    {/* <Row>
                        <h3>Skills</h3>
                        <Col md={7}>
                            <li>HTML5/CSS3</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Bootsrap 5</li>
                        </Col>
                        <Col md={5}>
                            <li>React Js</li>
                            <li>Redux Js</li>
                            <li>React-Bootsrap</li>
                            <li>Material-ui</li>
                            <li>Git/Github</li>
                        </Col>
                    </Row> */}
                </ul>
            </Grid>
            <Grid item xs={8}  md={7}>
            <div className="webimage"></div>
                </Grid>
         </Grid>
</div>
  )
}

export default About
