import React, { FC } from "react";
import { View } from "react-native";
import { Router, Route } from "./multi/router";
import Main from "./pages/Main";

const App: FC = () => (
  <View>
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  </View>
);

export default App;
