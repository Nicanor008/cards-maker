// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { CheckBoxComponent } from '../../components/common/input'
// import * as Actions from '../../store/actions/searchCards'
// import { Loader } from '../../components/common/loader'
// import { SingleCard } from '../../components/cards/singleCard'

// class SearchCards extends Component {
//     state = {
//         searchParameter: ''
//     }

//     onChangeHandler = (e) => {
//         const selectedName = e.target.name
//         return this.setState({
//             [selectedName]: e.target.value,
//         })
//     }

//     onSubmitSearch = (e) => {
//         if (e.which === 13) {
//             const { searchParameter, tagCheckBox } = this.state
//             const { searchByNameAction, searchByTagAction } = this.props
//             return searchByNameAction(searchParameter)
//         }
//     }

//     render() {
//         const { searchByName } = this.props
//         return (
//             <div style={{display:'block', paddingRight: '3rem'}}>
//             <div className="searchWrapper">
//                 {(searchByName.loading) && <Loader />}
//                 <div className="control">
//                     <input
//                         className="input searchInput"
//                         type="text"
//                         name="searchParameter"
//                         placeholder="Search Event Cards"
//                         onChange={this.onChangeHandler}
//                         onKeyPress={this.onSubmitSearch}
//                     />
//                     <span
//                         className="icon is-medium is-right searchInputCursor"
//                         onKeyPress={this.onSubmitSearch}
//                         onClick={this.onSubmitSearch}
//                     >
//                         <i className="fas fa-search searchInputCursor"  aria-hidden="true"></i>
//                     </span>
//                 </div>

                
//             </div>
//             {/* search results */}
//             <div style={{ backgroundColor: 'black' }}>
//                     {searchByName.data !== undefined &&
//                         searchByName.data.map((card) => {
//                             <SingleCard
//                                 key={card._id}
//                                 name={card.name}
//                                 message={card.message}
//                             />
//                         })}
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     searchByName: state.searchByName,
// })

// const mapDispatchToProps = {
//     searchByNameAction: Actions.SearchCardsByNameRequest,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SearchCards)
