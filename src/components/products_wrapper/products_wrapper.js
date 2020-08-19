import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    storeProducts,
    select_storedProducts
} from '../../my_redux/reducers/productsSlice';

import RenderingMachineSlots from './product/product_display';

// would be from a request
const mockData = [
    {
        'id': 10,
        'img': 'url',
        'price': 10,
        'remaining': 20,
    },
    {
        'id': 20,
        'img': 'url',
        'price': 15,
        'remaining': 7,
    },
    {
        'id': 30,
        'img': 'url',
        'price': 100,
        'remaining': 9,
    },
    {
        'id': 40,
        'img': 'url',
        'price': 5,
        'remaining': 2,
    },
    {
        'id': 50,
        'img': 'url',
        'price': 5,
        'remaining': 7,
    },
    {
        'id': 60,
        'img': 'url',
        'price': 10,
        'remaining': 11,
    },
    {
        'id': 70,
        'img': 'url',
        'price': 15,
        'remaining': 2,
    }
]



export default function ProductsWrapper() {
 
    const local_selectProducts = useSelector(select_storedProducts); //iei statu
    const dispatch = useDispatch();
    const [product_request, setProduct] = useState( () => setTheState());


    

function setTheState() {
    setTimeout(() => {
        dispatch( storeProducts(mockData)) //din request faci dispatch asta practic
    }, 4700)

    return local_selectProducts

}



// This would be an external API call
// fetchProducts() {
    // return dispatch => {
    //     dispatch(fetchProductsPending());
    //     fetch('https://exampleapi.com/products')
    //     .then(res => res.json())
    //     .then(res => {
    //         if(res.error) {
    //             throw(res.error);
    //         }
    //         dispatch(fetchProductsSuccess(res.products);
    //         return res.products;
    //     })
    //     .catch(error => {
    //         dispatch(fetchProductsError(error));
    //     })
    // }
// }
// .
// .
// .
// but here we are using mocks
    return (
        <div className="products_wrapper">
            <RenderingMachineSlots products={local_selectProducts}></RenderingMachineSlots>

        </div>
    )
}