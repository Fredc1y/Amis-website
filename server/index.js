const express = require("express");
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;
const heute = new Date(); 


let db = new sqlite3.Database('./server.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log("meeep");
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

function getTodaysDate() {
  return ""+heute.getFullYear() + " " + (heute.getMonth() + 1) + " " + heute.getDate();
}

function find(date) {
  console.log("date: " + date)
  db.get("SELECT DATE FROM daten WHERE DATE=" + "'" + date+ "'", (err,row) => {err?console.log("jkdshf"):console.log(row)});
}

function insertInDB(mood,sex,pille,max,average) {
  db.run("INSERT OR REPLACE INTO daten(DATE, MOOD, PILLE, SEX, MAX, AVERAGE) VALUES(?, ?, ?, ? ,?, ?)", [getTodaysDate(),mood,sex,pille,max,average]);
}

function updateDB(set, param,where, suchparam) {
  db.run("UPDATE daten SET " + set +"=" + param + " WHERE " + where + "=" + suchparam);
}

function removeOutOfDB(date) {
  db.run("DELETE FROM daten WHERE DATE=" + "'" + date+ "'");
}

insertInDB(4,1,1,3,4);
insertInDB(3,1,1,3,2);
removeOutOfDB(getTodaysDate());
find(getTodaysDate());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});