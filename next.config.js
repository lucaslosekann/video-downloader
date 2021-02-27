module.exports = {
  async headers() {
    return [
      {
        source: '/api/video',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4'
          }
        ],
      },
    ]
  },
}