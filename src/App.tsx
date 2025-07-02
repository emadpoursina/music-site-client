import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SingerList from "./components/SingerList";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/singer" element={<SingerList />} />
        <Route
          path="/"
          element={
            <div className="w-full h-full flex items-center justify-center text-2xl text-gray-400">
              صفحه اصلی
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
