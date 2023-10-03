
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

export interface ErrorState {
    error?: Error;
    errorInfo?: React.ErrorInfo;
}
export class RoutePath extends React.PureComponent<any, ErrorState>{

    constructor(props: any) {
        super(props);
        this.state = {};
        }

    render() {
        //const sessionStr = localStorage.getItem(`auth-tokens-${process.env.NODE_ENV}`);
        //const userSession = sessionStr ? JSON.parse(sessionStr) as IAuthTokens : undefined;
        //const bLoggedIn = userSession !== undefined && userSession.accessToken !== undefined;// && localStorage.getItem('session') !== null;
        //const passwordExpired = userSession?.accessToken ? (jwt.decode(userSession.accessToken) as any).data.passwordExpired : false;
        //const requestPasswordManagement = location.pathname.indexOf('firstConnexion') > -1 || location.pathname.indexOf('definePassword') > -1;
        return (
            <>
                <Routes> 
                    <Route></Route>       
                    {/* <Route path='/besoinEnFormation/:id' component={<></>}></Route> */}
                </Routes>
            </>
        );
    }
}