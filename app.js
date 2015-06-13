/* 
 * Module dependencies
 */

var express = require('express')

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.render('index',
		{ title : 'Home'}
	)
})

app.get('/beer', function (req, res) {
	res.render('beer',
		{ title : 'Beer'}
	)
})

app.listen(3000)