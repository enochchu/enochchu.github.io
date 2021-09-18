class PostRegistery {
    constructor() {
        this.data = []
        this.idCounter = 1;
    }

    addPost(title, url, html) {
        let post = new Post(this.idCounter, title, url, html);
        this.idCounter++;
    }

}
