"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ytdl_core_1 = __importDefault(require("ytdl-core"));
var fs_1 = __importDefault(require("fs"));
var app = express_1.default();
app.get("/", function (req, res) {
    ytdl_core_1.default("https://www.youtube.com/watch?v=Oxr7OQKoY8Q", {
        quality: "highestaudio",
    }).pipe(fs_1.default.createWriteStream("movie.mp4"));
    res.send("Hello World");
});
app.listen(3000, function () { return console.log("App is up and running"); });
