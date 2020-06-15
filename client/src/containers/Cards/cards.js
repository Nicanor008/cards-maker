import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    FetchCardsRequest,
    FetchSingleCardRequest,
} from '../../store/actions/cards'
import { Loader } from '../../components/common/loader'
import { SingleCard } from '../../components/cards/singleCard'
import './cards.css'
import SearchCards from './searchCards'
import Modal from '../../components/modal'
import SetInnerHTML from '../../utils/setInnerHTML'
import DecoratedLine from '../../images/DecoratedLine.svg'

class Cards extends Component {
    state = {
        modalOpen: false,
    }
    componentDidMount() {
        const { FetchAllCards } = this.props
        return FetchAllCards()
    }

    showModal = () => {
        this.setState({ modalOpen: true })
    }

    hideModal = () => {
        this.setState({ modalOpen: false })
    }

    onClickSingleCard = (id) => {
        const { FetchSingleCard } = this.props
        this.setState({ modalOpen: true })
        return FetchSingleCard(id)
    }

    render() {
        const { loading, data } = this.props.cards
        const { singleCard } = this.props
        return (
            <div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="allCardsWrapper">
                        <div className="searchWrapper">
                            <SearchCards />
                        </div>
                        <hr className="horizontalLine" />
                        <div className="cardsWrapper">
                            {data !== undefined &&
                                data.map((card) => (
                                    <SingleCard
                                        key={card._id}
                                        id={card._id}
                                        name={card.name}
                                        message={card.message}
                                        tags={card.tags}
                                        border={card.border}
                                        backgroundColor={card.backgroundColor}
                                        onClickSingleCard={
                                            this.onClickSingleCard
                                        }
                                        modalOpen={this.state.modalOpen}
                                    />
                                ))}
                        </div>

                        {/* on click single card */}
                        {singleCard.data !== undefined && (
                            <Modal
                                show={this.state.modalOpen}
                                handleClose={this.hideModal}
                                loading={singleCard.loading}
                            >
                                <div
                                    style={{
                                        border: `${singleCard.data.borderWidth} ${singleCard.data.border} ${singleCard.data.borderColor}`,
                                        margin: '1rem',
                                        borderRadius: '2px',
                                        padding: '2rem',
                                        backgroundColor: `${singleCard.data.backgroundColor}`,
                                    }}
                                >
                                    <center>
                                        {SetInnerHTML(singleCard.data.name)}
                                        <img
                                            src={DecoratedLine}
                                            alt="Horizontal line"
                                        />
                                        {SetInnerHTML(singleCard.data.message)}
                                    </center>
                                </div>
                            </Modal>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.fetchAllCards,
    singleCard: state.singleCard,
})

const mapDispatchToProps = {
    FetchAllCards: FetchCardsRequest,
    FetchSingleCard: FetchSingleCardRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
