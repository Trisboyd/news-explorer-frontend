import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component, ...props}) => {

    return (
        <Route>
            {props.loggedIn ? component : <Redirect to={'/'} />}
        </Route>
    )
}

export default ProtectedRoute;