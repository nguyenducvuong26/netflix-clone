import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/UI/Navigation";
import ModalHelper from "./components/UI/ModalHelper";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
    return (
        <div className="App">
            <ModalHelper />
            <Navigation />
            <main className="main">
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path={`/search`}>
                        <SearchResultsPage />
                    </Route>
                </Switch>
            </main>
            <div className="footer" />
        </div>
    );
}

export default App;
