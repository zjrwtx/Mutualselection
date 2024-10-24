<h3 id="G2QUx">项目 README 文档</h3>
---

<h1 id="LnPna">学生老师双选系统（Student-Teacher Mutual Selection System）</h1>
<h2 id="fBQHP">项目简介</h2>
本项目是一个基于 **UniApp**（前端）、**Node.js** + **Express**（后端）和 **MySQL**（数据库）的三层架构应用。它提供了学生、老师、管理员三个端口，用户可以进行注册、登录、双向选择、组分配等操作。系统采用了标准的三层架构模式，分为表示层（前端）、业务逻辑层（控制器）和数据访问层（数据库模型）。

<h3 id="aI9Ys">功能简介</h3>
+ **学生端**：学生可以注册和登录，选择自己心仪的老师，并确认选择。
+ **老师端**：老师可以确认学生的选择并进行最终确认。
+ **管理员端**：管理员可以查看学生和老师信息，并可以自动分配学生到不同的组中。

---

<h2 id="cWppK">技术栈</h2>
<h3 id="GjhBJ">前端</h3>
+ **UniApp**：跨平台移动应用开发框架，支持编写小程序、Android、iOS、H5等多个端口。

<h3 id="Mu84E">后端</h3>
+ **Node.js**：JavaScript 运行时，用于构建后端服务器。
+ **Express**：Node.js 的轻量级 Web 框架，用于路由和中间件管理。
+ **Sequelize**：Node.js ORM，用于连接和操作 MySQL 数据库。

<h3 id="sOFmN">数据库</h3>
+ **MySQL**：关系型数据库，用于存储用户、学生、老师等数据。

---

<h2 id="H7h5c">项目结构</h2>
```plain
MutualSelectionBackend
├── controllers           # 控制器层，处理业务逻辑
│   ├── authController.js  # 处理登录、注册逻辑
│   ├── studentController.js  # 处理学生相关业务逻辑
│   ├── teacherController.js  # 处理老师相关业务逻辑
│   └── adminController.js    # 处理管理员相关业务逻辑
├── models                # 数据模型层
│   ├── studentModel.js    # 学生模型
│   ├── teacherModel.js    # 老师模型
│   └── userModel.js       # 用户模型（包含所有用户）
├── routes                # 路由层
│   ├── authRoutes.js      # 登录注册路由
│   ├── studentRoutes.js   # 学生路由
│   ├── teacherRoutes.js   # 老师路由
│   └── adminRoutes.js     # 管理员路由
├── middlewares           # 中间件
│   └── authMiddleware.js  # 认证中间件，校验登录状态
├── config                # 配置文件
│   └── db.js             # 数据库配置和连接
├── app.js                # Express 应用主入口
└── package.json          # 项目依赖和脚本
```

---

<h2 id="DikKl">功能说明</h2>
<h3 id="ZJX3l">学生端</h3>
+ **注册和登录**：学生可以通过提供用户名和密码注册，登录后可以查看所有老师列表并选择老师。
+ **选择老师**：学生可以选择老师并确认，选中后老师会收到通知。

<h3 id="l9AQs">老师端</h3>
+ **确认学生**：老师可以登录系统，查看选择自己的学生列表，并确认最终学生名单。

<h3 id="HeWLa">管理员端</h3>
+ **学生/老师管理**：管理员可以查看所有学生和老师的信息。
+ **自动分组**：管理员可以一键分配学生到不同的组中。

---

<h2 id="ypHHg">安装与启动</h2>
<h3 id="TQS43">1. 克隆项目</h3>
```bash
git clone https://github.com/your-repo/MutualSelectionBackend.git
cd MutualSelectionBackend
```

<h3 id="bXPIP">2. 安装依赖</h3>
```bash
npm install
```

<h3 id="hpszE">3. 数据库配置</h3>
在 `config/db.js` 中配置 MySQL 数据库连接信息：

```javascript
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
```

<h3 id="MEguF">4. 运行迁移/同步数据库</h3>
项目启动时，Sequelize 会自动同步数据库模型。你只需启动项目即可创建所需的数据表。

