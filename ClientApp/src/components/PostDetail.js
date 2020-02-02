import React, { Component } from 'react';

export class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}, loading: true
        };
    }

    componentDidMount = () => {
        this.getPostDetail();
        this.saveLinkClick();
    }

    getPostDetail = () => {
        const { id } = this.props.match.params;
        fetch('api/SampleData/GetPost?id=' + id)
            .then(response => response.json())
            .then(data => {
                this.setState({ post: data, loading: false });
            });
    }

    saveLinkClick = () => {
        const { id, appId } = this.props.match.params;
        if (+appId > 0) {
            fetch('api/SampleData/SaveLinkClick?postId=' + +id + '&sharingAppId=' + +appId,
                {
                    method: 'post',
                    body: {}
                }).then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    }

    render() {
        let post = this.state.post

        return (
            <h4>Post: {post.title}</h4>
        );
    }
}
