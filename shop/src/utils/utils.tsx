type ShoppingCardItems = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export function storeProductsForUser({
  userEmail,
  products,
}: {
  userEmail: string;
  products: ShoppingCardItems[];
}) {
  localStorage.setItem(`userProducts_${userEmail}`, JSON.stringify(products));
}

export function getProductsForUser({ userEmail }: { userEmail: string }) {
  const storedProducts = localStorage.getItem(`userProducts_${userEmail}`);
  return storedProducts ? JSON.parse(storedProducts) : [];
}
