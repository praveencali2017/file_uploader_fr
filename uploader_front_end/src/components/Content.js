import React, { Component } from 'react'

export class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="file"/>
                        <label className="custom-file-label" htmlFor="file"/>
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
                </div>
            </div>
        )
    }
};

export default Content;
