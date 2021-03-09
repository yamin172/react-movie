import { Button, Container } from "react-bootstrap";
import React from 'react';
import {Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovies = (props) => {
    const {id, title, poster_path} = props.movie;
    return (
        <div className="col-md-4 my-3">
            <Card className="p-1 shadow" style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
            />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{title}</Card.Title>
                    <Button as={Link} to={`/movie/${id}`} variant="primary">View Details</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleMovies;