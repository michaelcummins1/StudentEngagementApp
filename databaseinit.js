const betterSQL3 = require('better-sqlite3');
const initiated = 0;
const db; 
function initDb() {
    if (initiated == 0) {
        db = new Database('studentApp.db');
        initiated = 1;
    }
}
function runDB() {

}

