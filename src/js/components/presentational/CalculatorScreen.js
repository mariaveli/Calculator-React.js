import React from "react";
import CalculatorButton from "./CalculatorButton";
class CalculatorScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render() {

        return(
            <div className="sidePad">
                <p id="display">
                    {this.props.disValue}
                </p>

                <p id="display2">
                    {this.props.disValue2}
                </p>
            </div>
        )
    }
}
export default CalculatorScreen;