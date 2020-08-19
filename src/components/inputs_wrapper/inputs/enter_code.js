import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addDigits,
    removeDigit,
    selectCode
} from '../../../my_redux/reducers/enteredCodeSlice';
import {
    storeProducts,
    buyProduct,
    select_storedProducts
} from '../../../my_redux/reducers/productsSlice';
import {
    decrementByAmount,
    selectCount
} from '../../../my_redux/reducers/creditSlice';
import {
    triggerError,
    selectError
} from '../../../my_redux/reducers/errorsSlice';






export default function EnterCode() {
    const count = useSelector(selectCode);
    const local_selectProducts = useSelector(select_storedProducts);
    const local_selectCredit = useSelector(selectCount);
    const local_error_code = useSelector(selectError);
    const dispatch = useDispatch();
    const digits = [7,8,9,4,5,6,1,2,3,0];

    const action1 = (code, sum) => {
        return dispatch => {
            dispatch(buyProduct(code))
            dispatch(decrementByAmount(sum))
        }
    }

        
    const [error_code, setErr_Code] = useState( () => 0);


    function dispatchChecker() {
        let currentProduct = local_selectProducts.find(o=>o.id === Number(count));
        setErr_Code(0);
        dispatch( triggerError(0) )

        // check code
        if ( currentProduct !== undefined) {
            setErr_Code(0);

            // check availible
            if ( currentProduct.remaining > 0 ) {
                setErr_Code(0);

                // check credit
                if ( (local_selectCredit - currentProduct.price) >= 0 ) {
                    setErr_Code(0);

                    dispatch( action1(count, local_selectProducts.find(o=>o.id === Number(count)).price  ) )
                } else {
                    setTimeout(function(){ dispatch( triggerError(3) ); }, 0)
                }
            } else {
                setTimeout(function(){ dispatch( triggerError(2) ); }, 0)
            }
        } else {
            setTimeout(function(){ dispatch( triggerError(1) ); }, 0)
        }
    }


    
  

        
    return (
        <div>
            <div className="display_container">
                <h2 className={`displayed_code ${(local_error_code === 1) ? 'red_fade':''}`}>
                    {count}
                </h2>
                <h3>Enter Product Code</h3>
            </div>
            <div className="digits_container">
                <div className="digits_wrapper">
                    {
                        digits.map( (element, index) => 
                            <div className="digit_wrapper"  onClick={() => dispatch(addDigits(`${element}`))} key={index}>
                                <span className="digit_shape">
                                    {element}
                                </span>
                            </div>
                        )
                    }

                </div>
                <div className="digit_inputs_container">
                    <div className="input_digit"  onClick={() => dispatch(removeDigit())} > 
                        <span className="" >DEL</span> 
                    </div>
                    <div className={`input_digit ${(local_error_code === 2) ? 'red_fade_2':''}`} onClick={() => dispatchChecker()}> 
                        <span>Ok</span> 
                    </div>
                </div>
            </div>
        </div>
    );
}