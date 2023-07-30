import { Show, createSignal } from 'solid-js';
import { useStore } from '@nanostores/solid';
import {
  $cart as cart,
  removeItemFromCart,
  $subtotal as subtotal,
} from '../store/cart';
import styles from './Cart.module.css';
import { formatCurrency } from '../util/formatCurrency';

// -------- These are solid components
// --------                           --------
// --------                           --------
//
function EmptyState() {
  return (
    <>
      <p class={styles.icon}>
        <span role="img" aria-label="hot dog">
          🌭
        </span>
      </p>
      <p class={styles.empty}>
        Your cart is empty! Add a sandwich kit or two and give flavour a chance
      </p>
    </>
  );
}

//
//
function CheckoutNotice() {
  return <p class={styles.notice}>Checkout is not implemented yet.</p>;
}

//
//
export default function Cart() {
  const [showNotice, setShowNotice] = createSignal<boolean>(false);

  const $subtotal = useStore(subtotal);
  const $cart = useStore(cart);

  return (
    <aside class={styles.cart}>
      <h2>Your Cart</h2>
      <Show when={Object.values($cart()).length > 0} fallback={<EmptyState />}>
        <ul class={styles.items}>
          {Object.values($cart()).map((val) => {
            if (val.item) {
              return (
                <li class={styles.item}>
                  <span class={styles.quantity}>{val.quantity}</span>
                  <span class={styles.name}>{val.item.title}</span>
                  <span class={styles.remove}>
                    <button
                      title="remove item"
                      onClick={() => removeItemFromCart(val.item.id)}
                    >
                      &times;
                    </button>
                  </span>
                  <span class={styles.price}>{val.item.price}</span>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div class={styles.details}>
          <p class={styles.subtotal}>
            <span class={styles.label}>Subtotal:</span>
            {formatCurrency($subtotal())}
          </p>
          <p class={styles.shipping}>
            <span class={styles.label}>Shipping:</span>
            <del>$10.00</del>
            <ins>FREE</ins>
          </p>
          <p class={styles.total}>
            <span class={styles.label}>Total:</span>
            {formatCurrency($subtotal())}
          </p>
          <p class={styles.checkout}>
            <button class="big-link" onClick={() => setShowNotice(true)}>
              Check Out
            </button>
          </p>
          <Show when={showNotice()}>
            <CheckoutNotice />
          </Show>
        </div>
      </Show>
    </aside>
  );
}
