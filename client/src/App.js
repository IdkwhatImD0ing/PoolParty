import Landing from './Landing';
import CreateTrip from './CreateTrip';
import {HashRouter, Routes, Route} from 'react-router-dom';
import DisplayTrip from './Display';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateTrip />} />
          <Route path="/display" element={<DisplayTrip />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
