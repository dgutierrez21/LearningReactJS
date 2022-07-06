import React from "react";
import { Routes, Route, useNavigate, Link, Outlet } from "react-router-dom";

export function DashBoard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="">DashBoard</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Logout
      </button>

      <Link className="text-decoration-none fs-3 fw-bold" to="welcome">
        Say Welcome
      </Link>
      <Link className="text-decoration-none fs-3 fw-bold" to="farewell">
        Say Farewell
      </Link>

      <Routes>
        <Route
          path="welcome"
          element={<h1 className="text-uppercase fw-bold">W e l c o m e</h1>}
        />
      </Routes>

      <Outlet />
    </div>
  );
}
