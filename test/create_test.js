const assert = require('assert');
const User = require('../src/user')

describe('Creating records', ()=> {
    it('saves a user', ()=> {
        const sam = new User({name:'Sam'});

        sam.save();

    });
});