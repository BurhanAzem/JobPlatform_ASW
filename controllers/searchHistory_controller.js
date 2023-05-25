const searchHistoryModel = require("../models/searchHistory");

const jwt = require("jsonwebtoken");

class searchHistory_controller {
  static async register_savedJob(req, res) {
    //try {
    const { jobSeekerID, jobPostID, searchedDate } = req.body;

    var result = await searchHistoryModel.create_savedJob(
      jobSeekerID,
      jobPostID,
      searchedDate
    );

    if (result) {
      res.send(result);
    } else {
      res.send({ message: "empty" });
    }
  }

  static async get_all_savedJobs(req, res) {
    //try {
    const id = parseInt(req.params.id);
    console.log(id);
    var result = await searchHistoryModel.get_savedJobs(id);
<<<<<<< HEAD
    if (result) {
      res.send(result);
    } else {
      res.send({ message: "empty" });
    }
    // var extractedData = result.map((Jobs) => {
    //   return {
    //     ID: Jobs.SearchHistoryID,
    //     JobPostID: Jobs.JobSeekerID,
    //     JobTitle: Jobs.JobTitle,
    //     SearchedDate: Jobs.SearchedDate,
    //   };
    // });

    // if (extractedData) {
    //   res.send(extractedData);
    // } else {
    //   res.send({ message: "empty" });
    // }
=======

    var extractedData = result.map((Jobs) => {
      return {
        ID: Jobs.SearchHistoryID,
        JobPostID: Jobs.JobSeekerID,
        JobTitle: Jobs.JobTitle,
        SearchedDate: Jobs.SearchedDate,
      };
    });

    if (extractedData) {
      res.send(extractedData);
    } else {
      res.send({ message: "empty" });
    }
>>>>>>> 8fcfa5a01c02b26b4e2e44134faade0059426f1f
  }
  static async delete_savedJob(req, res) {
    //try {
    const id = parseInt(req.params.id);
    console.log(id);
    var result = await searchHistoryModel.delete_job(id);

    if (result) {
      res.send(result);
    } else {
      res.send({ message: "empty" });
    }
  }
}
module.exports = searchHistory_controller;
