if (process.env.NODE_ENV === "productioni") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
