import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieTab from '../movieTab/index'
import MovieDetail from '../movieTab/MovieDetail'
const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/my-app" element={<MovieTab />} />
          <Route path="/my-app/detail/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
