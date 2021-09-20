import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Roster from './components/Roster';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.scss';


// The Application Launcher. Will have React-router routes set up if more than one page needed in the SPA.
function App() {
    
    return (
        <div className='p-4 bg-light d-flex flex-column container-fluid vh-100'>
            <h1 className='mb-5 font-weight-bold text-center'>Air Holland</h1>
            <div className='align-self-center d-flex flex-column overflow-auto w-75 mw-100'>
                <PerfectScrollbar id='scrollabledTarget' className='mw-100 w-100' options={{ suppressScrollX: true }}>
                    <Roster />
                </PerfectScrollbar>
            </div>
        </div>
    )
}

export default App;