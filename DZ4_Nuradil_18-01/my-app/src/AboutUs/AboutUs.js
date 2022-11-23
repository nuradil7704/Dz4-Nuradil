import React, {Component} from 'react';
import Text from "./text/Text";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {text: false}
    }

    handleText = () => {
        this.setState({text: !this.state.text})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleText}>кнопка</button>
                {
                    this.state.text === true
                    ?
                    <Text/>
                    :
                    ""
                }
            </div>
        );
    }
}

export default AboutUs;