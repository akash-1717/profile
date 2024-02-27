const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
// mysql -h sql6.freemysqlhosting.net -P 3306 -u sql6687180 -p
var db = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6687180",
    password: "SFnLJrzUHb",
    database: "sql6687180",
    port: 3306
});

let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;
let flag5 = 0;
let flag6 = 0;
let flag7 = 0;
let flag8 = 0;
let flag9 = 0;
let flag10 = 0;
let flag11 = 0;
let flag12 = 0;

db.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected!");

        db.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'sql6687180';`, (err, tables) => {


            for (let i = 0; i < tables.length; i++) {
                // console.log(tables[i]);
                if (tables[i].table_name == "researcharticles") flag1 = 1;
            }
            if (!flag1) {
                const sql = "CREATE TABLE researcharticles (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(200), journalname VARCHAR(200), yearyear VARCHAR(100), authors VARCHAR(200), doi VARCHAR(100), doilink VARCHAR(100));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("RESEARCHARTICLES created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "awards") flag2 = 1;
            }
            if (!flag2) {
                const sql = "CREATE TABLE awards (id INT AUTO_INCREMENT PRIMARY KEY, descr VARCHAR(2000));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("AWARDS created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "groupmembers") flag3 = 1;
            }
            if (!flag3) {
                const sql = "CREATE TABLE groupmembers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(200), course VARCHAR(200), topic VARCHAR(200), imagepath TEXT, imaghere LONGTEXT);";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("GROUPMEMBERS created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "patents") flag4 = 1;
            }
            if (!flag4) {
                const sql = "CREATE TABLE patents (id INT AUTO_INCREMENT PRIMARY KEY, pno VARCHAR(50), gdate VARCHAR(10), name VARCHAR(100), contributors VARCHAR(200), descr VARCHAR(300));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("PATENTS created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "reviewarticles") flag5 = 1;
            }
            if (!flag5) {
                const sql = "CREATE TABLE reviewarticles (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(200), journalname VARCHAR(200), yearyear VARCHAR(100), authors VARCHAR(200), doi VARCHAR(100), doilink VARCHAR(100));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("REVIEWARTICLES created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "books") flag6 = 1;
            }
            if (!flag6) {
                const sql = "CREATE TABLE books (id INT AUTO_INCREMENT PRIMARY KEY, bname VARCHAR(200), year VARCHAR(200), isbn VARCHAR(100), authors VARCHAR(200), publisher VARCHAR(100));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("BOOKS created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "bookchapters") flag7 = 1;
            }
            if (!flag7) {
                const sql = "CREATE TABLE bookchapters (id INT AUTO_INCREMENT PRIMARY KEY, bookchapter VARCHAR(200), year VARCHAR(200), bookseries VARCHAR(200), volumename VARCHAR(200), volumenumber VARCHAR(200), pages VARCHAR(200), isbnseries VARCHAR(200), isbnvolume VARCHAR(200), editors VARCHAR(200), executiveeditor VARCHAR(200), publisher VARCHAR(200), authors VARCHAR(200));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("BOOKCHAPTERS created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "invitedtalks") flag8 = 1;
            }
            if (!flag8) {
                const sql = "CREATE TABLE invitedtalks (id INT AUTO_INCREMENT PRIMARY KEY, topic VARCHAR(200), event VARCHAR(200), date VARCHAR(200));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("INVITEDTALKS created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "membership") flag9 = 1;
            }
            if (!flag9) {
                const sql = "CREATE TABLE membership (id INT AUTO_INCREMENT PRIMARY KEY, orgname VARCHAR(200));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("MEMBERSHIP created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "researchprojects") flag10 = 1;
            }
            if (!flag10) {
                const sql = "CREATE TABLE researchprojects (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(200), amount VARCHAR(200), year VARCHAR(200), role VARCHAR(200), funding VARCHAR(200));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("RESEARCHPROJECTS created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "conference") flag11 = 1;
            }
            if (!flag11) {
                const sql = "CREATE TABLE conference (id INT AUTO_INCREMENT PRIMARY KEY, cname VARCHAR(200), paper VARCHAR(200));";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("CONFERENCE created");
                    }
                });
            }

            for (let i = 0; i < tables.length; i++) {
                if (tables[i].table_name == "alumni") flag12 = 1;
            }
            if (!flag12) {
                const sql = "CREATE TABLE alumni (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(200), course VARCHAR(200), curpos VARCHAR(200), imagepath TEXT, imaghere LONGTEXT);";
                db.query(sql, (err, result) => {
                    if (err) console.log(err);
                    else {
                        console.log("ALUMNI created");
                    }
                });
            }


        });
    }
});

const upload = multer({storage:multer.memoryStorage()});


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/forms", (req, res) => {
    res.render("forms")
})

// alumni
app.get("/alumni", (req, res) => {
    const sql = "SELECT * FROM alumni;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched alumni from database!");
        }
        res.render("alumni", { data: result });
    })
});

// awards
app.get("/awards", (req, res) => {
    const sql = "SELECT * FROM awards;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            console.log("successfully fetched awards from database!");
        }
        res.render("awards", { data: result });
    })
});

// bookchapters
app.get("/bookchapters", (req, res) => {
    const sql = "SELECT * FROM bookchapters;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched bookchapter from database!");
        }
        res.render("bookchapters", { data: result });
    })
});

// books
app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched books from database!");
        }
        res.render("books", { data: result });
    })
});

// compose
app.get("/compose", (req, res) => {
    res.render("compose");
});

// conferences
app.get("/conferences", (req, res) => {
    const sql = "SELECT * FROM conference;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched conference from database!");
        }
        res.render("conferences", { data: result });
    })
});

// experience
app.get("/experience", (req, res) => {
    res.render("experience");
});

// groupmembers
app.get("/groupmembers", (req, res) => {
    const sql = "SELECT * FROM groupmembers;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched groupmembers from database!");
        }
        res.render("groupmembers", { data: result });
    })
});

// invitedtalks
app.get("/invitedtalks", (req, res) => {
    const sql = "SELECT * FROM invitedtalks;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched invitedtalks from database!");
        }
        res.render("invitedtalks", { data: result });
    })
});

// membership
app.get("/membership", (req, res) => {
    const sql = "SELECT * FROM membership;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched membership from database!");
        }
        res.render("membership", { data: result });
    })
});

// patents
app.get("/patents", (req, res) => {
    const sql = "SELECT * FROM patents;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched patents from database!");
        }
        res.render("patents", { data: result });
    })
});

// researcharticles
app.get("/researcharticles", (req, res) => {
    const sql = "SELECT * FROM researcharticles;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched articles from database!");
        }
        res.render("researcharticles", { data: result });
    })
});

// researchprojects
app.get("/researchprojects", (req, res) => {
    const sql = "SELECT * FROM researchprojects;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched projects from database!");
        }
        res.render("researchprojects", { data: result });
    })
});

// reviewarticles
app.get("/reviewarticles", (req, res) => {
    const sql = "SELECT * FROM reviewarticles;";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            console.log("successfully fetched articles from database!");
        }
        res.render("reviewarticles", { data: result });
    })
});

// y2006
app.get("/y2006", (req, res) => {
    res.render("y2006");
});

// y2007
app.get("/y2007", (req, res) => {
    res.render("y2007");
});

// y2008
app.get("/y2008", (req, res) => {
    res.render("y2008");
});

// y2009
app.get("/y2009", (req, res) => {
    res.render("y2009");
});

// y2013
app.get("/y2013", (req, res) => {
    res.render("y2013");
});

// y2014
app.get("/y2014", (req, res) => {
    res.render("y2014");
});

// y2015
app.get("/y2015", (req, res) => {
    res.render("y2015");
});

// y2017
app.get("/y2017", (req, res) => {
    res.render("y2017");
});

// y2018
app.get("/y2018", (req, res) => {
    res.render("y2018");
});

// y2019
app.get("/y2019", (req, res) => {
    res.render("y2019");
});

// y2020
app.get("/y2020", (req, res) => {
    res.render("y2020");
});

// y2021
app.get("/y2021", (req, res) => {
    res.render("y2021");
});

// y2022
app.get("/y2022", (req, res) => {
    res.render("y2022");
});

// resartform
app.get("/articlesform", (req, res) => {
    res.render("articlesform");
});

app.get('/awardsform', (req, res) => {
    res.render("awardsform")
})

app.post("/resartform", (req, res) => {
    const title = req.body.title;
    const journal = req.body.journal;
    const year = req.body.year;
    const authors = req.body.authors;
    const doi = req.body.doi;
    const doilink = req.body.doilink;
    const query = "INSERT INTO researcharticles (title, journalname, yearyear, authors, doi, doilink) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [title, journal, year, authors, doi, doilink], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully inserted  data into database!");
            res.redirect("/researcharticles")
        }
    });
})

app.post("/revartform", (req, res) => {
    const title = req.body.title;
    const journal = req.body.journal;
    const year = req.body.year;
    const authors = req.body.authors;
    const doi = req.body.doi;
    const doilink = req.body.doilink;
    const query = "INSERT INTO reviewarticles (title, journalname, yearyear, authors, doi, doilink) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [title, journal, year, authors, doi, doilink], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully inserted  data into database!");
            res.redirect("/reviewarticles")
        }
    });
})

app.post("/awardsform", (req, res) => {
    const desc = req.body.desc;
    const query = "INSERT INTO awards (descr) VALUES (?)";
    db.query(query, [desc], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully inserted  data into database!");
            res.redirect("/awards")
        }
    });
});

app.get("/grpmembform", (req, res) => {
    res.render("groupmembersform");
});

app.post("/grpmembform", upload.single("imageimage"), (req, res) => {
    const name = req.body.name;
    const topic = req.body.topic;
    const course = req.body.course;
    const image = req.file.buffer.toString('base64');
    const sql = "INSERT INTO groupmembers(name, course, topic, imaghere) VALUES (?,?,?,?);";
    db.query(sql, [name, course, topic, image], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added groupmember to database");
            res.redirect("/groupmembers")
        }
    });
});

app.get("/alumniform", (req, res) => {
    res.render("alumniform");
});

app.post("/alumniform", upload.single("imageimage"), (req, res) => {
    const name = req.body.name;
    const curpos = req.body.curpos;
    const course = req.body.course;
    const image = req.file.buffer.toString('base64');
    const sql = "INSERT INTO alumni(name, course, curpos, imaghere) VALUES (?,?,?,?);";
    db.query(sql, [name, course, curpos, image], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added alumni to database");
            res.redirect("/alumni")
        }
    });
});

app.get("/patentsform", (req, res) => {
    res.render("patentsform");
})

app.post("/patentsform", (req, res) => {
    const {pno, gdate, name, contributors, descr} = req.body;
    const sql = "INSERT INTO patents(pno, gdate, name, contributors, descr) VALUES (?, ?, ?, ?, ?);";
    db.query(sql, [pno, gdate, name, contributors, descr], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added patent to database");
            res.redirect("/patents");
        }
    })
})

app.get("/booksform", (req, res) => {
    res.render("booksform");
})

app.post("/booksform", (req, res) => {
    const {bname, yryr, isbn, authors, publisher} = req.body;
    const sql = "INSERT INTO books(bname, year, isbn, authors, publisher) VALUES (?, ?, ?, ?, ?);";
    db.query(sql, [bname, yryr, isbn, authors, publisher], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added book to database");
            res.redirect("/books");
        }
    })
})

app.get("/bookchaptersform", (req, res) => {
    res.render("bookchaptersform");
})

app.post("/bookchaptersform", (req, res) => {
    const {bookchapter, year, bookseries, volumename, volumenumber, pages, isbnseries, isbnvolume, editors, executiveeditor, publisher, authors} = req.body;
    const sql = "INSERT INTO bookchapters(bookchapter, year, bookseries, volumename, volumenumber, pages, isbnseries, isbnvolume, editors, executiveeditor, publisher, authors) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
    db.query(sql, [bookchapter, year, bookseries, volumename, volumenumber, pages, isbnseries, isbnvolume, editors, executiveeditor, publisher, authors], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added bookchapter to database");
            res.redirect("/bookchapters");
        }
    })
})

app.get("/invtalksform", (req, res) => {
    res.render("invitedtalksform");
})

app.post("/invtalksform", (req, res) => {
    const { topic, event, date } = req.body;
    const sql = "INSERT INTO invitedtalks(topic, event, date) VALUES (?, ?, ?);";
    db.query(sql, [topic, event, date], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added invitedtalk to database");
            res.redirect("/invitedtalks");
        }
    })
})

app.get("/membershipform", (req, res) => {
    res.render("membershipform");
})

app.post("/membershipform", (req, res) => {
    const { orgname } = req.body;
    const sql = "INSERT INTO membership(orgname) VALUES (?);";
    db.query(sql, [orgname], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added membership to database");
            res.redirect("/membership");
        }
    })
})

app.get("/researchprojectsform", (req, res) => {
    res.render("researchprojectsform");
})

app.post("/researchprojectsform", (req, res) => {
    const { title, amount, year, role, funding } = req.body;
    const sql = "INSERT INTO researchprojects(title, amount, year, role, funding) VALUES (?,?,?,?,?);";
    db.query(sql, [title, amount, year, role, funding], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added researchproject to database");
            res.redirect("/researchprojects");
        }
    })
})

app.get("/conferenceform", (req, res) => {
    res.render("conferenceform");
})

app.post("/conferenceform", (req, res) => {
    const { cname, paper } = req.body;
    const sql = "INSERT INTO conference(cname, paper) VALUES (?,?);";
    db.query(sql, [cname, paper], (err, result, fields) => {
        if(err) console.log(err);
        else {
            console.log("added conference to database");
            res.redirect("/conferences");
        }
    })
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log("Server has started successfully");
});