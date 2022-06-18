import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Event from "./pages/Event";
import RequireAuth from "./pages/hoc/RequireAuth";
import Login from "./pages/Login";
import './App.css'


const App: FC = () => {
  return (
    <BrowserRouter basename='/event-checker'>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Event />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
