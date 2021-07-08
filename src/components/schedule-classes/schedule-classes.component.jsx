import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cart/cart.actions'
import { bookClass, canceBooklClass } from '../../redux/classes/classes.actions'
import {generateRandomNumber} from '../../utils'
import './schedule-classes.component.css';

const ScheduleClasses = ({ classes, cartTotalItem, addClassToCart, bookClass, canceBooklClass, removeClassFromCart }) => {

    const [timer, setTimer] = useState(generateRandomNumber(30, 60));

    useEffect(() => {

        setTimeout(() => {
            if(timer > 0) {
                setTimer(timer - 1)
            }
        }, 1000);
    }, [timer])

    return (
        <div className="schedule-classes">
            {`Time-Left: ${timer} seconds`}
            <h1 style={{color:'orange'}}> Claim Your Free Trial Class</h1>
            <h2 style={{color:'blue',marginBottom:-50}}>Class Schedule</h2>
            <h3 style={{marginLeft:1200}}>Free seats left:7</h3>
            <table> 
                <thead >
                    <tr >
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Availability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody style={{borderRadius:2}}>
                    {classes.map((c) => {
                        return <tr key={c.id}>
                            <td>{c.name}</td>
                            <th>{c.startDate}</th>
                            <th>{`${c.startTime} - ${c.endTime}`}</th>
                            <th>{c.availableSeats}</th>
                            <th>
                                {
                                    c.availableSeats > 0 ? c.booked ?
                                        <button onClick={
                                            () => {
                                                removeClassFromCart(c.id)
                                                canceBooklClass(c.id)
                                            }
                                        }>
                                            Cancel
                                        </button>
                                        : <button  onClick={
                                            () => {
                                                if (cartTotalItem < 3) {
                                                    addClassToCart(c)
                                                    bookClass(c.id)
                                                } else {
                                                    alert('Maximum you can add 3 items to cart')
                                                }
                                            } 
                                        } >Book Now</button>
                                        : <button style={{backgroundColor:'brown'}}>full</button>
                                }

                            </th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    cartTotalItem: state.cart.items.length,
    classes: state.classes.data
})

const mapDispatchToProps = dispatch => ({
    addClassToCart: item => dispatch(addToCart(item)),
    removeClassFromCart: id => dispatch(removeFromCart(id)),
    bookClass: id => dispatch(bookClass(id)),
    canceBooklClass: id => dispatch(canceBooklClass(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleClasses);