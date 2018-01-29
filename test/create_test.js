const assert = require('assert');
const User = require('../src/user')

describe('Creating records', ()=> {
    it('saves a user', (done)=> {
        const sam = new User({name:'Sam'});

        sam.save()
           .then(() => {
            //Has sam been saved successfully?
            assert(!sam.isNew);
            done();
           });

    });
});