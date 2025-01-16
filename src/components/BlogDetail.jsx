import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog data based on the ID
    const fetchBlog = async () => {
      const response = await import("../data/blogs.json"); // Adjust the path based on your project structure
      const blogData = response.default.find((post) => post.id === parseInt(id));
      setBlog(blogData);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ padding: "2rem 1rem" }}>
      <Paper sx={{ padding: "2rem", boxShadow: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          {blog.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {blog.content}
        </Typography>
      </Paper>
    </Container>
  );
}

export default BlogDetail;
