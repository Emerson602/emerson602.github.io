"use strict";

var express = require('express');
var router = express.Router();
var Job = require('../models/Job');

//form da rota de envio
router.get('/add', function (req, res) {
  res.render('add');
});

//detalhe da vagas
router.get('/view/:id', function (req, res) {
  return Job.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (job) {
    res.render('view', {
      job: job
    });
  })["catch"](function (error) {
    return console.log(error);
  });
});

//add job via post request
router.post('/add', function (req, res) {
  var _req$body = req.body,
    title = _req$body.title,
    salary = _req$body.salary,
    company = _req$body.company,
    description = _req$body.description,
    email = _req$body.email,
    new_job = _req$body.new_job;

  //insert
  Job.create({
    title: title,
    description: description,
    salary: salary,
    company: company,
    email: email,
    new_job: new_job
  }).then(function () {
    return res.redirect('/');
  })["catch"](function (error) {
    return console.log(error);
  });
});
module.exports = router;