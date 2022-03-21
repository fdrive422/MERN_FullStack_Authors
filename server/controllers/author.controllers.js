const Author = require("../models/author.model");

module.exports = {
    findAllAuthors: (req, res) => {
        Author.find()
            .collation({ locale: "en", strength: 2 })
            .sort({ name: 1 })
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err) => {
                console.log("Find All failed");
                res.status(400).json(err);
            });
    },

    findOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((oneAuthor) => {
                console.log(oneAuthor);
                res.json(oneAuthor);
            })
            .catch((err) => {
                console.log("Find One failed");
                res.status(400).json(err);
            });
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newlyCreatedAuthor) => {
                console.log(newlyCreatedAuthor);
                res.json(newlyCreatedAuthor);
            })
            .catch((err) => {
                console.log("Create failed");
                res.status(400).json(err);
            });
    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedAuthor) => {
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err) => {
                console.log("Update failed");
                res.status(400).json(err);
            });
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((result) => {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                console.log("Delete failed");
                res.status(400).json(err);
            });
    },
};
