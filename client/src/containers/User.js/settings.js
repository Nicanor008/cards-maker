import React, { Component } from 'react'
import { connect } from 'react-redux'
import './user.css'
import * as Actions from '../../store/actions/user'
import { Loader } from '../../components/common/loader'

class Settings extends Component {
    componentDidMount() {
        const id = localStorage.getItem('anonyId').replace(/['"]+/g, '')
        const { FetchSingleUser } = this.props
        return FetchSingleUser(id)
    }

    render() {
        const { data, loading } = this.props.singleUser
        console.log('>>>>>>>>>>>>>>>>>>>>>........', data)
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
                                <button className="button singleUserDetailsButton">
                                    Delete
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
})

const mapDispatchToProps = {
    FetchSingleUser: Actions.FetchSingleUserRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
