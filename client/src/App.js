import Landing from './Landing';
import CreateTrip from './CreateTrip';
import {HashRouter, Routes, Route} from 'react-router-dom';
import DisplayTrip from './Display';
import Error from './Components/Error';
import AddDriver from './Components/AddDriver';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateTrip />} />
          <Route path="/error" element={<Error />} />
          <Route path="/display" element={<DisplayTrip />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
