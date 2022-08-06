const { Op } = require("sequelize");
const Himti = require('../models/Himti')

//Read Data
exports.getHimtis = (req, res) => {
  Himti.findAll({
      where: {
          deletedAt: {
            [Op.is]: null,
          },
        },
      order: [["createdAt", "ASC"]],
  })
  .then((Himti) => {
      res.send({
      succes: true,
      statusCode: 200,
      message: "This",
      data: Himti,
      });
  })
  .catch((err) => {
      res.send({
          succes: true,
          statusCode: 500,
          message: err.message,
          data: {},
      });
  });
};

//Create Data
exports.createHimtis = (req, res) => {
  Himti.create(req.body, {
    field: ["name", "userid", "comment", "category", "categoryid"],
  })
    .then((Himti) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Created",
        data: Himti,
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
        data: {},
      });
    });
  };

//Search Data
exports.searchHimtis = (req, res) => {
  const { value } = req.query;
  if (!value) {
    this.getHimtis;
  }
  Himti.findAll({
    where: {
      [Op.or]: [
        {
          name: { [Op.like]: `%${value}%` },
        },
        {
          comment: { [Op.like]: `%${value}%` },
        },
      ],
      deletedAt: {
        [Op.is]: null,
      },
    },
    order: [["createdAt", "ASC"]],
  })
    .then((Himti) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "This",
        data: Himti,
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 500,
        message: err.message,
        data: {},
      });
    });
};

//Update Data
exports.updateHimtis = (req, res) => {
  const { himtiId } = req.params;
  const body = req.body;
  Himti.update(
    {
      name: body.name,
      userid: body.userid,
      comment: body.comment,
      category: body.category,
      categoryid: body.categoryid,
    },
    {
      where: {
        id: himtiId,
      },
    }
  )
    .then((Himti) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Update",
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
        data: {},
      });
    });
};

//Delete Data
exports.deleteHimtis = (req, res) => {
  const { himtiId } = req.params;
  Himti.update(
    { deletedAt: new Date() },
    {
      where: {
        id: himtiId,
      },
    }
  )
    .then((Himti) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Deleted",
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
      });
    });
};


//Restore Data
exports.restoreHimtis = (req, res) => {
  const { himtiId } = req.params;
  Himti.update(
    { deletedAt: null },
    {
      where: {
        id: himtiId,
      },
    }
  )
    .then((Himti) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Restore",
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
      });
    });

};

//Filter Nama
exports.filterHimtis = (req, res) => {
  const {name} = req.query
  Himti.findAll({ 
      where : { name: `${name}`, deletedAt: {
           [Op.is]: null,
          },
        },
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Terjadi error saat mencari data."
      });
  });
}
