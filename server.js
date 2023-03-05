const express = require("express");
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
const app = express();

i18next.use(Backend).use(middleware.LanguageDetector).init({
    fallbackLng: "en",
    backend: {
        loadPath:'./locales/{{lng}}/translation.json'
    }
})

app.use(middleware.handle(i18next))
app.get("/", (req, res) => {
    res.status(200).json({
      message: req.t("route_found")
  });
});
app.use("*", (req, res) => {
    res.status(404).json({ message: req.t("route_not_foound") });
});
app.listen(8000, () => console.log("server is running right now"));
module.exports = app