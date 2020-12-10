import express from "express";
import ytdl from "ytdl-core";
import fs from "fs";
const app = express();

app.get("/", async (req, res) => {
  const url = req.query.url + "";
  const basicInfo = await ytdl.getInfo(url);

  ytdl(url, {
    quality: "highestaudio",
  }).pipe(
    fs.createWriteStream("results/" + basicInfo.videoDetails.title + ".mp3")
  );
  res.send("Hello World");
});

app.listen(3000, () => console.log("App is up and running"));
