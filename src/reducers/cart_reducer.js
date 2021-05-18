import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;
      const temp_item = state.cart.find((item) => item.id === id + color);
      if (temp_item) {
        const temp_cart = state.cart.map((item) => {
          if (item.id === id + color) {
            let new_amount = Math.min(item.amount + amount, product.stock);
            return { ...item, amount: new_amount };
          } else {
            return item;
          }
        });

        return { ...state, cart: temp_cart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          maxAmount: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case REMOVE_CART_ITEM:
      let temp_cart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: temp_cart };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;
      let temp_cart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = Math.min(
            item.maxAmount,
            Math.max(1, item.amount + value)
          );
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: temp_cart };
    }

    case COUNT_CART_TOTALS: {
      const { total_items, total_amount } = state.cart.reduce(
        (total, current) => {
          const { price, amount } = current;
          total.total_items += amount;
          total.total_amount += price * amount;

          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_items, total_amount };
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
