var ejs = require("ejs");
var jade = require("jade");
var swig = require("swig");
var fs = require("fs");

file = fs.readFileSync(__dirname + "/views/includes/index.ejs");

exports.compare = {
  "ejs": function() {
    ejs.render(ejsFile);
  },

  "jade": function() {
    jade.renderFile("views/includes/index.jade");
  },

  "swig": function() {
    swig.renderFile("views/includes/index.swig");
  }
};

require("bench").runMain()
