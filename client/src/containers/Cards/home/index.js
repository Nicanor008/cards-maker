import React, { Component } from 'react'
import { SingleCard } from '../../../components/cards/singleCard'
import { connect } from 'react-redux'
import * as Actions from '../../../store/actions/cards'
import './home.css'
import { Loader } from '../../../components/common/loader'
import SEO from '../../../components/SEO'
import { CreateCardsDescription } from '../../../components/HomePage/createCardsDescription'

class HomePage extends Component {
    componentDidMount() {
        const { fetchUserCards } = this.props
        return fetchUserCards()
    }

    render() {
        const { cards } = this.props
        const { loading, data } = cards
        return (
            <>
                <SEO title="Dashboard" />
                {loading ? (
                    <Loader />
                ) : (
                    <div className="container homePageWrapper">
                        {/* search your card here */}
                        <div
                            className="column"
                            style={{ display: 'flex', flexWrap: 'wrap' }}
                        >
                            {data !== undefined ? (
                                data.map((card) => (
                                    <SingleCard
                                        key={card._id}
                                        name={card.name}
                                        message={card.message}
                                        tags={card.tags}
                                    />
                                ))
                            ) : (
                                <>
                                    <CreateCardsDescription 
                                        description="You Don't have any events Cards yet. You can proceed to view other cards 
                                                    or search a particular events" 
                                                    />


                                    {/* other peoples card/all cards in DB  */}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => ({ cards: state.userCards })

const mapDispatchToProps = {
    fetchUserCards: Actions.FetchUserCardsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
