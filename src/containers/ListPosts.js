import React, { Component } from 'react';
import '../styles/ListPosts.css';
import _ from 'lodash';

import { connect } from 'react-redux';

import { getPosts, savePost, deletePost } from '../actions/PostActions';
import { getUser, logout } from '../actions/UserActions';

import { Field, reduxForm, reset } from 'redux-form';

import PostCard from '../components/PostCard';
import Link from 'react-router-dom/es/Link';

class ListPosts extends Component {
  renderPosts(){
    return _.map(this.props.posts, (post, key) => {
      return(
        <PostCard  key={key}>
          <Link to={`/${key}`}>
            <h3 className="card-title">{post.title}</h3>
          </Link>
          <p className="card-text">{post.body}</p>
          <button className="btn btn-danger" onClick={() => {this.props.deletePost(key)}}>Delete</button>
        </PostCard>
      )
    });
  }

  renderField(field) {
    return (
      <input type="text" {...field.input} placeholder = {`Please enter a ${field.label}`} className = {field.class}/>
    )
  }

  onSubmit(values) {
    this.props.savePost(values, this.props.user.uid).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="navbar">
          <button className="btn btn-danger" onClick={() => {this.props.logout();}}>Sign Out</button>
        </div>
        <div className="container">
          {this.renderPosts()}
        </div>
        <div className="navbar fixed-bottom">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
            <Field 
              name="title"
              component={this.renderField}
              label="Title"
              class="footer-title"
            />
            <Field 
              name="body"
              component={this.renderField}
              label="Body"
              class="footer-body"
            />
            <button className = "btn footer-button" type="submit">Post</button>
          </form>
        </div>
        
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(ListPosts);

form = connect((state, ownProps) => ({
  posts: state.posts,
  user: state.user
}), { getPosts, savePost, deletePost, getUser, logout })(form);

export default form;
