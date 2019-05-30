import React, { Component } from 'react';
import axios from 'axios';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
export class Content extends Component {
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
            ToastsStore.success(err.response.data.msg);
        });
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
                            <button className="btn-primary btn-lg" type="submit" id="search"> Search</button>
                        </div>
                    </div>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}></ToastsContainer>
                </div>
            </div>
        )
    }
};

export default Content;
