import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetails(data?.items?.[0]));


    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id])

  return (
    <Box minHeight='95vh' >
      <Box>
        <div style={{
          background: 'linear-gradient(130deg,hsl(0deg 100% 50%) 0%,hsl(0deg 100% 39%) 33%,hsl(0deg 100% 28%) 67%,hsl(0deg 100% 17%) 100%)',
          zIndex: 10,
          height: '160px'
        }} />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
          <Box sx={{ mr: { sm: '100px' }}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail