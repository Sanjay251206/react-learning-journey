import {
  configureStore,
  createSlice
} from "@reduxjs/toolkit";

import {
  Provider,
  useDispatch,
  useSelector
} from "react-redux";

import "./App.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000
  },
  {
    id: 3,
    name: "Mouse",
    price: 800
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1500
  }
];

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {
    addToCart: (state, action) => {
      const existingProduct =
        state.items.find(
          (item) =>
            item.id === action.payload.id
        );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    increaseQuantity: (state, action) => {
      const product =
        state.items.find(
          (item) =>
            item.id === action.payload
        );

      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product =
        state.items.find(
          (item) =>
            item.id === action.payload
        );

      if (
        product &&
        product.quantity > 1
      ) {
        product.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.items =
        state.items.filter(
          (item) =>
            item.id !== action.payload
        );
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});

const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

function App() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );


  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  return (
    <div className="app">

      <h1>Redux Shopping Cart</h1>

      {/* Products Section */}

      <div className="products">

        <h2>Products</h2>

        {products.map((product) => (

          <div
            className="product"
            key={product.id}
          >

            <div>
              <h3>{product.name}</h3>

              <p>
                Price: ₹{product.price}
              </p>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addToCart(product)
                )
              }
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

      {/* Cart Section */}

      <div className="cart">

        <h2>
          Cart ({totalItems} items)
        </h2>

        {cartItems.length === 0 ? (

          <p>
            Your cart is empty.
          </p>

        ) : (

          <>
            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <div>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>

                </div>

                <div>

                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity(
                          item.id
                        )
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity(
                          item.id
                        )
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart(
                          item.id
                        )
                      )
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

            <h2>
              Total: ₹{totalPrice}
            </h2>

            <button
              onClick={() =>
                dispatch(clearCart())
              }
            >
              Clear Cart
            </button>

          </>

        )}

      </div>

    </div>
  );
}

function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ReduxApp;