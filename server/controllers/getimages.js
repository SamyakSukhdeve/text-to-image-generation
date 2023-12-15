const { Client } = require("craiyon");
const craiyon = new Client();
var bodyParser = require("body-parser");

exports.getimage = async (req, res) => {
  const promt = req.body.text;
  console.log(promt);
  const getAiImage = async () => {
    const result = await craiyon.generate({
      prompt: String(promt),
    });
    res.send(result.asBase64());
  };
  getAiImage();
};

// const { Client, CraiyonImage, CraiyonOutput } = require("craiyon");

// const craiyon = new Client();

// const getAiImage = async () => {
//   const result = await craiyon.generate({
//     prompt: "plane in water",
//   });
//   console.log(result);
// };

// getAiImage();
