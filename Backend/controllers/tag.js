const Tags = require("../models/tags");
const slugify = require("slugify");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  const { tagName } = req.body;
  let slug = slugify(tagName).toLowerCase();

  let tag = new Tags({ tagName, slug });

  tag.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  Tags.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Tags.find({ slug }).exec((err, tag) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(tag);
  });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Tags.findOneAndDelete({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Tag Deleted",
    });
  });
};
