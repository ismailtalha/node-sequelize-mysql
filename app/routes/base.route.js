module.exports = function (app , controllerpath , keyword) {
    const model = require(controllerpath);

    app.post(`/api/${keyword}`, model.save);

    app.get(`/api/${keyword}`, model.findAll);

    app.get(`/api/${keyword}/:id`, model.findOne)

    app.put(`/api/${keyword}/:id`, model.update)

    app.delete(`/api/${keyword}/:id`, model.delete)

    app.delete(`/api/${keyword}/`, model.deleteall)

}