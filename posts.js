exports.createPost = function (req, res){
    const post = {
        blogTitle: req.body.blogTitle,
        blogPost: req.body.blogPost
      }

    let postData = JSON.parse(posts)
    
    $(document).append("<h1>" + blogTitle + "</h1>")
    $(document).append("<p>"+ blogPost + "</p>")

    posts.push(post)
}