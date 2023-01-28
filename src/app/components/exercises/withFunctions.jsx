import React, { useState } from "react";
import CardWrapper from "../common/Card";
import SimpleComponent from "../exercises/SimpleComponent";

const withFunctions = () => {
    return (props) => {
        const isAuth = localStorage.getItem("auth");
        const [auth, setAuth] = useState();

        const handleLogin = () => {
            if (!auth) {
                localStorage.setItem("auth", "token");
                setAuth(true);
                console.log("вошел");
            }
        };

        const handleLogOut = () => {
            if (auth) {
                localStorage.removeItem("auth");
                setAuth(false);
                console.log("вышел");
            }
        };
        return (
            <>
                <CardWrapper>
                    <SimpleComponent
                        {...props}
                        onLogOut={handleLogOut}
                        onLogin={handleLogin}
                        isAuth={isAuth}
                    />
                </CardWrapper>
            </>
        );
    };
};
export default withFunctions;
