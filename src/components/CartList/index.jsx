import CartProduct from "../Cart/CartProduct";

const CartList = ({ productArray, setCartProduct }) => {
  return (
    <ul className="">
      {productArray.map((product, index) => {
        return (
          <CartProduct
            key={index}
            setCartProduct={setCartProduct}
            id={product.id}
            imgSrc={product.img}
            name={product.name}
            category={product.category}
          />
        );
      })}
    </ul>
  );
};

export default CartList;
