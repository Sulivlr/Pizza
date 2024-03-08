import Appbar from './Appbar/AppBar';
import {Route, Routes} from 'react-router-dom';

const App = () => (
    <>
      <Routes>
        <Route path="/dishes" element={} />
        <Route path="/orders" element={} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </>
);

export default App;
