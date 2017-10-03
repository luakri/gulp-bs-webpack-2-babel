/*global describe:true, it:true, expect:true, afterEach: true, beforeEach:true */

import Component from '../index';

describe('# Component1 Scenario', function() {

    let component = null;

    beforeEach(function() {
        component = new Component();
    });

    afterEach(function () {
        component = null;
    });

    it('should have default methods', function() {

        expect(typeof component).to.equal('object');

        expect(component.update).not.to.be.undefined;

        expect(typeof component.update).to.equal('function');
    });

    it('should get/set simple property', function() {

        let update = component.update();

        expect(update).to.be.true;
    });
});