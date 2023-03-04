import React from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";

const AppProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default AppProvider;
