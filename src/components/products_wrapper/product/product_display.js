
import React, { useState } from 'react';
import { useSelector } from 'react-redux';




// //asta fac sloturile masinii
export default function RenderingMachineSlots(props) {
    // const [slots_caller, setSlot] = useState( () => slots_builder(10));

    // function slots_builder(items) {
    //     let slots = [];
    //     for (let i = 1; i < items+1; i++) {
    //         slots.push(i)
    //     }
    //     console.warn(slots)
    //     return slots
    // }


// sa iau the PRODUCTS slice
// 


        if (props.products.length !== 0) {
            return (
                <div className="products_container"> 
                    {
                        props.products.map( (slots_configuration, index) => {
                            console.warn(props)
                                console.warn('else', index)
                                return (
                                    <div className={`product_row_item ${(props.products[index].remaining === 0) ? 'product_row_item--empty': ''}`} key={props.pro}>
                                        <h2 className="productCode_label">
                                            CODE { slots_configuration['id'] }
                                        </h2>
                                        <div className="productDetails_container">
                                            <div className="productDetails_img"></div>
                                            <div className="productDetails_price"> ${ props.products[index].price } </div>
                                            {/* {props.products[index].remaining === 0 
                                                ? <div className="productDetails_remaining remaining_none"> Remaining: { props.products[index].remaining  } </div>
                                                : 
                                            } */}
                                            <div className="productDetails_remaining"> Remaining: { props.products[index].remaining  } </div>
                                        </div>
                                    </div>
                                )

                        })
                    }
                </div>
            )
        } else {
            return (
                <div className="products_container products_container-spinner">
                    <div className="spinner-c">
                        <div className="spinner-e spinner-left">
                        </div>
                        <div className="spinner-e spinner-right">
                        </div>
                    </div>
                </div>
            )
        }
    }



// import React, { Component } from 'react';
// import { connect } from 'react-redux';


// class RenderingMachineSlots extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {

//         if (this.props.products.length !== 0) {
            // return (
            //     <div className="products_container"> 
            //         {
            //             this.props.products.map( (slots_configuration, index) => {
            //                 console.warn(this.props)
            //                     console.warn('else', index)
            //                     return (
            //                         <div className="product_row_item" key={this.props.pro}>
            //                             <h2 className="productCode_label">
            //                                 Code: { slots_configuration['id'] }
            //                             </h2>
            //                             <div className="productDetails_container">
            //                                 <div className="productDetails_img"> { this.props.products[index].img   } </div>
            //                                 <div className="productDetails_price"> ${ this.props.products[index].price } </div>
            //                                 <div className="productDetails_remaining"> Remaining: { this.props.products[index].remaining  } </div>
            //                             </div>
            //                         </div>
            //                     )

            //             })
            //         }
            //     </div>
            // )
//         } else {
//             return (
//                 <div>
//                     ...Loading
//                 </div>
//             )
//         }
//     }
// }

// const mapStateToProps = (state, ownProps = {}) =>  (
//     {
//         credit: state.credit,
//         enteredCode: state.enteredCode
//     }
// );


// //   mapDispatchToProps
// export default connect(mapStateToProps)(RenderingMachineSlots)











// const mapStateToProps = (state, ownProps = {}) =>  (
//     {
//         credit: state.credit,
//         enteredCode: state.enteredCode
//     }
// );
