// Create web server   
     .get('/comment', (req, res) => {    
 
          Get all comments
         Comment.find()
             .then(comments => {
                 res.json(comments);
             })
             .catch(err => {
                 res.json(err);
             
             });
         })
{
    git add comments.js
 
    git commit -m Copilot third commit
 
    git push        
}   
{
    git pull
}   

