import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { UserContext } from '../App';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  const { setLoading } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetails(data?.items?.[0])
        setLoading(false);
      });

    setLoading(true);
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => {
        setVideos(data?.items)
        setLoading(false);
      });

  }, [id])

  return (
    <Box minHeight='90vh' >
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