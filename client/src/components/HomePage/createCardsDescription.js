import React from 'react'
import { Link } from 'react-router-dom'
import Wedding from '../../images/Wedding.svg'

export const CreateCardsDescription = (props) => {
    return (
        <div className="container columns" style={{width: `100%`}}>
            <div className="column imageWedding">
                <figure className="image is-3by1">
                    <img alt="Wedding people" src={Wedding} />
                </figure>
            </div>
            <div className="column">
                <p className="rowTextContent rowDescriptionText">
                    {props.description}
                    <br />
                    <br />
                    <Link to="/create">
                        <button className="button is-danger">
                            Create Cards
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    )
}
