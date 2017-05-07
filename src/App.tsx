import * as React from 'react';

import 'bootswatch/superhero/bootstrap.css';
import './App.css';

class App extends React.Component<{}, null> {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;
