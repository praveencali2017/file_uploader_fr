import React, { Component } from 'react';
import { connect } from "react-redux";

export class Result extends Component {
    // state={
    //     items:[
    //         33,44,55
    //     ]
    // }
    // onResultChange=(data)=>{
    //     this.setState({
    //         items:data
    //     })
    // }

    render() {
        return (
            <div className="container">
                <h2>Result:</h2>
                <ul className="list-group">
                    {this.props.items.map(function(item, idx){
                        return (<li key={idx} className="list-group-item bg-light">{item}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

  
function mapStateToProps(state) {
    console.log("State",state.items);
  return {
    items: state.items,
  };
}

export default connect(
  mapStateToProps
)(Result);

// export default Result;
