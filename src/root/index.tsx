import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { main_route } from "../utils/root_utils";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import NotFound from "../components/status/NotFound";
import ModalVisibility from "../components/ModalVisibility";

const Root: FC = () => {
  const isAuthed = useIsAuthenticated();
  const authed = isAuthed();

  useEffect(() => {
    if (!localStorage.getItem("shopping_card")) {
      localStorage.setItem("shopping_card", JSON.stringify([]));
    }
    if (!localStorage.getItem("total_price")) {
      localStorage.setItem("total_price", JSON.stringify(0));
    }
  }, []);

  console.log(authed);

  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route element={<Navbar />} path="/">
          {main_route.map(
            ({
              path,
              id,
              Component,
              hasChild = false,
              children,
              shouldAuth = false,
            }) =>
              hasChild ? (
                shouldAuth &&
                authed && (
                  <Route key={id} path={path} element={<Component />}>
                    {children?.map(
                      ({ path, Component: ChildComponent, id }) => (
                        <Route
                          key={id}
                          path={path}
                          element={<ChildComponent />}
                        />
                      ),
                    )}
                  </Route>
                )
              ) : shouldAuth ? (
                <Route
                  key={id}
                  path={path}
                  element={
                    <RequireAuth
                      loginPath="/not-found"
                      children={<Component />}
                    />
                  }
                />
              ) : (
                <Route key={id} path={path} element={<Component />} />
              ),
          )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;
