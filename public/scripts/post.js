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

export function Post(user_id, post_id, post_date, email, title, text, image, video, link, deleted){
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

function getRandomDate() {
    return new Date(new Date() - Math.random() * 1e12).toISOString();
}

function getRandomEmail() {
    const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
    return `user${Math.floor(Math.random() * 1000)}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

function getRandomTitle() {
    const titles = ["My First Post", "Exciting News!", "Check This Out", "Random Thoughts", "Important Update"];
    return titles[Math.floor(Math.random() * titles.length)];
}

function getRandomText() {
    const texts = [
        "This is a great day!",
        "I just saw something amazing.",
        "Here's a cool fact: did you know...",
        "I'm feeling lucky today!",
        "Random musings from my day.",
    ];
    return texts[Math.floor(Math.random() * texts.length)];
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}

function getRandomMediaUrl(type) {
    return getRandomBoolean() ? `https://example.com/random.${type}` : "";
}

export function generateRandomPosts(count) {
    let posts = [];
    for (let i = 0; i < count; i++) {
        let post = new Post(
            i, // user_id
            i, // post_id
            getRandomDate(), // post_date
            getRandomEmail(), // email
            getRandomTitle(), // title
            getRandomText(), // text
            getRandomMediaUrl("jpg"), // image
            getRandomMediaUrl("mp4"), // video
            getRandomBoolean() ? "https://example.com" : "", // link
            getRandomBoolean() // deleted
        );
        posts.push(post);
    }
    return posts;
}