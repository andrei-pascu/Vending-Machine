import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
  resetValue,
  selectCount
} from '../../../my_redux/reducers/creditSlice';
import {
    selectError
} from '../../../my_redux/reducers/errorsSlice';

export default function EnterCredit() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const local_error_code = useSelector(selectError);
  
    return (
        <div className="credit_container">
            <div className="machine_cash_container">
                <div className="machine_cash_label_container">
                    <span className="machine_cash_label">CREDIT:</span>
                    <span className={`machine_cash_display ${(local_error_code === 3) ? 'red_fade':''}`}> {count}</span>
                </div>
                <p>Insert Cash</p>
                <div className="insert_cash_container">
                    <div className="insert_cash_element"></div>
                </div>
            </div>
            <div className={`add_cash_container`}>
                <div className="add_cash">
                    <p className="add_cash_input" onClick={() => dispatch(incrementByAmount(5))}>$5</p>
                    <p className="add_cash_input" onClick={() => dispatch(incrementByAmount(10))}>$10</p>
                    <p className="add_cash_input" onClick={() => dispatch(incrementByAmount(10))}>$20</p>
                    <p className="add_cash_input add_cash_input_reset" onClick={() => dispatch(resetValue())}>Reset</p>
                </div>
                <div className="add_cash">
                </div>

            </div>
        </div>
    );
  }

