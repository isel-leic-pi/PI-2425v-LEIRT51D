import {expect} from 'chai';
import data from '../tasks_data_mem.js'
import {servicesFunction} from '../tasks_service.js'

const services = servicesFunction(data)

describe('Services Tests', () => {
    
    it('get task with id 1', () => {
        return services.getTaskById(1)
                 .then(task => expect(task).
                        deep.equal({id : 1, text : "study tds", userId : 11}))
    });
});