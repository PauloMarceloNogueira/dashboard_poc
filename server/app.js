import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import env from './config/env';
import routes from './routes';
import http from 'http'
const app = express();
var r = require('rethinkdbdash')({
    port: 28015,
    host: 'localhost',
    db: "test"
});

r.table('configs')
.changes()
.run()
.then(function(cursor){
	cursor.each(function(err,result){
		console.log(result,'result')
	})
})

if (env.name === 'production') {
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

export default app;
