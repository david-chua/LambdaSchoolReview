## ES6: Arrow Functions

var nameImprove = (name, adj) => {
  return `Col ${name} Mc ${adj} pants`;
}

$('body').hide();


myArr.forEach(val => console.log(val))

$('button').on('click', () => {
  console.log("Don't press my buttons");
})

Main difference - binds the context
Context is value that "this" has to its parent context.
Arrow function does not have value for this.
They reach out to parent scope for the value of "this"
