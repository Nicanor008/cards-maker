import React, { Component } from 'react'
import { connect } from 'react-redux'
import './user.css'
import * as Actions from '../../store/actions/user'
import { Loader } from '../../components/common/loader'
import '../../components/modal/modal.css'

class Settings extends Component {
    state = {
        id: localStorage.getItem('anonyId').replace(/['"]+/g, ''),
    }
    componentDidMount() {
        const { FetchSingleUser } = this.props
        return FetchSingleUser(this.state.id)
    }

    componentDidUpdate() {
        const { deactivateUser, deleteUser } = this.props
        if (
            deactivateUser.message === 'Account has been deactivated' ||
            deleteUser.message === 'Account has been deleted'
        ) {
            localStorage.removeItem('token')
            localStorage.removeItem('anonyId')
            window.location.assign('/')
        }
    }

    deleteUser = () => {
        const { DeleteUser } = this.props
        return DeleteUser(this.state.id)
    }

    render() {
        const { data, loading } = this.props.singleUser
        const { DeactivateUser, DeleteUser } = this.props
        return (
            <div className="container columns">
                {loading ? (
                    <Loader />
                ) : (
                    data !== undefined && (
                        <>
                            <div className="column">
                                <div className="userDetailsSettings">
                                    <div className="singleUserDetails">
                                        <label
                                            className="singleUserDetailsLabel"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <br />
                                        {data.name}
                                    </div>
                                    <div className="singleUserDetails">
                                        <label
                                            className="singleUserDetailsLabel"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <br />
                                        {data.email}
                                    </div>
                                </div>
                                <button
                                    className="button singleUserDetailsButton"
                                    onClick={() =>
                                        DeactivateUser(this.state.id)
                                    }
                                >
                                    De-Activate Account
                                </button>
                                <button
                                    className="button singleUserDetailsButton"
                                    onClick={() => DeleteUser(this.state.id)}
                                >
                                    Delete Account
                                </button>
                            </div>

                            <div className="column">
                                <div className="column textDescWrapper">
                                    <p
                                        className="title is-5"
                                        style={{ color: 'grey' }}
                                    >
                                        Feature in Development
                                    </p>
                                    <div className="content">
                                        <ul type="1">
                                            <li>Analytics on your account. </li>
                                            <li>Update your account. </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    singleUser: state.fetchSingleUser,
    deactivateUser: state.deactivateUser,
    deleteUser: state.deleteUser,
})

const mapDispatchToProps = {
    FetchSingleUser: Actions.FetchSingleUserRequest,
    DeactivateUser: Actions.DeactivateSingleUserRequest,
    DeleteUser: Actions.DeleteSingleUserRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
