import React from 'react'
import SetInnerHTML from '../../utils/setInnerHTML'
import HR from '../../images/DecoratedLine.svg'
import moment from 'moment'
import ShareButton from './shareButton'

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
        >
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="subtitle is-6 dateDisplay">
                            {props.user && props.user}
                        </p>
                        <div onClick={props.onViewModal}>
                            <div
                                onClick={() =>
                                    props.onClickSingleCard(props.id)
                                }
                            >
                                {SetInnerHTML(props.name.substr(0, 30))}
                            </div>
                            {props.message !== null && <ShareButton id={props.id}/>}
                        </div>
                        <p
                            className="subtitle is-6 dateDisplay"
                            onClick={() => props.onClickSingleCard(props.id)}
                        >
                            {props.eventDateTime
                                ? moment(props.eventDateTime).format('llll')
                                : props.eventDateTime}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <br />
                    <div onClick={() => props.onClickSingleCard(props.id)}>
                        {SetInnerHTML(props.message.substr(0, 90))}
                    </div>
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
