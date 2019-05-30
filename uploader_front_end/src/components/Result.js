import React, { Component } from 'react';
export class Result extends Component {
    state={
        items:[
            33,44,55
        ]
    }
    onResultChange=(data)=>{
        this.setState({
            items:data
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Result:</h2>
                <ul className="list-group">
                    {this.state.items.map(function(item, idx){
                        return (<li key={idx} className="list-group-item bg-light">{item}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Result;
