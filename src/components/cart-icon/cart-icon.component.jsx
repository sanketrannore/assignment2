import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { Fragment } from 'react'
import Carticon from './CartIcon'

// import classes from './Cart-Icon.module.css'
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const CartIcon = ({ cartTotalItem }) => (
<Fragment>
        
        
    <Link to='/cart' >
        <span class="material-icons-outlined" style={{marginLeft:1210,width:90,height:15,}}  >
            <Carticon />
        </span>
        {/* <ShoppingCartOutlinedIcon /> */}
        {cartTotalItem}</Link>
        
        
        
        </Fragment>

)

const mapStateToProps = state => ({
    cartTotalItem: state.cart.items.length
})

export default connect(mapStateToProps)(CartIcon);