const axios = require("axios");
 
exports.handler = async function (event, context, callback) {
  const data = await axios("https://jsonplaceholder.typicode.com/posts");
  console.log(context, "wahab");
  if (event.httpMethod == "GET") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: data.data,
      }),
    });
  } else if (event.httpMethod == "POST") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: "helloooo",
      }),
    });
  } else {
    callback(null, {
      statusCode: 200,
      body: "Hello ",
    });
  }
};