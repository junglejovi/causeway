// var RedisHandler = require('./resources/redisHandler');
// var redis = new RedisHandler(2232);
// redis.kill();

describe('Register',function () {

    var Causeway = require(process.cwd() + '/index.js'),
        RedisHandler = require('./resources/redisHandler'),
        causeway,
        redis;

    before(function () {
        redis = new RedisHandler(2236);
    });

    afterEach(function () {
        redis.kill();
    });

    beforeEach(function () {
        causeway = new Causeway();
    });

    it('should use the default redis host and port if no options are passed to register', function () {
        causeway.register();
    });
});