import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { main_route } from "../utils/root_utils";

const Root: FC = () => {
  return (
    <Routes>
      <Route element={<Navbar />} path="/">
        {main_route.map(({ path, id, Component, hasChild = false, children }) =>
          hasChild ? (
            <Route path={path} element={<Component />}>
              {children?.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} />
              ))}
            </Route>
          ) : (
            <Route key={id} path={path} element={<Component />} />
          ),
        )}
      </Route>
    </Routes>
  );
};

export default Root;
