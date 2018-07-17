var Mock = require("mockjs")
var Random = Mock.Random

var getList=[{
    "imgs":"list1.jpg",
    "title":"紫色花藤",
    "text":"紫薯黑米.健康粗粮",
    "pic":17,
    "flag":false,
    "count":0,
    "id":0
},{
    "imgs":"list2.jpg",
    "title":"美丽要怎早",
    "text":"红枣枸杞.健康粗粮搭配",
    "pic":17,
    "flag":false,
    "count":0,
    "id":1
}]

var bodyParser = require('body-parser');
module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get("/api/data", function(req, res, next) {
        res.send(getList)
    });
  
}