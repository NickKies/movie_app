import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";
import UseInput from "./routes/UseInput";
import UseTabs from "./routes/UseTabs";
import UseTitle from "./routes/useTitle";
import UseClick from "./routes/UseClick";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/useInput" component={UseInput} />
            <Route path="/useTabs" component={UseTabs} />
            <Route path="/useTitle" component={UseTitle} />
            <Route path="/useClick" component={UseClick} />
        </HashRouter>
    );
}

export default App;