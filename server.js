//console.log('May Node be with you')
const express = require('express')
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
//require('materialize-css')
const ObjectId = require('mongodb').ObjectID;
//const ang = require('angular')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
//app.use(ang)
//app.use('materialize-css')
//res.render(view, locals)

var db
var x

var collectionOne = [];
var collectionTwo = [];
var collectionThree = [];

MongoClient.connect('mongodb://pmtadmin:Qm41r6001@ds031607.mlab.com:31607/project-tool', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
    //console.log(db.version())
  })
})

/*app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
	console.log (result)
    //res.render('index.ejs', {quotes: result})
  })
  
})*/


app.get('/Luke', (req, res) => {
  
    db.collection('projects').find({ Manager: "Luke Langfield" }).toArray((err, resultprol) => {
    if (err) return console.log(err)
      console.log(resultprol)


      res.render('lukeprojects.ejs', {projects: resultprol});

    })

})

app.get('/Lisa', (req, res) => {
  
    db.collection('projects').find({ Manager: "Lisa Zettler" }).toArray((err, resultprol) => {
    if (err) return console.log(err)
      console.log(resultprol)


      res.render('lukeprojects.ejs', {projects: resultprol});

    })

})

app.get('/Claire', (req, res) => {
  
    db.collection('projects').find({ Manager: "Claire Pitcher" }).toArray((err, resultprol) => {
    if (err) return console.log(err)
      console.log(resultprol)


      res.render('lukeprojects.ejs', {projects: resultprol});

    })

})

app.get('/dashboard', (req, res) => {
  
    db.collection('projects').find().toArray((err, resultprol) => {
    if (err) return console.log(err)
      console.log(resultprol)

    collectionOne = resultprol
    db.collection('risks').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
  //console.log (result)
  collectionTwo = result
      res.render('dashbaord.ejs', {projects: collectionOne, risks: collectionTwo});

    })
  })

})




app.get('/', (req, res) => {
  db.collection('projects').find().toArray((err, resultpro) => {
    if (err) return console.log(err)
    // renders index.ejs
	//console.log (resultpro)

  /*for(var i=0; i<resultpro[i].length; i++){



    
    var newTime = resultpro[i]._id.getTimestamp()

    var newDate = new Date(newTime).toDateString();
    //console.log(newDate);
    //collectionThree.push(newDate);
    console.log(collectionOne)
    resultpro[i].push(newDate)

    //var d = new Date('Wed, 09 Aug 1995 00:00:00 GMT').toDateString();
  //alert(d);
  }*/
  //resultpro.push(newDate);

  collectionOne = resultpro
	//collectionOne.push(resultpro)
  //console.log(collectionOne)
	//console.log(collectionOne)
  //collectionOne.push(newDate);
	//var children = collectionOne.concat(collectionThree);
  //console.log(children)

	db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
	//console.log (result)
	collectionTwo = result
	//console.log(collectionTwo)
	



    res.render('index.ejs', {projects: collectionOne, quotes: collectionTwo, time: collectionThree})
  
		})
	})
	
  //end of app get
})


app.get('/risks', (req, res) => {
  
    db.collection('risks').find().toArray((err, resultpror) => {
    if (err) return console.log(err)



      res.render('about.ejs', {risks: resultpror});

    })

})



/*app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})*/


app.post('/project', (req, res) => {
  db.collection('projects').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/riskform', (req, res) => {
  db.collection('risks').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/risks')
  })
})

/*Getting the form to edit
app.post('/editform', (req, res) => {
    
    db.collection('projects')


    var x = req.body.Name
    console.log(x);
   console.log(req.body.Type);
   console.log(req.body.Owner);
   console.log(req.body.Manager);
    console.log(req.body.RAG);
   console.log(req.body.Approach);

    console.log('saved to database')
    res.redirect('/')
  
})*/

/*app.post('/editform', (req, res) => {
  db.collection('projects')
  .findOneAndUpdate({Name: 'Vader'}, {
    $set: {
      Name: "Darth",
      //Owner: req.body.Owner
    }
  }, {
    //sort: {_id: -1},
    //upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)

  })

})*/


app.put('/projects', (req, res) => {
  db.collection('projects')
  .findOneAndUpdate({_id: ObjectId(req.body.ID)}, {
    $set: {
      Name: req.body.Name,
      Manager: req.body.Manager,
      Owner : req.body.Owner,
      Type : req.body.Type,
      RAG : req.body.RAG,
      Approach : req.body.Approach,
      Time: req.body.Time
      //Description: req.body.Description,
      //ProjectRef: req.body.ProjectRef
      //Owner: req.body.Owner
    }
  }, {
    //sort: {_id: -1},
    //upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})




app.delete('/projects', (req, res) => {
  db.collection('projects').findOneAndDelete({_id: ObjectId(req.body.ID)},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send('A darth vadar quote got deleted')
  })
})

app.delete('/riskDelete', (req, res) => {
  db.collection('risks').findOneAndDelete({_id: ObjectId(req.body.ID)},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send('A darth vadar quote got deleted')
  })
})

