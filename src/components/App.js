import React from 'react'
import PostList from './PostList'
import {fetchPosts} from './actions'
import {connect} from 'react-redux'
const App=()=> {
    return (
        <div className="ui container">
            <PostList/>
        </div>
    )
}
// export const mapStateToProps=(state)=>{

// }
export default connect(null,{fetchPosts}) (App);
