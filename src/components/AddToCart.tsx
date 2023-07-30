/** @jsxImportSource react */

import { addItemToCart } from '../store/cart';

// our component is react component
export default function AddToCart({ item }: { item: ShopItem }) {
  return (
    <button className="big-link" onClick={() => addItemToCart(item)}>
      Add To Cart
    </button>
  );
}
