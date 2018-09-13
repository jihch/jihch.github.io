//express_demo.js 文件
var express = require('express');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

var app = express();
var multipartMiddleware = multipart();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/', function (req, res) {
   res.send('Hello World');
})

//全部歌手
app.get('/api/singers/page/*', function (req, res) {
   res.send('{"message":"SUCCESS","content":{"page":{"totalpage":1,"curpage":1},"list":[{"starID":2000,"starPicUrl":"http://ktv.guagua.cn/group1/M01/02/28/wKgD8ltJZ3-AAkPYAAAOqLoz_ik493.jpg","starName":"洪煜祺","num":1},{"starID":2001,"starPicUrl":"http://ktv.guagua.cn/group1/M01/02/28/wKgD81tJZ3WAJuwWAAAN40ZkTl8642.jpg","starName":"洪杰","num":1},{"starID":2002,"starPicUrl":"http://ktv.guagua.cn/group1/M00/02/28/wKgD8ltJZ2eAKsmeAAAPd5TOHVA296.jpg","starName":"王识贤","num":1}]},"state":0}');
})

//歌手对应的歌曲
app.get('/api/singer/*/page/*', function (req, res) {
   res.send('{"message":"SUCCESS","content":{"page":{"totalpage":1,"curpage":1},"list":[{"songId":36054,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJoqSABrclAAAa42PZRHc304.jpg","songName":"破吉他","starName":"张铭峰","songFileUrl":"http://ktv.guagua.cn/group1/M00/02/35/wKgD8ltJoqOAZoYTAi9vnWoCJ6U464.mp4"},{"songId":36053,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJopqAL3JIAAAj73kOUHI228.jpg","songName":"男人伤心也流泪","starName":"张铭峰","songFileUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJopmAXQs7AZP4kTyUALc483.mp4"},{"songId":36052,"songPictUrl":"http://ktv.guagua.cn/group1/M00/02/35/wKgD81tJopSAeBRhAAArih5z3gY077.jpg","songName":"甭讲也罢","starName":"罗时丰","songFileUrl":"http://ktv.guagua.cn/group1/M00/02/35/wKgD8ltJopSAOa_aAjpJJkWLuHU393.mp4"}]},"state":0}');
})

//日榜
app.get('/api/day-rank/page/*', function (req, res) {
   res.send('{"message":"SUCCESS","content":{"page":{"totalpage":1,"curpage":1},"list":[{"songId":36054,"times":20,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJoqSABrclAAAa42PZRHc304.jpg","songName":"破吉他","starName":"张铭峰"},{"songId":36053,"times":19,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJopqAL3JIAAAj73kOUHI228.jpg","songName":"男人伤心也流泪","starName":"张铭峰"},{"songId":36052,"times":18,"songPictUrl":"http://ktv.guagua.cn/group1/M00/02/35/wKgD81tJopSAeBRhAAArih5z3gY077.jpg","songName":"甭讲也罢","starName":"罗时丰"}]},"state":0}');
})

//周榜
app.get('/api/week-rank/page/*', function (req, res) {
   res.send('{"message":"SUCCESS","content":{"page":{"totalpage":1,"curpage":1},"list":[{"songId":36054,"times":20,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJoqSABrclAAAa42PZRHc304.jpg","songName":"破吉他","starName":"张铭峰"},{"songId":36053,"times":19,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJopqAL3JIAAAj73kOUHI228.jpg","songName":"男人伤心也流泪","starName":"张铭峰"},{"songId":36052,"times":18,"songPictUrl":"http://ktv.guagua.cn/group1/M00/02/35/wKgD81tJopSAeBRhAAArih5z3gY077.jpg","songName":"甭讲也罢","starName":"罗时丰"}]},"state":0}');
})

//月榜
app.get('/api/month-rank/page/*', function (req, res) {
   res.send('{"message":"SUCCESS","content":{"page":{"totalpage":1,"curpage":1},"list":[{"songId":36054,"times":20,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJoqSABrclAAAa42PZRHc304.jpg","songName":"破吉他","starName":"张铭峰"},{"songId":36053,"times":19,"songPictUrl":"http://ktv.guagua.cn/group1/M01/02/35/wKgD8ltJopqAL3JIAAAj73kOUHI228.jpg","songName":"男人伤心也流泪","starName":"张铭峰"},{"songId":36052,"times":18,"songPictUrl":"http://ktv.guagua.cn/group1/M00/02/35/wKgD81tJopSAeBRhAAArih5z3gY077.jpg","songName":"甭讲也罢","starName":"罗时丰"}]},"state":0}');
})

//上传视频
app.post('/api/fileUpload', multipartMiddleware, function (req, res) {
   if (req.body.song == null) {
        res.send('{"message":"歌名不能为空","content":{},"state":500}');
   } else {
        res.send('{"message":"SUCCESS","content":{},"state":0}');
   }    
   
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})