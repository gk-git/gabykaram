const Airtable = require('airtable')

exports.handler = function(event, context, callback) {
  Airtable.configure({
    endpointUrl: process.env.AIRTABLE_API_URL,
    apiKey: process.env.AIRTABLE_API_KEY
  })
  
  const base = Airtable.base('appiEYG2OPWKTwP61')
  const allRecords = []
  base('entries')
    .select({
      // This caps total records to 100, not just each request
      // maxRecords: 100,
      view: 'all'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allRecords.push(record)
        })
        fetchNextPage()
      },
      function done(err) {
        if (err) {
          callback(err)
        } else {
          console.log(allRecords.length)
          const body = JSON.stringify({ records: allRecords })
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=60, public'
            }
          }
          callback(null, response)
        }
      }
    )
}
