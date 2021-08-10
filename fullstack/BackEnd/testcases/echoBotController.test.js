var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
var proxyquire = require('proxyquire');
const sinon = require('sinon');
var server = require('../server').app;
var echoBotController = require('../controller/echoBotController');
const should = chai.should();
describe("Echo Bot Unit Test", function () {
    describe("echo Bot Controller Test", function () {
        it("Test api post request", function (done) {
            // Send some Form Data
            chai.request(server)
                .post('/echobot')
                .send({
                    "userInput": "hi hello"

                })
                .end(function (err, res) {


                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.botResponse.should.equal('hi hello');

                    done();

                });
        });

        it("Echobot api post request should return 400 if it doesnot have userInput", function (done) {
            // Send some Form Data
            chai.request(server)
                .post('/echobot')
                .send({
                    "userInput": ""

                })
                .end(function (err, res) {


                    res.should.have.status(400);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.botResponse.should.equal("Invalid JSON string");

                    done();

                });
        });


    });


});