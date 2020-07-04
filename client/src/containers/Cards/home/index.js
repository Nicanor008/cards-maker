import React, { Component } from 'react'
import moment from 'moment'
import { SingleCard } from '../../../components/cards/singleCard'
import { connect } from 'react-redux'
import * as Actions from '../../../store/actions/cards'
import './home.css'
import { Loader } from '../../../components/common/loader'
import SEO from '../../../components/SEO'
import { CreateCardsDescription } from '../../../components/HomePage/createCardsDescription'
import Cards from '../cards'
import Modal from '../../../components/modal'
import SetInnerHTML from '../../../utils/setInnerHTML'
import DecoratedLine from '../../../images/DecoratedLine.svg'
import { NavLink } from 'react-router-dom'

class HomePage extends Component {
    state = {
        modalOpen: false,
    }

    componentDidMount() {
        const { fetchUserCards } = this.props
        return fetchUserCards()
    }

    componentDidUpdate() {
        const { deleteCard } = this.props
        if (
            deleteCard.loading === false &&
            deleteCard.message === 'Event Card has been Deleted Successfully'
        ) {
            setTimeout(() => {
                return (location.href = '/dashboard')
            }, 1200)
        }
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
        const { cards, singleCard, DeleteCardAction } = this.props
        const { loading, data } = cards
        return (
            <>
                <SEO title="Dashboard" />
                {loading ? (
                    <Loader />
                ) : (
                    <div className="container homePageWrapper">
                        {/* <div className="myEventsTopBarWrapper"> */}
                            {/* <div>
                                <p className="title cardEventTitle">
                                    Active Events
                                </p>
                            </div>

                            <div className="myCardsMenu">
                                <NavLink to="/my-events/archive">
                                    My Archived/Past Events
                                </NavLink>
                            </div> */}

                            {/* <SearchCards /> */}
                            {/* <SearchCard
                                onChangeHandler={this.onChangeHandler}
                                onSubmitSearch={this.onSubmitSearch}
                                displaySearch={this.state.displaySearch}
                                data={searchByName}
                                modalOpen={this.state.modalOpen}
                                onClickSingleCard={this.onClickSingleCard}
                                searchParameter={this.state.searchParameter}
                            /> */}
                        {/* </div> */}

                        <div
                            className="column"
                            style={{ display: 'flex', flexWrap: 'wrap' }}
                        >
                            {data !== undefined ? (
                                data.map((card) => (
                                    <div key={card._id}>
                                        {!moment().isSameOrAfter(
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
                                                modalOpen={this.state.modalOpen}
                                                user={card.user.name}
                                                eventDateTime={
                                                    card.eventDateTime
                                                }
                                            />
                                        )}
                                    </div>
                                ))
                            ) : (
                                <>
                                    <CreateCardsDescription
                                        description="You Don't have any events Cards yet. You can proceed to view other cards 
                                                    or search a particular events"
                                    />

                                    <hr />

                                    {/* other peoples card/all cards in DB  */}
                                    <Cards />
                                </>
                            )}
                        </div>

                        {/* on click single card */}
                        {singleCard.data !== undefined && (
                            <Modal
                                show={this.state.modalOpen}
                                handleClose={this.hideModal}
                                loading={singleCard.loading}
                                isAuth={true}
                                onClickDelete={DeleteCardAction}
                                card={singleCard.data}
                                id={singleCard.data._id}
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
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.userCards,
    singleCard: state.singleCard,
    deleteCard: state.deleteCard,
})

const mapDispatchToProps = {
    fetchUserCards: Actions.FetchUserCardsRequest,
    FetchSingleCard: Actions.FetchSingleCardRequest,
    DeleteCardAction: Actions.DeleteCardRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
