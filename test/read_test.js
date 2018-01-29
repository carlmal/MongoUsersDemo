const assert = require('assert');
const User = require('../src/user')

describe('Reading users from db', ()=> {
    let sam;

    beforeEach(() => {
        sam = new User({name:'Same'});
        sam.save()
           .then(()=> done());
    });
    
    it('finds all users with name of sam', () => {
        
    });
});
