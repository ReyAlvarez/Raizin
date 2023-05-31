import basket from "../../assets/images/basket.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative me-2">
            <img src={basket} alt="cart-widget" className=""width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
    )
}
export default CartWidget