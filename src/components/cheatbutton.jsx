import React, { Component } from "react";
import { useMsal } from "@azure/msal-react";
import {Link} from "react-router-dom";

class App extends Component {
    render() {
        return(
            <button>
            <div>
                <Link to="./studentdashboard" className="btn btn-primary">Cheat</Link>
            </div>
            </button>
        )
    }
}

