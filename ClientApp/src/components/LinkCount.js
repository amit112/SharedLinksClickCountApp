import React, { Component } from 'react';

export class LinkCount extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount = () => {
        this.getLinkClickCount();
    }

    getLinkClickCount = () => {
        const { postId, appId } = this.props;
        fetch('api/SampleData/GetLinkClickCount?postId=' + postId + '&appId=' + appId)
            .then(response => response.json())
            .then(count => {
                this.setState({ count });
            })
    }

    render() {
        return (
            <span>({this.state.count}) </span>
        );
    }
}
