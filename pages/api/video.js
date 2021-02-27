const ytdl = require('ytdl-core');
export default (req, res) => {
  let url = req.query.url;
  ytdl(url, { filter: "videoandaudio", quality:"highestvideo" }).pipe(res);
}
