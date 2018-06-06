const cp = require("child_process");
const { client, models } = require("../db");
const { resolve } = require("path");
(async () => {
  const script = resolve(__dirname, "../crawler/latest-list");
  const child = cp.fork(script, []);
  let invoked = false;

  child.on("error", err => {
    if (invoked) return;

    invoked = true;

    console.log(err);
  });

  child.on("exit", code => {
    if (invoked) return;

    invoked = true;
    let err = code === 0 ? null : new Error("exit code " + code);

    console.log(err);
  });

  child.on("message", async data => {
    let result = data.result;
    for (const item of result) {
      let movie = await models.Movie.findOne({
        where: {
          title: item.title
        }
      });
      console.log("movie:", movie);
      if (!movie) {
        await models.Movie.create({
          title: item.title,
          poster: item.poster
        });
      }
    }
  });
})();
