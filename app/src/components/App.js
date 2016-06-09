import React from 'react';
import ReactDOM from 'react-dom';

import Map from './Map';

class App extends React.Component {
    render() {
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Map />
                    </div>
                </div>
            </div>
        );
    }
}

export default App