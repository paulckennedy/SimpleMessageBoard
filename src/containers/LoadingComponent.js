import React , { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions/PostActions';
import { getUser } from '../actions/UserActions';
import { withRouter } from 'react-router-dom'; 



class LoadingComponent extends Component {
    componentWillMount() {
        const { loading } = this.props;
        if(loading.user === undefined){
            this.props.getUser();
        }
        if(loading.posts === undefined){
            this.props.getPosts();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loading.posts === -1 && nextProps.user !== null){
            this.props.getPosts();
        }
    }

    render() {
        const { user, posts } = this.props.loading;
        if((!user && !posts)) || this.props.user === null))
        return(
            <div>
                {this.props.children}
            </div>
        )
        elsereturn <Loading />
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