import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
        // if (logoutType === "popup") {
        //     instance.logoutPopup({
        //         postLogoutRedirectUri: "/",
        //         mainWindowRedirectUri: "/"
        //     });
        // } else if (logoutType === "redirect") {
        //     instance.logoutRedirect({
        //         postLogoutRedirectUri: "/",
        //     });
        // }
    }

    
    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogout("popup")}>Sign Out</Button>
    )
}