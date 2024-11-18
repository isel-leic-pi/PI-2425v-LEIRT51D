import {expect} from 'chai';
import services from '../tasks_service.js';

describe('Services Tests', () => {
    
    it('get task with id 1', () => {
        return services.getTaskById(1)
                 .then(task => expect(task).
                                deep.equal({id : 1, text : "study tds", userId : 11}))
    });
});