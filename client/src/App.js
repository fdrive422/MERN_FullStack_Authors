import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// views
import Main from "./views/Main";
import CreateAuthor from "./views/CreateAuthor";
import EditAuthor from "./views/EditAuthor";
import Error from "./views/Error";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/author/create" element={<CreateAuthor />} />
                    <Route path="/author/edit/:id" element={<EditAuthor />} />
                    <Route path="/author/edit/error" element={<Error />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
