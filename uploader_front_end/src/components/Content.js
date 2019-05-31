import React, { Component } from 'react';
import axios from 'axios';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import Result from './Result';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getItems from '../actions/index'

export class Content extends Component {
    constructor(props){
        super(props);
        this.resultElem=React.createRef();
    }

    state={
        file_placeholder:""
    }
    file_change=(e)=>{
        this.setState({
            file_placeholder:e.target.files[0].name
        });
        var formData = new FormData();
        formData.append("file",e.target.files[0]);
        axios.post("/upload",
            formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        .then(res=>{
            ToastsStore.success(res.data.msg);
        })
        .catch(err=>{
            ToastsStore.error(err.response.data.msg);
        });
    }

    searchValue=async (e)=>{
        const key= document.getElementById("key_txt").value;
        await this.props.getItems(key)
        // axios.get(`/search?key_txt=${key}`)
        // .then(res=>{
            // this.resultElem.current.onResultChange(res.data.result);
        // });
    }
    render() {
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="file" onChange={this.file_change}/>
                        <label className="custom-file-label" htmlFor="file" >{this.state.file_placeholder}</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-12">
                            <input type="text" className="form-control" id="key_txt" name="key_txt" placeholder="Search your data"/>
                        </div>
                    </div>
                    <div className="row  mt-2 justify-content-center">  
                        <div className="col-4 text-center">
                            <button className="btn-primary btn-lg" type="submit" id="search" onClick={this.searchValue}> Search</button>
                        </div>
                    </div>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} lightBackground></ToastsContainer>
                </div>
                <Result ref={this.resultElem}/>
            </div>
        )
    }
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { getItems },
      dispatch
    );
  }
  
  function mapStateToProps(state) {
      console.log("State",state.items);
    return {
      items: state.items,
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content);


// export default Content;
