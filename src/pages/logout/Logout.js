import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { JwtHandler } from "../../jwt-handler/JwtHandler";

import { toast } from 'react-toastify'


export default function Logout() {
    useEffect(() => {
        JwtHandler.clearJwt();
        toast.success('Logout realizado com sucesso!',{theme: "dark"})
    });

    return <Redirect to="/login" />;
}