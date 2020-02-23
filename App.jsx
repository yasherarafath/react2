import React from 'react';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
           data: 
           [
              {
                 "id":1,
                 "name":"Foo",
                 "age":"20"
              },
              {
                 "id":2,
                 "name":"Bar",
                 "age":"30"
              },
              {
                 "id":3,
                 "name":"Baz",
                 "age":"40"
              }
           ]
        }
     }
    
    render(){
        return(
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((person,i)=>
                            <TableRow key = {i} data = {person}/>
                        )}
                    </tbody>
                </table>
                <Content/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Header from another class</h1>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h2>another heading</h2>
                </div>
                <p>Content from other class</p>
            </div>
        );
    }

}

class TableRow extends React.Component{
    render(){
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;