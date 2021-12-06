import array from "./array"
import React from 'react'
import { Card } from "react-bootstrap"
import ReactStars from 'react-stars'
import "../client_review/style.scss"

export default function profile_review() {
    return (
        <div className="comment">
            <p>Review ({array.length})</p>
            <div >
                {array.map(({ id, image, content, name, time }) => {
                    return (
                        <React.Fragment key={id}>
                            <Card style={{ border: "transparent" }}>
                                <Card.Body className="user_div">
                                    <Card.Img  variant="top" src={image} className="profile_image" />
                                    <Card.Title className="name">{name}</Card.Title>
                                    <Card.Text className="time">{time}</Card.Text>
                                    <ReactStars className="star"
                                        count={5}
                                        size={20}
                                        color2={'#ffd700'} />
                                    <Card.Text className="content">
                                        {content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}
