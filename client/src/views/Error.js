import React from "react";
import { Link } from "react-router-dom";

const Error = (props) => {
    return (
        <div className="alert alert-warning mt-4 m-3">
            <p>
                "We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?"
            </p>
            <Link to="/author/create" className="btn btn-outline-primary">
                Create author
            </Link>
        </div>
    );
};

export default Error;
