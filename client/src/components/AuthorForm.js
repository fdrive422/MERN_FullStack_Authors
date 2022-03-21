import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
    const { name, setName, onSubmitAction, action, errors } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitAction({ name });
    };

    return (
        <div className="border rounded p-2 m-5 bg-light">
            <h2 className="text-center">{action} an author</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    {errors.name ? (
                        <div className="alert alert-danger my-1">
                            {errors.name.message}
                        </div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-outline-primary mx-2"> Submit </button>
                <Link className="btn btn-outline-primary" to="/"> Cancel </Link>
            </form>
        </div>
    );
};

export default AuthorForm;
