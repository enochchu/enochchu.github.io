import React, { Component } from "react";

import "./Blog.css"
import post from "./../../resources/posts/Hello-World.md"

import marked from "marked";
import { loadFront } from "yaml-front-matter";

"yaml-front-matter";


class Blog extends Component {
    constructor() {
        super();
        this.state = {
            data: ""
        }
    }
    componentDidMount() {
        const markedOptions = {
            gfm: true,
            headerIds: true
        };
        fetch(post)
            .then((data) => {
                return data.text()
            })
            .then((data) => {
                let postMetadata = loadFront(data);
                console.log(postMetadata);
                return data;
            })
            .then(((data) => {
                this.setState((state, props) => {
                    return {
                        data: marked(data, markedOptions),
                        ...props
                    }
                });
            }));
    }

    get_post() {
        return {
            __html: this.state.data
        }
    }

    render() {
        return (
            <div className="blog dark">
                <div className="post san-serif" dangerouslySetInnerHTML={this.get_post()} />
            </div>
        )
    }
}

export default Blog;
