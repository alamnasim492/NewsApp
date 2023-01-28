import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import News from "./News";
export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<News category="all"/>}></Route>
                        <Route path="/science" element={<News category="science"/>}></Route>
                        <Route path="/technology" element={<News category="technology"/>}></Route>
                        <Route path="/sports" element={<News category="sports"/>}></Route>
                        <Route path="/entertainment" element={<News category="entertainment"/>}></Route>
                        <Route path="/politics" element={<News category="politics"/>}></Route>
                        <Route path="/education" element={<News category="education"/>}></Route>
                        <Route path="/crime" element={<News category="crime"/>}></Route>
                        <Route path="/jokes" element={<News category="jokes"/>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}