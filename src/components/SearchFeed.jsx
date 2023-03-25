import { useState, useEffect, useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const { setLoading } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((res) => {
      setVideos(res.items);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }} >
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{
        color: 'white'
      }} >
        Search result for: <span style={{ color: '#F31503' }} >{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed