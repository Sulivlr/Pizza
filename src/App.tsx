import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Dishes from './Pizza/Dishes';

const App = () => (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Dishes />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </>
);

export default App;
