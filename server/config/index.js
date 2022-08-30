const postsRouter = require("../routes/postsRouter");

module.exports = (server, router) => {
  server.get("/", (req, res) =>
    res.status(200).json({ message: "sanity check" })
  );
  server.use("/wall", postsRouter(router));
};
