module.exports = {
  content: [
    ['docs', {
      permalink: 'docs/:section?/:slug',
      isPost: false,
      page: '_slug',
      generate: [
        'get', 'getAll'
      ]
    }]
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
