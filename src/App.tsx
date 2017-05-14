import * as React from 'react';

import 'semantic-ui-css/semantic.min.css';
import 'bootswatch/yeti/bootstrap.css';
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
