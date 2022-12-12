import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page04/Main";
import MemberDetail from "./page04/MemberDetail";

const App04 = () => {
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Main></Main>}></Route>

                    <Route path="/member">
                        <Route
                            path=":memberId"
                            element={<MemberDetail></MemberDetail>}
                        ></Route>
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App04;
