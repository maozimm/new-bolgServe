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

 Date: 27/02/2020 18:45:32
*/


// ----------------------------
// Collection structure for comments
// ----------------------------
db.getCollection("comments").drop();
db.createCollection("comments");

// ----------------------------
// Documents of comments
// ----------------------------
db.getCollection("comments").insert([ {
    _id: ObjectId("5e5697375dd1972d6adefa90"),
    state: NumberInt("0"),
    author: ObjectId("5e0c86ac4a62892ad0b88533"),
    content: "这是一条测试评论",
    post: ObjectId("5e4e4a767fd6a3edc849d5b2"),
    createAt: ISODate("2020-02-26T16:05:11.656Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5e576d4bb21cae457a337907"),
    state: NumberInt("0"),
    author: ObjectId("5e0c86ac4a62892ad0b88533"),
    content: "这是一条测试评论2",
    post: ObjectId("5e4e4a767fd6a3edc849d5b2"),
    createAt: ISODate("2020-02-27T07:18:35.318Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5e579a06b11416908061559c"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "终于做好了",
    post: ObjectId("5e4e4a767fd6a3edc849d5b2"),
    createAt: ISODate("2020-02-27T10:29:26.711Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5e579a21b11416908061559e"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "nice",
    post: ObjectId("5e4e4a767fd6a3edc849d5b2"),
    createAt: ISODate("2020-02-27T10:29:53.851Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5e579b1981d8837c5ca5cb21"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "测试倒序排列",
    post: ObjectId("5e4e4a767fd6a3edc849d5b2"),
    createAt: ISODate("2020-02-27T10:34:01.631Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5e579b84a1b555961cb0c476"),
    state: NumberInt("0"),
    author: ObjectId("5e4bb466d2434e0d9406cd62"),
    content: "倒序成功",
    post: ObjectId("5e4e4a767fd6a3edc849d5b2"),
    createAt: ISODate("2020-02-27T10:35:48.08Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5e579c66a1b555961cb0c479"),
    state: NumberInt("0"),
    author: ObjectId("5e0ec12a15d62d3ec8a61d6b"),
    content: "我是1楼",
    post: ObjectId("5e4e5bc926639a0dd0db3033"),
    createAt: ISODate("2020-02-27T10:39:34.253Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5e579cfdd7946bbc849d54c1"),
    state: NumberInt("0"),
    author: ObjectId("5e0ec12a15d62d3ec8a61d6b"),
    content: "12345",
    post: ObjectId("5e4e5bc926639a0dd0db3033"),
    createAt: ISODate("2020-02-27T10:42:05.239Z")
} ]);
