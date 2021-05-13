module.exports = {
    ci: {
      collect: {
        url: ['https://www.nasdaq.com/market-activity/stocks/tsla'],
        startServerCommand: '',
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://localhost:3003/',
        token: 'f364b608-5249-43c0-978d-ee8a5f4cd30d', // could also use LHCI_TOKEN variable instead
      },
    },
  };