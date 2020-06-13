import React from 'react'
import SetInnerHTML from '../../utils/setInnerHTML'
import HR from '../../images/DecoratedLine.svg'

export const SingleCard = (props) => {
    return (
        <div
            className="singleCardWrapper"
            style={{
                border: props.border,
                backgroundColor: props.backgroundColor,
            }}
        >
        {/* {console.log(props.backgroundColor, ">>>>>>....border.......", props.border)} */}
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <div>
                            {SetInnerHTML(props.name)}
                            {props.message !== null && (
                                <i className="fas fa-share-alt cardShareIcon"></i>
                            )}
                        </div>
                        <p className="subtitle is-6 dateDisplay">@date</p>
                    </div>
                </div>
                <div className="content">
                    <br />
                    {SetInnerHTML(props.message.substr(3, 90))}
                    <img src={HR} alt="hr" />
                    <div className="cardTags">
                        {props.tags.map((tag) => (
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
