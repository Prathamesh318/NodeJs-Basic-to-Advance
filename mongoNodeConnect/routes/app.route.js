module.exports = (app) => {
    const App = require("../controllers/app.controller.js");
    app.get("/get-all", App.findAll);
    app.get("/get/message/:messageId", App.findOne);
    app.post("/add", App.create);
    app.put("/update/:messageId", App.update);
    app.delete("/delete/:messageId",App.delete)
};
