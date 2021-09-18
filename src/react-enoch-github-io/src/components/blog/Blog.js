import React, { Component } from "react";

import "./Blog.css"
import postURL from "./../../resources/posts/Hello-World.md"
import Post from "./Post";

class Blog extends Component {
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

                <Post url={postURL} />
            </div>
        )
    }
}

export default Blog;
