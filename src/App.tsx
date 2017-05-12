import * as React from 'react';

import PrimeMenu from './core/components/PrimeMenu';
import 'bootswatch/yeti/bootstrap.css';
import './App.css';

class App extends React.Component<{}, null> {
    render() {
        return (
            <div className="page-wrapper">
            <div className="App">

                <PrimeMenu />
                <div className="hr"></div>
                {this.props.children}
                </div>
               <footer className="footer">
                   this is footer :)
               </footer>
            </div>
        );
    }
}

export default App;
