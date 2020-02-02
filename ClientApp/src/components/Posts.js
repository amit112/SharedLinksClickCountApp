import React, { Component } from 'react';
import App from '../App';
import { LinkCount } from './LinkCount';

export class Posts extends Component {
    static displayName = Posts.name;

  constructor (props) {
    super(props);
    this.state = { posts: [], postSharingApps: [], loading: true }; 
  }
    componentDidMount = () => {
        this.getPosts();
        this.getSharingApps();
    }
    getPosts = () => {
        fetch('api/SampleData/GetPosts')
            .then(response => response.json())
            .then(posts => {
                this.setState({ posts, loading: false });
            });
    }
    getSharingApps = () => {
        fetch('api/SampleData/GetPostSharingApps')
            .then(response => response.json())
            .then(postSharingApps => {
                this.setState({ postSharingApps, loading: false });
            });
    }

    copyLinkToClipboard(app,post) {
        const link = "https://localhost:44385/post/" + post.id + "/" + app.id;
        const el = document.createElement('textarea');
        el.value = link;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("Link Copied!");
    };

    renderApps(apps, post) {
        
        return (
            apps.map(app => {
                return <button onClick={() => this.copyLinkToClipboard(app, post)} className="ml-1 btn btn-primary" > <LinkCount postId={post.id} appId={app.id} /> Share on {app.name}</button>
            })

        );
    }

 


    renderPostsTable(posts, apps) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post =>
            <tr key={post.id}>
              <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{this.renderApps(apps,post)}</td>
                         
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : this.renderPostsTable(this.state.posts, this.state.postSharingApps);

    return (
      <div>
        <h1>Posts</h1>
        {contents}
      </div>
    );
  }
}
