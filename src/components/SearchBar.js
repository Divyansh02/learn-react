import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={
        term :''
    }
    inputHandler=(event)=>{
        this.setState({
            term:event.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input type='text' value={this.state.term} onChange={this.inputHandler}/>
                    </div>
                </form>
            </div>
        )
    }
}
