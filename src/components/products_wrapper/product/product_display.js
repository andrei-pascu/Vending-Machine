import React, { useState } from 'react';

export default function RenderingMachineSlots(props) {
    if (props.products.length !== 0) {
        return (
            <div className="products_container">
                {
                    props.products.map((slots_configuration, index) => {
                        return (
                            <div className={`product_row_item ${(props.products[index].remaining === 0) ? 'product_row_item--empty' : ''}`} key={props.pro}>
                                <h2 className="productCode_label">
                                    CODE {slots_configuration['id']}
                                </h2>
                                <div className="productDetails_container">
                                    <div className="productDetails_img"></div>
                                    <div className="productDetails_price"> ${props.products[index].price} </div>
                                    <div className="productDetails_remaining"> Remaining: {props.products[index].remaining} </div>
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