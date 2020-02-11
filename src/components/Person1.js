import React, { Component } from 'react'

export default class Person extends Component {

    render() {
        return (
            <div>
            {this.props.clicked('Person 1')}
            </div>
        )
    }
}
