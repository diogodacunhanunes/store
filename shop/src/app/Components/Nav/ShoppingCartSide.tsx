import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/organisms/SideSheet";
import { isMobile } from "react-device-detect";

import deleteTrash from "../../../../public/images/assets/delete_icon.png";

type ShoppingCardItems = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function ShoppingCartSide({
  trigger,
  title,
  shoppingCartItems,
  isOpen,
  onOpenChange,
  setShoppingCartProducts,
}: {
  trigger: React.ReactNode;
  title: string;
  shoppingCartItems: ShoppingCardItems[];
  isOpen: boolean;
  setShoppingCartProducts: (a: any) => void;
  onOpenChange: (open: boolean) => void;
}) {
  const ShoppingCartItem = ({ prod }: { prod: ShoppingCardItems }) => {
    const width = isMobile ? 80 : 125;
    const height = isMobile ? 80 : 125;

    const { id, name, price, quantity, image } = prod;
    return (
      <div className="w-full flex gap-4 items-center" key={id}>
        <Image
          src={image}
          width={width}
          height={height}
          className="rounded-[10px]"
          alt="product_shp_cart"
        />
        <div className="w-full flex flex-col justify-center gap-4">
          <span className="text-[16px] md:text-[20px] text-black">{name}</span>
          <div>
            <span className="text-[14px] md:text-[18px]">{quantity} x</span>
            <span className="ml-2 text-[#B88E2F] text-[14px] md:text-[18px]">
              {" "}
              {price}€
            </span>
          </div>
        </div>
        <Image
          src={deleteTrash}
          className="w-[25px] h-[25px] cursor-pointer"
          alt="product_delete_trash"
          onClick={() =>
            setShoppingCartProducts(
              (prev: any) => prev?.filter((p: any) => p.id !== id)
            )
          }
        />
      </div>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-8 mt-8">
              {shoppingCartItems?.map((item) => (
                <ShoppingCartItem key={item.id} prod={item} />
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
