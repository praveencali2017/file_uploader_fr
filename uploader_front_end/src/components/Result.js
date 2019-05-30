import React, { Component } from 'react'
import uuid from 'uuid';
export class Result extends Component {
    state={
        items:[
            {
                value:33
            },
            {
                value:44
            },
            {
                value:55
            }

        ]
    }
    render() {
        return (
            <div className="container">
                <h2>Result:</h2>
                <ul className="list-group">
                    {this.state.items.map(function(item, idx){
                        return (<li key={idx} className="list-group-item bg-light">{item.value}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Result;
