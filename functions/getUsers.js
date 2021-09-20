const axios = require("axios");
 
exports.handler = async function (event, context, callback) {
  const data = await axios("https://api.publicapis.org/entries");
  console.log(context, "Muhammad Ahsan");
  if (event.httpMethod == "GET") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: "This was a GET request",
        data: data.data,
      }),
    });
  } else if (event.httpMethod == "POST") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: "This was a POST request",
      }),
    });
  } else {
    callback(null, {
      statusCode: 200,
      body: "This was a DELETE or PUT request ",
    });
  }
};