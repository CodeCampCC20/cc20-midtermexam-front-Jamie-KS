import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout";

import Login from "../pages/Login";
import ToDo from "../pages/ToDo";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />

          <Route path="login" element={<Login />} />
          <Route path="todo" element={<ToDo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
