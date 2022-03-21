import React from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'

const AuthorList = (props) => {
    const { authors, deleteAuthor } = props;

    return (
        <div>
            <Container className="border border-dark rounded mt-3">
                <table className="table table-striped table-hover my-2" >
                    <thead>
                        <tr>
                            <th>Authors:</th>
                            <th>Available Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author, index) => (
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td>
                                    <Link className="btn btn-outline-primary" to={`/author/edit/${author._id}`} > Edit</Link>
                                    &nbsp;
                                    <button className="btn btn-outline-primary" onClick={() => deleteAuthor(author._id)} > Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div >
    )
};

export default AuthorList;

