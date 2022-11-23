import React, { Component } from 'react';
import Work from "./Work";


class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {works: []};
    }

    getWork = () => {
        this.setState({works: ["Work 1", "Work 2"]});
    }

    render() {
        return (
            <div>
                <button onClick={this.getWork}>get</button>
                <Work workList={this.state.works}/>
            </div>
        );
    }
}

export default PortfolioPage;