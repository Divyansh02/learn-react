import React, { Component } from 'react'
import {fetchPosts} from './actions'
export default class PostList extends Component {
    componentDidM(){
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                PostList
            </div>
        )
    }
}
