import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';

class App extends React.Component {
    state = { lat: null, errMsg: null };


    componentDidMount(props) {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log(pos);
                this.setState({ lat: pos.coords.latitude });
            }, (err) => {
                console.log(err);
                this.setState({ errMsg: err.message });
            }
        );
    }

    renderContent() {
        if (this.state.errMsg && !this.state.lat) {
            return <Spinner msg={this.state.errMsg}></Spinner>;
        }
        if (!this.state.errMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
        }
        return <Spinner msg='Awaiting location permission' />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)