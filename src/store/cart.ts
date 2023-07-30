import { computed, map } from 'nanostores';

export const $cart = map<Record<number, CartItem>>({});

export function addItemToCart(item: ShopItem) {
  // you take entire record and then access key
  // id is number just to point that out, we are not using uuid or similar
  const possibleItem = $cart.get()[item.id];

  // I tried doing like this (I'll test it to see if it will work)

  /* if (possibleItem) {
    // update quantity
    possibleItem.quantity = possibleItem.quantity + 1;
  } else {
    $cart.get()[item.id] = { item, quantity: 1 };
  } */

  // but workshop author did it this way which is clever

  const quantity = possibleItem ? possibleItem.quantity : 0;

  $cart.setKey(item.id, {
    item,
    quantity: quantity + 1,
  });
}

export function removeItemFromCart(itemId: number) {
  // since there is no remove option in nanostores
  // we set it to undefined

  // @ts-expect-error
  $cart.setKey(itemId, undefined);
}

export const $subtotal = computed($cart, (rec) => {
  let sumPrice = 0;

  Object.values(rec).forEach((entry) => {
    if (entry) {
      sumPrice += entry.quantity * entry.item.price;
    }
  });

  return sumPrice;
});
