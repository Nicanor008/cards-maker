import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/cards'
import { Loader } from '../../components/common/loader'
import { SingleCard } from '../../components/cards/singleCard'
import './cards.css'
import SearchCards from './searchCards'

class Cards extends Component {
    componentDidMount() {
        const { FetchAllCards } = this.props
        return FetchAllCards()
    }

    render() {
        const { loading, data } = this.props.cards
        return (
            <div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="allCardsWrapper">
                        <div className="searchWrapper">
                            <SearchCards />
                        </div>
                        <div className="cardsWrapper">
                            {data !== undefined &&
                                data.map((card) => (
                                    <SingleCard
                                        key={card._id}
                                        name={card.name}
                                        message={card.message}
                                        tags={card.tags}
                                        border={card.border}
                                        backgroundColor={card.backgroundColor}
                                    />
                                ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ cards: state.fetchAllCards })

const mapDispatchToProps = {
    FetchAllCards: Actions.FetchCardsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
