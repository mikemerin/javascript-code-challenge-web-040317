$(document).ready(function(){

    const list = new CommentList

    $('ul#comments').html(list.array.map( x => `<li>${x}</li>` ))

    $('#note-form').on('submit', function(event) {
      event.preventDefault()
      var text = $('input')[0].value
      if (typeof text !== "undefined") {
        addComment(text) {
          const newComment = new Comment(string)
          list.array.push(newComment.text)
        }
        $('error').html("")
      } else {
        $('error').html("You must enter a comment.")
      })

    })

})
