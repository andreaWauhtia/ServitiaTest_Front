
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
      
        return (
            <>
                <Routes> 
                    <Route></Route>       
                  
                </Routes>
            </>
        );
    }
}