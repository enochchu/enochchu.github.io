import React, {Component} from "react";
import { loadFront } from "yaml-front-matter";
import "./Post.css";
import marked from "marked";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            author: "Enoch Chu",
            date: new Date(),
            html: "",
            title: "",
        }
    }

    componentDidMount() {
        const markedOptions = {
            gfm: true,
            headerIds: true
        };
        fetch(this.state.url)
            .then((data) => {
                return data.text()
            })
            .then(((data) => {
                let postMetadata = loadFront(data);

                this.setState((state, props) => {
                    return {
                        author: postMetadata.author,
                        title: postMetadata.title,
                        date: postMetadata.date,
                        mood: postMetadata.mood || "🥷",
                        html: marked(postMetadata.__content, markedOptions),
                        ...props
                    }
                });
            }));
    }

    render() {
        const userLanguage = window.navigator.userLanguage || window.navigator.language;
        const date = this.state.date.toLocaleDateString(userLanguage);
        const mood = this.state.mood;

        return (
            <div>
                <div className="header">
                    <div className="author-title">
                        <span role="img">📄</span> <a href={this.state.url}>{ this.state.title }.md</a> | { mood } { this.state.author }
                    </div>
                    <div className="date">
                        <span role="img">🕒</span> { date }
                    </div>
                </div>
                <div className="post">
                    <div dangerouslySetInnerHTML={ {__html: this.state.html }} />
                </div>
            </div>
        )
    }

}

export default Post;
