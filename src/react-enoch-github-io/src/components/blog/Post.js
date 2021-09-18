class Post {
    constructor(id, title, url, html) {
        this.id = id
        this.title = name;
        this.url = url;
        this.html = html;
    }

    getName() {
        return this.name;
    }

    getHtml() {
        if(this.html === "") {
            this.fetchPost();
        }
        return this.html;
    }
}
