import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthorList from "../components/AuthorList";

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // logic to delete in author from AuthorList
    const removeFromDom = (authorID) => {
        setAuthors(authors.filter((author) => author._id !== authorID));
    };

    const deleteAuthor = (authorID) => {
        axios
            .delete(`http://localhost:8000/api/authors/${authorID}`)
            .then((res) => {
                console.log(res.data);
                removeFromDom(authorID);
            });
    };

    return (
        <div className="col">
            <h1 className="text-center mt-3">Favorite Authors</h1>
            <Link className="btn btn-outline-primary col-2 offset-5" to="/author/create">
                Add Author
            </Link>
            {loaded && (
                <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
            )}
        </div>
    );
};

export default Main;
