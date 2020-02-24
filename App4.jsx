import React from 'react';

class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:'initial data'
        }
        this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus(e){
        console.log(e);
        this.setState({ data: e.target.value });
    }
    render(){
        return (
            <div>
                <Content ydata={this.state.data} yevent={ this.updateStatus }></Content>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return (
            <div>
                <input value={this.props.ydata} type="text" onChange = {this.props.yevent}/>
                <h2>{this.props.ydata}</h2>
            </div>
        );
    }
}
export default App4;