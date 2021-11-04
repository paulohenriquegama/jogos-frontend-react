import React from "react";
import { Redirect, Route } from "react-router";
import { JwtHandler } from "../../jwt-handler/JwtHandler";

import { toast } from 'react-toastify'

export default function GuardedRoute({ component: Component, ...rest }) {
    const auth = JwtHandler.isJwtValid();

    return (
        <Route
            {...rest}
            render={props =>
                auth === true ? (
                    <Component {...props} />
                ) : (
                    <div>
                        {toast.error('Acesso negado, realize o login.',{theme: "colored"})}
                        <Redirect to="/login" />
                    </div>
                )
            }
        />
    );
}