// declare mongoose library
const mongoose = require('mongoose');

// connect to mongo database
mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
// eventhandler to make sure database is ready
    .once('open', ()=> console.log('Good to go'))
    .on('error', (error)=> {
        console.warn('Warning', error);
    });

// clean up test data
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        // Ready to run the next test!
        done();
    });
});