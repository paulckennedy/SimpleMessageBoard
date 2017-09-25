import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions/PostActions';
import { getUser } from '../actions/UserActions';
import { withRouter } from 'react-router-dom'; 



class LoadingComponent extends Component {
    componentWillMount() {
        const { userLoading, postsLoading } = this.props;
        if(userLoading === undefined){
            //console.log("LoadingComponent componentWillMount getUser");
            this.props.getUser();
        }
        if(postsLoading === undefined){
            //console.log("LoadingComponent componentWillMount getPosts");
            this.props.getPosts();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.postsLoading === -1 && nextProps.user !== null){
            //console.log("LoadingComponent componentWillReceiveProps getPosts");
            this.props.getPosts();
        }
    }

    render() {
        const { userLoading, postsLoading, children } = this.props;
        if((!userLoading && !postsLoading) || (this.props.user === null)){
            return(
                <div>
                    {children}
                </div>
            )    
        }
        else
            //console.log(`LoadingComponent render userLoading: ${userLoading} postsLoading: ${postsLoading}`);
            return (
                <div>Loading...</div>
            )
    }
}

function mapStateToProps(state) {
    return{ 
        userLoading: state.loading.user,
        postsLoading: state.loading.posts,
        user: state.user 
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getPosts })(LoadingComponent));