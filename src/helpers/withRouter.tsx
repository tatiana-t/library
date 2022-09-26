import React, { ReactElement} from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Header from "../components/complex/header";

export function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        // @ts-ignore
        return (<Component
                {...props}
        router={{ location, navigate, params }}
        />
    );
    }

    return ComponentWithRouterProp;
}
