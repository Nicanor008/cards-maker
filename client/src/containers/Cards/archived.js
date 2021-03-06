import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {
    FetchCardsRequest,
    FetchSingleCardRequest,
} from '../../store/actions/cards'
import * as Actions from '../../store/actions/searchCards'
import { Loader } from '../../components/common/loader'
import { SingleCard } from '../../components/cards/singleCard'
import './cards.css'
import Modal from '../../components/modal'
import SetInnerHTML from '../../utils/setInnerHTML'
import DecoratedLine from '../../images/DecoratedLine.svg'
import SearchCard from '../../components/cards/searchCard'
import { NavLink } from 'react-router-dom'

class AllArchivedCards extends Component {
    state = {
        modalOpen: false,
        searchParameter: '',
        displaySearch: false,
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

    onChangeHandler = (e) => {
        const selectedName = e.target.name
        if (e.target.value === '') {
            this.setState({ displaySearch: false })
        } else {
            this.setState({ displaySearch: true })
        }
        this.setState({
            [selectedName]: e.target.value,
        })

        // search cards
        const { searchParameter } = this.state
        const { searchByNameAction } = this.props
        setTimeout(() => {
            return searchByNameAction(searchParameter)
        }, 5000)
    }

    onSubmitSearch = (e) => {
        if (e.which === 13) {
            const { searchParameter } = this.state
            const { searchByNameAction } = this.props
            this.setState({ displaySearch: true })
            return searchByNameAction(searchParameter)
        }
    }

    render() {
        const { loading, data } = this.props.cards
        const { singleCard, searchByName } = this.props
        return (
            <div>
                {loading ? (
                    <Loader />
                ) : (
                    <div>
                        <div className="allCardsWrapper">
                            <div className="eventsTopBarWrapper">
                                {/* back to all events menu */}
                                <div className="cardsMenu">
                                    <NavLink to="/events">Go Back</NavLink>
                                </div>

                                {/* <SearchCards /> */}
                                <div className="titleWithSearchEvents">
                                    <p className="title cardEventTitle">
                                        Archived Events
                                    </p>
                                    {data !== undefined && (
                                        <SearchCard
                                            onChangeHandler={
                                                this.onChangeHandler
                                            }
                                            onSubmitSearch={this.onSubmitSearch}
                                            displaySearch={
                                                this.state.displaySearch
                                            }
                                            data={searchByName}
                                            modalOpen={this.state.modalOpen}
                                            onClickSingleCard={
                                                this.onClickSingleCard
                                            }
                                            searchParameter={
                                                this.state.searchParameter
                                            }
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="cardsWrapper">
                                {data !== undefined &&
                                    data.map((card) => (
                                        <div key={card._id}>
                                            {moment().isSameOrAfter(
                                                card.eventDateTime
                                            ) && (
                                                <SingleCard
                                                    key={card._id}
                                                    id={card._id}
                                                    name={card.name}
                                                    message={card.message}
                                                    tags={card.tags}
                                                    border={card.border}
                                                    backgroundColor={
                                                        card.backgroundColor
                                                    }
                                                    onClickSingleCard={
                                                        this.onClickSingleCard
                                                    }
                                                    modalOpen={
                                                        this.state.modalOpen
                                                    }
                                                    user={
                                                        card.user &&
                                                        card.user.name
                                                    }
                                                    eventDateTime={
                                                        card.eventDateTime
                                                            ? card.eventDateTime
                                                            : ''
                                                    }
                                                />
                                            )}
                                        </div>
                                    ))}
                            </div>

                            {data === undefined && (
                                <div>
                                    <center>
                                        <h2 className="title">
                                            No Past Events Available
                                        </h2>
                                    </center>
                                    <br />
                                </div>
                            )}
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
                                        border: `${singleCard.data.border}`,
                                        margin: '1rem',
                                        borderRadius: '2px',
                                        padding: '2rem',
                                        backgroundColor: `${singleCard.data.backgroundColor}`,
                                    }}
                                >
                                    <span className="eventDateTimeWrapper">
                                        <p className="subtitle is-6 dateDisplay">
                                            {singleCard.data.eventDateTime &&
                                                moment(
                                                    singleCard.data
                                                        .eventDateTime
                                                ).format('dddd, MMMM Do YYYY')}
                                        </p>
                                        <u>
                                            <b>
                                                {singleCard.data
                                                    .eventDateTime &&
                                                    moment(
                                                        singleCard.data
                                                            .eventDateTime
                                                    ).fromNow()}
                                            </b>
                                        </u>
                                        <p className="subtitle is-6 dateDisplay">
                                            {singleCard.data.eventDateTime &&
                                                moment(
                                                    singleCard.data
                                                        .eventDateTime
                                                ).format('hh:mm a')}
                                        </p>
                                    </span>
                                    <center>
                                        {SetInnerHTML(singleCard.data.name)}
                                        <img
                                            src={DecoratedLine}
                                            alt="Horizontal line"
                                        />
                                    </center>
                                    {SetInnerHTML(singleCard.data.message)}
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
    searchByName: state.searchByName,
})

const mapDispatchToProps = {
    FetchAllCards: FetchCardsRequest,
    FetchSingleCard: FetchSingleCardRequest,
    searchByNameAction: Actions.SearchCardsByNameRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllArchivedCards)
