import React from 'react'
import SetInnerHTML from '../../utils/setInnerHTML'
import HR from '../../images/DecoratedLine.svg'
import moment from 'moment'

export const SingleCard = (props) => {
    return (
        <div
            className={
                props.isFeatured ? `isFeaturedSingleCard` : `singleCardWrapper`
            }
            style={{
                border: props.border,
                backgroundColor: props.backgroundColor,
                cursor: 'pointer',
            }}
            onClick={() => props.onClickSingleCard(props.id)}
        >
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="subtitle is-6 dateDisplay">
                            {props.user && props.user}
                        </p>
                        <div onClick={props.onViewModal}>
                            {SetInnerHTML(props.name)}
                            {props.message !== null && (
                                <i
                                    className="fas fa-share-alt cardShareIcon"
                                    aria-hidden="true"
                                ></i>
                            )}
                        </div>
                        <p className="subtitle is-6 dateDisplay">
                            {props.eventDateTime
                                ? moment(props.eventDateTime).format('llll')
                                : props.eventDateTime}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <br />
                    {SetInnerHTML(props.message.substr(0, 90))}
                    <img src={HR} alt="hr" />
                    <div className="cardTags">
                        {props.tags !== undefined &&
                            props.tags.map((tag) => (
                                <span
                                    className="singleCardTagItem"
                                    key={Math.random()}
                                >
                                    {tag}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
