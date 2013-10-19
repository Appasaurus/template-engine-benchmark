var ejs = require("ejs");
var jade = require("jade");
var swig = require("swig");

var people = require("./views/page-with-data-100/data-100.json");

var dataset = {"title":"People Data", "people": people};

exports.compare = {
  "ejs" : function () {
    ejs.render("views/page-with-data-100/index.ejs", dataset);
  },

  "jade" : function () {
    jade.renderFile("views/page-with-data-100/index.jade", dataset);
  },

  "swig" : function () {
    swig.renderFile("views/page-with-data-100/index.swig", dataset);
  }
};

require("bench").runMain()
