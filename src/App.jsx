import { CompositionVSInheritance } from "./components/compositionVSInheritance";
import { ConditionalRendering } from "./components/conditionalRendering";
import { Context } from "./components/context";
import { CustomHooks } from "./components/customHooks";
import { Forms } from "./components/forms";
import { FunctionComponents } from "./components/FunctionComponents";
import { ListAndKeys } from "./components/listAndKeys";
import { Props } from "./components/props";
import { Refs, Refs02, Refs03, Refs04 } from "./components/refs";
import { SetStateAndComponentsLifecycleMethods } from "./components/setStateAndComponentsLifecycleMethods";
import { StateAndUseState } from "./components/state&useState";
import { UseCallback } from "./components/useCallback";
import { Cuadrado, RandomUser, Timer, UseEffect } from "./components/useEffect";
import { UseMemo } from "./components/useMemo";
import { UseReducer } from "./components/useReducer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./Learning React Router/HomePage";
import { AboutPage } from "./Learning React Router/AboutPage";
import { ContactPage } from "./Learning React Router/ContactPage";
import { NotFoundPage } from "./Learning React Router/NotFound";
import { Navbar } from "./Learning React Router/components/NavBar";
import { UsersPage } from "./Learning React Router/UsersPage";
import { UserPage } from "./Learning React Router/components/UserPage";
import { DashBoard } from "./Learning React Router/DashBoard";

function App() {
  return (
    <>
      {/* <FunctionComponents /> */}
      {/* <Props
        titulo="Este es un titulo utilizando props"
        nombre="Juan"
        edad="25"
        bgColor="red"
      />
      <Props
        titulo="Este es el segundo titulo utilizando props"
        nombre="Pedro"
        edad="39"
        bgColor="blue"
      /> */}
      {/* <StateAndUseState/> */}
      {/* <UseEffect/> */}
      {/* <Cuadrado/> */}
      {/* <Timer/> */}
      {/* <RandomUser/> */}
      {/* <SetStateAndComponentsLifecycleMethods /> */}
      {/* <ConditionalRendering/> */}
      {/* <ListAndKeys/> */}
      {/* <CompositionVSInheritance/> */}
      {/* <Forms/> */}
      {/* <Context/> */}
      {/* <Refs />
      <Refs02 />
      <Refs03 />
      <Refs04 /> */}
      {/* <UseReducer/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <Custom Hooks/> */}
      {/* LEARNING REACT ROUTER */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/usuarios" element={<Navigate to="/users" />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/dashboard/*" element={<DashBoard />}>
            <Route
              path="farewell"
              element={
                <h1 className="text-uppercase fw-bold">F A R E W E L L</h1>
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {/* LEARNING REACT ROUTER */}
    </>
  );
}

export default App;
