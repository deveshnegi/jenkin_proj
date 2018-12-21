var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello World', done);
 });
});


describe('GET /hero',function(){
    it('respond with failed build test',function(done){
        request(app).get('/hero').expect('Hero Test Build',done);
    });
});