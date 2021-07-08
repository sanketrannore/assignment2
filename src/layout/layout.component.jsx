import CartIcon from '../components/cart-icon/cart-icon.component'
import classes from './Layout.module.css'

const Layout = ({children}) => {

    return <div className={classes.layout}>
        <CartIcon />
        {children}
    </div>
}

export default Layout;