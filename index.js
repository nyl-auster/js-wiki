/*============================*/
/*  JS Wiki & Snippets
/*============================*/


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
