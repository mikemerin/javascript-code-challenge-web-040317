class CommentList {

  constructor() {
    this.array = []
  }

  render() { return `<ul>${this.array.map(x => `<li>${x}</li>`).join("")}</ul>`}

  addComment(string) {
    const newComment = new Comment(string)
    this.array.push(newComment.text)
  }

}

// list = new CommentList()
// list.addComment("how")
// list.addComment("are")
// list.addComment("you")
// list.addComment("doing")