<h3 id="rT6ip">5. 启动项目</h3>
```bash
npm start
```

服务器将会在 `localhost:3000` 运行。

---

<h2 id="bTdTP">API 接口文档</h2>
<h3 id="VPnxl">登录</h3>
+ **URL**: `/api/auth/login`
+ **方法**: `POST`
+ **请求参数**:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

+ **响应**:

```json
{
  "message": "登录成功",
  "token": "JWT_TOKEN"
}
```

<h3 id="dxzY1">注册</h3>
+ **URL**: `/api/auth/register`
+ **方法**: `POST`
+ **请求参数**:

```json
{
  "username": "your_username",
  "password": "your_password",
  "role": "student"  // 或 "teacher", "admin"
}
```

+ **响应**:

```json
{
  "message": "注册成功"
}
```

<h3 id="zJokY">获取老师列表（学生端）</h3>
+ **URL**: `/api/students/teachers`
+ **方法**: `GET`
+ **响应**:

```json
[
  {
    "id": 1,
    "name": "Teacher A",
    "department": "Math"
  },
  ...
]
```

<h3 id="YuPC6">确认选择老师（学生端）</h3>
+ **URL**: `/api/students/confirm`
+ **方法**: `POST`
+ **请求参数**:

```json
{
  "studentId": 1,
  "teacherId": 2
}
```

+ **响应**:

```json
{
  "message": "选择成功"
}
```

<h3 id="buePB">确认学生选择（老师端）</h3>
+ **URL**: `/api/teachers/confirm`
+ **方法**: `POST`
+ **请求参数**:

```json
{
  "teacherId": 1,
  "studentId": 2
}
```

+ **响应**:

```json
{
  "message": "已确认选择"
}
```

<h3 id="dTTFF">自动分组（管理员端）</h3>
+ **URL**: `/api/admin/assign-groups`
+ **方法**: `POST`
+ **响应**:

```json
{
  "message": "组分配成功"
}
```

---

<h2 id="FbQt9">讲解稿</h2>
<h3 id="agC5q">项目概述</h3>
大家好，今天我将为大家讲解我们的学生老师双选系统。这个系统主要用于学生和老师之间的双向选择，管理员可以管理学生和老师的分配，并最终进行自动分组。系统分为三个用户端，分别是学生、老师和管理员，每个端有不同的操作权限。

<h3 id="PFXbs">系统架构</h3>
我们的系统采用了标准的 **三层架构**，即表示层、业务逻辑层和数据访问层：

1. **表示层**：使用 **UniApp** 构建了学生、老师和管理员的三个前端页面，提供了登录、注册、双选、分组等功能。
2. **业务逻辑层**：使用 **Node.js + Express** 构建了后端服务器，处理所有的 API 请求和响应。业务逻辑分为三个控制器，分别处理学生、老师、管理员的请求。
3. **数据访问层**：使用 **Sequelize ORM** 连接 **MySQL** 数据库，管理用户、学生、老师的数据。

<h3 id="P2hGA">主要功能</h3>
系统支持以下主要功能：

+ **注册和登录**：学生、老师和管理员可以分别注册自己的账号并登录系统。
+ **学生选择老师**：学生可以选择老师，并提交确认。
+ **老师确认学生选择**：老师可以查看选择自己的学生列表，并确认最终名单。
+ **管理员自动分组**：管理员可以一键完成学生的分组操作。

<h3 id="FLcGC">安装和使用</h3>
项目可以通过简单的几步运行：

1. 首先克隆项目并安装依赖。
2. 配置数据库连接信息。
3. 启动服务器，系统会自动同步数据库表。
4. 最后，可以通过 API 或前端界面进行功能测试。

<h3 id="JgbSM">总结</h3>
总的来说，这个项目是一个小型的多端用户系统，展示了从前端到后端再到数据库的全栈开发流程。系统通过三层架构和清晰的模块划分，使得代码的可维护性和扩展性都非常高。

如果大家有任何问题，欢迎提出，谢谢！

---

这就是完整的 README 文档和讲解稿，你可以根据具体需求进行调整和补充。

