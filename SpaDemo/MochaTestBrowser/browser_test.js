
 var answer=42;
 describe('Backbone Test', function() {


  describe('Every backbone module should be available after browser rendering', function() {

/* More UI test with jQuery interaction.....
   var setText = function(text, selector) {
    var input = $('#new-todo');
    var e = $.Event("keypress");
    e.which = e.keyCode = 13;
    return input.val(text).trigger(e);
   };
*/
   before(function() {

   });


   it('app name space module should be existed"', function() {
   
    should.exist(app);
   });

   it('app.TodoRouter should be existed"', function() {
   
    should.exist(app.TodoRouter);
   });

   it('app.Todo model module should be existed"', function() {
    should.exist(app.Todo);

   });
   it('app.todos cllection module should be existed"', function() {
    should.exist(app.todos);

   });

   it('app.AppView view module should be avaliable"', function() {
    should.exist(app.AppView);
   });
   it('app.TodoView view module should be avaliable"', function() {
    should.exist(app.TodoView);

   });

/*
   it("Adding new TODOs", function () {
    setText('TODO A');
    setText('TODO B');
    expect($('#todo-list li').length).to.be.equal(2);
   });
   */
  });

 });



/*
 // spec.js
 describe("Testing TODOMVC", function () {

 var setText = function(text, selector) {
 var input = $(selector || '#new-todo');
 var e = $.Event("keypress");
 e.which = e.keyCode = 13;
 return input.val(text).trigger(e);
 };

 before(function() {
 window.localStorage.removeItem('todos-backbone', '');
 app.todos.reset();
 });

 it("Adding new TODOs", function () {
 setText('TODO A');
 setText('TODO B');
 expect($('#todo-list li').length).to.be.equal(2);
 });
 it("Deleting TODO", function () {
 $('#todo-list li:first-child .destroy').click();
 expect($('#todo-list li').length).to.be.equal(1);
 });
 it("Edit and add TODOs", function () {
 setText('A new TODO');
 $('#todo-list li:first-child').addClass('editing');
 setText('A new TODO', '#todo-list li:first-child .edit').blur();
 expect($('#todo-list li').length).to.be.equal(2);
 expect($('#todo-list li label').eq(0).text()).to.be.equal($('#todo-list li label').eq(1).text())
 });

 });

 The test starts with a describe call, wrapping our checks in a test suite. The setText function is a helper that changes the value of an input field and simulates the pressing of the Enter key.

 Most testing
 */