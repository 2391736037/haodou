var express = require("C:/Users/Administrator/Downloads/node-v8.12.0-win-x64/node-v8.12.0-win-x64/node_modules/express");
var app = new express();
var mysql = require("C:/Users/Administrator/Downloads/node-v8.12.0-win-x64/node-v8.12.0-win-x64/node_modules/mysql");
var bodyParser=require('C:/Users/Administrator/Downloads/node-v8.12.0-win-x64/node-v8.12.0-win-x64/node_modules/body-parser');

app.listen(8888);
//cros跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))  //qs  querystring
app.use(bodyParser.json());

//查询成功后关闭mysql
function closeMysql(connect){
    connect.end((err)=>{
        if(err){
            console.log(`mysql关闭失败:${err}!`);
        }else{
            console.log('mysql关闭成功!');
        }
	});
}

app.post("/register",(req,res)=>{
  console.log(req.body);
  let connect = connectmysql();
  console.log(req.body.username)
  var username = req.body.username;
  let mysqlfind = `select userid from register where userid = ${req.body.userid}`;
  let mysql1 = "INSERT INTO register(userid,username,passwd) VALUES ('"+req.body.userid+"','"+req.body.username+"','"+req.body.passwd+"')";
  connect.query(mysqlfind,(err,res1)=>{
    if(err){
      console.log(`SQL error: ${err}!`);
    }else if(res1.length == 0){
      connect.query(mysql1,(err)=>{
        if(err){
          console.log(`SQL error: ${err}!`);
        }else{
          console.log("写入成功");
          res.send("1")
          closeMysql(connect);
        }
      })
    }else{
      res.send("0");
    }
  })
});

//连接数据库
function connectmysql(){
	const db_config={
    	host:"localhost",
    	user:"root",
    	password:"root",
    	port:"3306",
    	database:"haodou" 
	}
	let connect=mysql.createConnection(db_config);
	//开始链接数据库
	connect.connect(function(err){
    	if(err){
       	console.log(`mysql连接失败: ${err}!`);
    	}else{
        	console.log("mysql连接成功!");
    	}
	});
	return connect;
}