/// <reference types="cypress" />

context('Hello test', function(){

    beforeEach(function(){
        cy.visit('http://todomvc.com/examples/angular2/');
        cy.get('.new-todo')
            .type('吃飯{enter}')
            .type('睡覺{enter}')
            .type('打東東{enter}');

    });   

    it('can add items', function(){
        cy.contains('3 items left');
    });

    it('can add items', function(){
        cy.get('input.toggle').eq(0).click();
        cy.get('input.toggle').eq(1).click();

        cy.contains('1 item left');
    });
});