import React, { Component } from "react";

import "./Blog.css"
import helloWorldURL from "./../../resources/posts/Hello-World.md"
import Post from "./Post";

const directory = {
    "Hello-World.md": helloWorldURL
}

const importAll = (r) => r.keys().map(r);

const markdownFiles = importAll(require.context('./../../resources/posts/', false, /\.md$/))
    .sort()
    .reverse();

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: markdownFiles
        }
    }

    componentDidMount() {
        this.setState((state, props) => {
            return {
                post: "Hello-World.md",
                ...props
            }
        });
    }

    toggleLightDarkMode(event) {
        let blogNode = event.currentTarget.closest(".blog");
        blogNode.classList.remove("preload")
        blogNode.classList.toggle("dark");
        blogNode.classList.toggle("light");
    }

    render() {
        return (
            <div className="blog preload light">
                <div className="blog-controls">
                    <button className="toggle-light-dark-mode" onClick={ this.toggleLightDarkMode }>
                        <span role="img">💡</span>
                    </button>
                </div>

                {
                    this.state.posts.map((url, idx) => (
                        <div className="post-card" key={idx}>
                            <Post url={url} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Blog;
