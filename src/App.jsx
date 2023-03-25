import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail, } from './components';
import Loader from './components/loader';
import { createContext, useState, useContext, useMemo } from 'react';

export const UserContext = createContext({
  userName: '',
  setLoading: () => { },
});

function App() {

  const [loading, setLoading] = useState(false);

  const value = useMemo(
    () => ({ loading, setLoading }),
    [loading]
  );

  return (
    <UserContext.Provider value={value}>
      { loading && <Loader />}
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/video/:id' exact element={<VideoDetail />} />
            <Route path='/channel/:id' exact element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
