import * as dotEnv from "dotenv-flow";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as session from "express-session";

dotEnv.config();

const app = express();
// 引入body-parser中间件用于解析请求体，

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" })); // for parsing application/json
app.use(express.urlencoded({ limit: "10mb", extended: true })); // for parsing application/x-www-form-urlencoded

// 设置错误处理中间件，跑出异常后打印，而不是直接关闭服务器
import { Request, Response, NextFunction } from "express";

//设置跨域请求
// app.all("*", function (req, res, next) {
//   let originHeader = req.headers.origin;
//   res.header("Access-Control-Allow-Origin", originHeader);
//   // res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, x-token"
//   );
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", " 3.2.1");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

/**
 * ================================================================================
 * 开启服务器
 *
 * ================================================================================
 */
const xtoken = process.env.TOKEN as string;
const port = 3000;
app.listen(port, () => {
  // 系统环境变量TOKEN
  console.log(
    `捏他插图系统服务端,启动成功!端口号：${port},获取到的token为：${xtoken}`
  );
});
