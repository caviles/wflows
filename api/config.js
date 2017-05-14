/**
 * Created by cesaraviles on 5/9/17.
 */
var config = {};

config.mongoConnectionString = "";
config.redis = {};
config.web = {};


config.mongoConnectionString = process.env.MONGO || 'mongodb://wdev:$Dev21ac123fl0w@ds137141.mlab.com:37141/wflow';
config.redis.uri = process.env.DUOSTACK_DB_REDIS;
config.redis.host = 'hostname';
config.redis.port = 6379;
config.web.port = process.env.WEB_PORT || 9980;

module.exports = config;
