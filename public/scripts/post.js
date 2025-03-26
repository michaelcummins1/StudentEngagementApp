/*
Post object to store post data in the front end
user_id -> the posting user's unique id
post_id -> the posts unique id
post_date -> the date the post was created
email -> the posing user's email
title -> the title of the post (designated by the user input) *REQUIRED*
text -> the text of the post (designated by the user input) *REQUIRED*
image -> the image located within the post (designated by the user input) *NOT REQUIRED*
video -> the video located within the post (designated by the user input) *NOT REQUIRED*
link -> the link located within the post (designated by the user input) *NOT REQUIRED*
_______________________________________________________________________________________
Example usage:

post = new Post(1234, 5678, Date(2025, 11, 25, 0, 0, 0, 0), "person@ursinus.edu", "title",...);
*/

function Post(user_id, post_id, post_date, email, title, text, image, video, link, deleted){
    this.user_id = user_id;
    this.post_id = post_id
    this.post_date = post_date;
    this.email = email;
    this.title = title;
    this.text = text;
    this.image = image;
    this.video = video;
    this.link = link;
    this.deleted = deleted;
}