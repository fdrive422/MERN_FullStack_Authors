import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import AuthorForm from "../components/AuthorForm";

const Edit = (props) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
                navigate("/author/edit/error")
            });
    }, []);

    const updateAuthor = (name) => {
        axios
            .put(`http://localhost:8000/api/authors/${id}`, name)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div className="bg-light">
            <h2 className="text-center mt-3">Favorite Authors</h2>
            <Link className="btn btn-outline-primary col-2 offset-5" to="/">
                Home
            </Link>
            <AuthorForm
                name={name}
                setName={setName}
                onSubmitAction={updateAuthor}
                action="Edit this"
                errors={errors}
            />
        </div>
    );
};

export default Edit;
