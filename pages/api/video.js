const ytdl = require('ytdl-core');
export default (req, res) => {
  res.set('Content-Type', 'video/mp4');   
  let url = req.query.url;
  ytdl(url, { filter: "videoandaudio", quality:"highestvideo" }).pipe(res);
}
