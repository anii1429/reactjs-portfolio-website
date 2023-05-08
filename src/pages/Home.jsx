// import { Box, Button, Grid,Typography } from "@mui/material";
// import React, { useState } from "react";
// import Text from "../components/Text";
// import img from "../Assets/man.avif"
// import ".././style.css";
// import SocialIcons from "../components/SocialIcons";
// const aboutMe = require("../data/aboutme.json");

// const HomePage = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#f5f5f5",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding:"20px"
//       }}
//     >
//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         spacing={2}
//       >
//         <Grid item xs={8} md={6}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               height: "100%",
//             }}
//           >
//             <Typography
//               variant="h1"
//               sx={{ fontFamily: "Poppins", fontWeight: "bold", fontSize: 45 }}
//             >
//              Hey i Am
//             </Typography>
//             <Typography
//               variant="h2"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 mb: 1,
//                 fontFamily: "Poppins",
//                 fontWeight: "semibold",
//                 fontSize: 30,
//               }}
//             >
//               anil chauhan
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 mb: 1,
//                 fontFamily: "Poppins",
//                 fontWeight: "semibold",
//                 fontSize: 20,
//               }}
//             >
//                i am professional React JS developer with expertise in front-end technologies,
//                 API connectivity, project management, and a strong ability to
//                 collaborate with cross-functional teams. Skilled in
//                 implementing form management and validation to ensure robust
//                 web applications.
//             </Typography>
//           </Box>
//         </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained">
//                 <a
//                   style={{ textDecoration: "none" }}
//                   download="AnilChauhan_Resume_new.pdf"
//                   href="/files/AnilChauhan_Resume_new.pdf"
//                   className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
//                   aria-label="Download Resume"
//                 >
//                   <span className="text-sm sm:text-lg font-general-medium duration-100">
//                     Download CV
//                   </span>
//                 </a>
//               </Button>
//             </Grid>
            // <Grid item xs={12}>
            //   <Box>
            //     <SocialIcons accounts={aboutMe.Social} />
            //   </Box>
            // </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <div
//             className="imagedeveloper"
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             <img className="manImage" src={img} alt="my photo" />
//           </div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default HomePage;

import { Box, Button, Container, Grid,Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import Text from "../components/Text";
import img from "../Assets/man.avif"
import ".././style.css";
import SocialIcons from "../components/SocialIcons";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../components/Footer";
const aboutMe = require("../data/aboutme.json");

const HomePage = () => {
  return (
    <Fragment>
      <main
          style={{
            backgroundColor:"#f5f5f5",
            width:"100%",
            height:"100%",
            minHeight:"100%"
          }}
        >
          <Container>
            <Grid2 container sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"40px 0"}}>
            <Grid2 item xs={12} md={12} lg={12} sm={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Box sx={{padding:"40px 0"}}>
              <Typography variant="h1" sx={{color:"yellow",fontSize:"100px"}}>hello.</Typography>
              <Typography variant="h2" sx={{color:"black",fontSize:"50px"}}>i am anil chauhan</Typography>
              <Typography variant="body2" sx={{color:"black",fontSize:"23px"}}>i am react js developer with one year of experience </Typography>
               <Box sx={{padding:"20px 0"}}>
              <Button variant="contained" >
                 <a
                  style={{ textDecoration: "none" }}
                  download="AnilChauhan_Resume_new.pdf"
                 href="/files/AnilChauhan_Resume_new.pdf"
                  className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                  aria-label="Download Resume"
                >
                  <span className="text-sm sm:text-lg font-general-medium duration-100">
                     Download CV
                  </span>
                </a>
              </Button>
               </Box>
              {/* <Box sx={{padding:"20px 0"}}>
              <SocialIcons accounts={aboutMe.Social} />
              </Box> */}
              </Box>
              </Grid2>
            </Grid2>
          </Container>
            <Footer/>
        </main>
    </Fragment>
  );
};

export default HomePage;


