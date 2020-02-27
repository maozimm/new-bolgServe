/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 40106
 Source Host           : localhost:27017
 Source Schema         : my_blog

 Target Server Type    : MongoDB
 Target Server Version : 40106
 File Encoding         : 65001

 Date: 27/02/2020 18:45:51
*/


// ----------------------------
// Collection structure for replies
// ----------------------------
db.getCollection("replies").drop();
db.createCollection("replies");

// ----------------------------
// Documents of replies
// ----------------------------
db.getCollection("replies").insert([ {
    _id: ObjectId("5e56a90f0da623988824eeb7"),
    state: NumberInt("0"),
    author: ObjectId("5dff3ec4e7c5e24714808192"),
    content: "这是一条回复评论",
    comment: ObjectId("5e5697375dd1972d6adefa90"),
    createAt: ISODate("2020-02-26T17:21:19.163Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e57914ddfc3dc381c87de36"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "awrwa",
    comment: ObjectId("5e5697375dd1972d6adefa90"),
    createAt: ISODate("2020-02-27T09:52:13.256Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e5791dedfc3dc381c87de3a"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "测试回复123456",
    comment: ObjectId("5e576d4bb21cae457a337907"),
    createAt: ISODate("2020-02-27T09:54:38.845Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e5791f8dfc3dc381c87de3b"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "帽子是傻子",
    comment: ObjectId("5e5697375dd1972d6adefa90"),
    createAt: ISODate("2020-02-27T09:55:04.055Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e5797a9dfc3dc381c87de4a"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "为啥时间是一样的",
    comment: ObjectId("5e5697375dd1972d6adefa90"),
    createAt: ISODate("2020-02-27T10:19:21.012Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e5797b7dfc3dc381c87de4b"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "果然是不一样的",
    comment: ObjectId("5e5697375dd1972d6adefa90"),
    createAt: ISODate("2020-02-27T10:19:35.702Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e5797d7dfc3dc381c87de4c"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "刚才是啥情况",
    comment: ObjectId("5e5697375dd1972d6adefa90"),
    createAt: ISODate("2020-02-27T10:20:07.21Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e57980bdfc3dc381c87de4d"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "33是只小蠢猫",
    comment: ObjectId("5e576d4bb21cae457a337907"),
    createAt: ISODate("2020-02-27T10:20:59.613Z")
} ]);
db.getCollection("replies").insert([ {
    _id: ObjectId("5e579c70a1b555961cb0c47a"),
    state: NumberInt("0"),
    author: ObjectId("5e0ec12a15d62d3ec8a61d6b"),
    content: "我是火车王",
    comment: ObjectId("5e579c66a1b555961cb0c479"),
    createAt: ISODate("2020-02-27T10:39:44.212Z")
} ]);
