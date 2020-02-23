import React from 'React';
import ReactDOM from 'react-dom'

class App3 extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     data: []
        // }
        this.state = {
            data :0
        };

        // this.setStateHandler = this.setStateHandler.bind(this);
        // this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        // this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        this.setNumber = this.setNumber.bind(this);

    };

    setNumber(){
        this.setState({data:this.state.data+1})
    }
    // setStateHandler(){
    //     var item = "test";
    //     var myArray = this.state.data.slice();
    //     myArray.push(item);
    //     this.setState({data:myArray});
    // };

    // forceUpdateHandler(){
    //     this.forceUpdate();
    // }
    // findDomNodeHandler(){
    //     var myDiv = document.getElementById('mydiv');
    //     ReactDOM.findDOMNode(myDiv).style.color = 'green';
    //     // ReactDOM.findDOMNode(myDiv).innerHTML = 'Yasher arafath';
    // }
    
    // render(){
    //     return (
    //         <div>
    //             <button onClick={this.setStateHandler}>SET STATE</button>
    //             <p>{this.state.data}</p>
    //         </div>
    //     )
    // }
    // render(){
    //     return (
    //         <div>
    //             <button onClick={this.findDomNodeHandler}>FORCE UPDATE</button>
    //             <h4 id='mydiv'>rnadom number : {Math.random()}</h4>
    //         </div>
    //     )
    // }
    render(){
        return (
            <div>
                <button onClick={this.setNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        )
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log(newProps);
        console.log(newState);
        return true;

    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default App3;