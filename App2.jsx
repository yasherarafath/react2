import React from 'react';

class App2 extends React.Component{
    constructor(){
        super();

        this.state = {
            header: "header from state",
            content: "content from state"
        }
        
    }

    render(){
        return (
            <div>
                <Header headerProp = {this.state.header} headerProp2 = {this.state.content} />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.headerProp}</h2>
                <h2>{this.props.headerProp2}</h2>
            </div>
        )
    }
}


App2.defaultProps ={
    headerProp: "Header from props222...",
    contentProp:"Content from props222..."
 }
export default App2;