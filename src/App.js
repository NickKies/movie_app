import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";
import UseInput from "./routes/hooks/UseInput";
import UseTabs from "./routes/hooks/UseTabs";
import UseTitle from "./routes/hooks/UseTitle";
import UseClick from "./routes/hooks/UseClick";
import UseConfirm from "./routes/hooks/UseConfirm";
import UsePreventLeave from "./routes/hooks/UsePreventLeave";
import UseBeforeLeave from "./routes/hooks/UseBeforeLeave";
import UseFadeIn from "./routes/hooks/UseFadeIn";
import UseNetwork from "./routes/hooks/UseNetwork";

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
            <Route path="/useConfirm" component={UseConfirm} />
            <Route path="/usePreventLeave" component={UsePreventLeave} />
            <Route path="/useBeforeLeave" component={UseBeforeLeave} />
            <Route path="/useFadeIn" component={UseFadeIn} />
            <Route path="/useNetwork" component={UseNetwork} />
        </HashRouter>
    );
}

export default App;