import React from 'react'
import { SingleCard } from './singleCard'

const SearchCard = (props) => {
    return (
        <div className="searchWrapper">
            <div className="control has-icons-right">
                <input
                    className="input searchInput"
                    type="text"
                    name="searchParameter"
                    placeholder="Search Event Cards"
                    onChange={props.onChangeHandler}
                    onKeyPress={props.onSubmitSearch}
                />
                <span
                    className="icon is-medium is-right searchInputCursor"
                    onKeyPress={props.onSubmitSearch}
                    onClick={props.onSubmitSearch}
                >
                    <i className="fas fa-search searchInputCursor" aria-hidden="true"></i>
                </span>
            </div>

            <div
                style={{
                    backgroundColor: 'wheat',
                    flexWrap: 'wrap',
                    display: `${props.displaySearch ? 'flex' : 'none'}`,
                }}
            >
                {props.data.data !== undefined &&
                    props.data.data.map((card) => (
                        <SingleCard
                            key={card._id}
                            id={card._id}
                            name={card.name}
                            message={card.message}
                            tags={card.tags}
                            border={card.border}
                            backgroundColor={card.backgroundColor}
                            onClickSingleCard={props.onClickSingleCard}
                            modalOpen={props.modalOpen}
                        />
                    ))}
            </div>
        </div>
    )
}

export default SearchCard
