/*============================*/
/*  JS Wiki & Snippets
/*============================*/


/*============================*/
/*  Catch promise Errors
/*============================*/

var p = new Promise((resolve, reject) => {
   setTimeout(() => {
     // Error permet d'indiquer la ligne de l'erreur exact
     reject(Error("Une erreur a été detectée"))
   }, 1000)
})

p.then(data => console.log(data)).catch(e => console.log(e))


/*============================*/
/*  Array.findIndex()
/*============================*/
var comments = [
  {id: 345, content: "hello world"},
  {id: 347, content: "hello world"},
  {id: 349, content: "I LIKE TRAINS"}
]

comments.splice(comments.findIndex(comments => comments.id === 349))

// comments =
[
  { id: 345, content: 'hello world' },
  { id: 347, content: 'hello world' }
]

/*============================*/
/*  Array.find()
/*============================*/
var comments = [
  {id: 345, content: "hello world"},
  {id: 347, content: "hello world"},
  {id: 349, content: "I LIKE TRAINS"}
]

var comment = comments.find(comments => comments.id === 349)
// comment =
// { id: 349, content: 'I LIKE TRAINS' }
