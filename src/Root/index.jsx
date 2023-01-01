import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { navbar } from "../Untils/navbar";
const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        {/* 
        <Route>
          {navbar.map(({ path, element, id, hidden }) => {
            return !hidden && <Route key={id} path={path} element={element} />;
          })}
        </Route> */}
        <Route element={<Navbar />}>
          {navbar.map(({ id, hidden, path, element }) => {
            return !hidden && <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Root;
