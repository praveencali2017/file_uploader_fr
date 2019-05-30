import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
        <div>
        <Jumbotron fluid className="bg-light">
            <Container>
                <h1 className="display-3">File Uploader</h1>
                <p className="lead">Upload *csv files with columns (key, value) and search for the values using keys.</p>
            </Container>
        </Jumbotron>
      </div>
        )
    }
}

export default Header
