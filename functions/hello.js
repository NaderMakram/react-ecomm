// domain/.netlify/functions/hello
const data = { id: 1, name: "timon" };

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
