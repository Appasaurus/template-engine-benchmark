var ejs = require("ejs");
var jade = require("jade");
var swig = require("swig");

var dataset = {"title": "This is a page title"};

exports.compare = {
  "ejs": function() {
    ejs.render("views/basic-title/index.ejs", dataset);
  },

  "jade": function() {
    jade.renderFile("views/basic-title/index.jade", dataset);
  },

  "swig": function() {
    swig.renderFile("views/basic-title/index.swig", dataset);
  }
};

require("bench").runMain()
