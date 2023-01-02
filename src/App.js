
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Components/Video';
import axios from './Components/axios';
function App() {
  const [video, setVideo] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/v2/posts')
      setVideo(res.data)
      return res
    }
    fetchData()
  }, [])
  return (
    <div className="app">
      <div className='app__videos'>
      {video.map(({ url, channel, description, song, likes, share, messages}) => (
        <Video 
        key={url}
        url={url}
        channel={channel}
        description={description}
        song={song}
        likes={likes}
        share={share}
        messages={messages}
    />
      ))}
      
      </div>
      
    </div>
  );
}

export default App;
