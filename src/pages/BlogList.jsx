import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the blogs data from the JSON file
    const fetchBlogs = async () => {
      const response = await import("../data/blogs.json"); // Adjust the path based on your project structure
      setBlogs(response.default); // Load the data
    };

    fetchBlogs();
  }, []);

  return (
    <Box sx={{ padding: "2rem 1rem" }}>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 4 }}>
        My Blog
      </Typography>

      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={6} key={blog.id}>
            <Paper sx={{ padding: "2rem", boxShadow: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {blog.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {blog.excerpt}
              </Typography>
              <Button
                component={Link}
                to={`/blog/${blog.id}`}
                sx={{ mt: 2 }}
                variant="outlined"
              >
                Read More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BlogList;
