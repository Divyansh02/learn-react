import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term:''
        }
    }
    inputHandler=(event)=>{
        this.setState({
            term:event.target.value
        })
    }
    onFormSubmit(event){
        const terms=this.state.term;
        event.preventDefault();
        this.props.onSubmit(terms);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit.bind(this)} className="ui form">
                    <div className="field">
                        <label>
                            Image Search
                        </label>
                        <input type="text" value={this.state.term} onChange={this.inputHandler} />

                    </div>
                </form>
            </div>
        )
    }
}
