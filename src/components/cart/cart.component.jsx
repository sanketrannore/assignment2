import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/cart/cart.actions'
import { canceBooklClass } from '../../redux/classes/classes.actions'

const Cart = ({ cartItems, removeClassFromCart, canceBooklClass }) => {

    return (
        <div className="cart">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Availability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((c) => {
                        return <tr key={c.id}>
                            <th>{c.name}</th>
                            <th>{c.startDate}</th>
                            <th>{`${c.startTime} ${c.endTime}`}</th>
                            <th>{c.availableSeats}</th>
                            <th>
                                <button onClick={
                                    () => {
                                        removeClassFromCart(c.id)
                                        canceBooklClass(c.id)
                                    }
                                }>
                                    Cancel
                                </button>

                            </th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.items
})

const mapDispatchToProps = dispatch => ({
    removeClassFromCart: id => dispatch(removeFromCart(id)),
    canceBooklClass: id => dispatch(canceBooklClass(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);