import array from "./array"

import React from 'react'

export default function profile() {
    return (
<div className="cards" id="cards">
            <div className="container">
                <div className="row">
                    {array.map(({ id, image, text }) => {
                        return (
                            <React.Fragment key={id}>
                                <div className="col-4">
                                    <div>
                                        <img src={image} alt={id} />
                                    </div>
                                    <div>
                                        <p> {text} </p>
                                    </div>
                                </div>

                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
