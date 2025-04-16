/*
User object to store post data in the front end
id -> the usrr's unique id
email -> the user's email
pfp -> users profile picture
following -> list of id's this user follows
creationDate -> the user's creation date
postPerms -> the user's post permissions (true/false)
adminPerms -> the user's admin permissions (true/false)
postCount -> the number of posts created by the user (0 if not a poster)
deletedAccount -> whether or not the user's account is deleted
_______________________________________________________________________________________
Example usage:

user = new User(1234, email@gmail.com, [1, 2, 3, 4], Date(2025, 11, 25, 0, 0, 0, 0), true, false,...);
*/

export function User(id, email, following, creationDate, postPerms, adminPerms, postCount, deletedAccount){
    this.id = id;
    this.email = email;
    this.following = following;
    this.creationDate = creationDate;
    this.postPerms = postPerms;
    this.adminPerms = adminPerms;
    this.postCount = postCount;
    this.deletedAccount = deletedAccount;
}