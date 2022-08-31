import ListPage from './components/pages/ListPage';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />}></Route>
    </Routes>
  );
};

export default App;
