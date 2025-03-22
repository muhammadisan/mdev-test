import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, CircularProgress, Alert, Box } from '@mui/material';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari API');
        }
        const data = await response.json();
        setPosts(data.slice(0, 4));
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Terjadi kesalahan yang tidak diketahui.');
        }
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: 2,
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <Typography variant="h6">
        Daftar Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText
              primary={<Typography variant="h6">{post.title}</Typography>}
              secondary={<Typography variant="body2" color="text.secondary">{post.body}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PostsList;
