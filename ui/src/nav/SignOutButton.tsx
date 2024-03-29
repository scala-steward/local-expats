import {Button} from "@mui/material";
import React from "react";
import {useAuth} from "../auth/Auth";

export default function SignOutButton() {
    const {refreshAuth} = useAuth();

    const signOut = () => {
        fetch('/api/logout', {method: 'POST'})
            .then(refreshAuth);
    };

    return <Button color="inherit" onClick={signOut}>Sign Out</Button>;
}