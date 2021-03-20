import React from 'react';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

const NewsCard = ({ author, title, description, url, urlToImage, publishedAt }) => {
    return (
        <div >
            <Card style={{ width: '18rem' , padding:"1rem"}}>
                <Card.Title style={{ height: '5em' }} className="overflow-auto">{title}</Card.Title>
                <Card.Img variant="top" src={urlToImage} style={{objectFit:"cover"}} height="250" width="15rem" />
                <Card.Body>
                    <Card.Text style={{ height: '9em'}} className="overflow-auto">
                        {description}
                    </Card.Text>
                    <footer className="blockquote-footer" style={{ height: '2em' }}>
                        <small className="text-muted">
                            by {author} <cite title="Source Title">time {publishedAt}</cite>
                        </small>
                    </footer>
                    <Nav.Item>
                        <Nav.Link href={url}>Link</Nav.Link>
                    </Nav.Item>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NewsCard;