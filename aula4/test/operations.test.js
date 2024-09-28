import {expect} from 'chai';
import {sum,div} from '../operations.js'


describe('Operations Test', () => {
    
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).to.equal(3);
      });
    
    it('6 / 2 to equal 3', () => {
        expect(div(6, 2)).to.equal(3);
      });
});