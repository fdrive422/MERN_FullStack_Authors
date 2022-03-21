import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// components
import AuthorForm from "../components/AuthorForm";

const Create = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = (authorName) => {
        axios
            .post("http://localhost:8000/api/authors", authorName)
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
        <div>
            <h1 className="text-center mt-3">Favorite Authors</h1>
            <Link className="btn btn-outline-primary col-2 offset-5" to="/">
                Home
            </Link>
            <AuthorForm
                name={name}
                setName={setName}
                onSubmitAction={createAuthor}
                action="Add"
                errors={errors}
            />
        </div>
    );
};

export default Create;
