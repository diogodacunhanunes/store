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
import { ShoppingCardItems } from "./types";

function ShoppingCartItem({
  prod,
  onDelete,
}: {
  prod: ShoppingCardItems;
  onDelete: (id: number) => void;
}) {
  const width = isMobile ? 80 : 125;
  const height = isMobile ? 80 : 125;

  const { id, name, price, quantity, image } = prod;
  return (
    <div className="w-full flex gap-4 items-center" key={id}>
      <Image
        alt="product_shp_cart"
        className="rounded-[10px]"
        height={height}
        src={image}
        width={width}
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
        alt="product_delete_trash"
        className="w-[25px] h-[25px] cursor-pointer"
        onClick={() => onDelete(id)}
        src={deleteTrash}
      />
    </div>
  );
}

export default function ShoppingCartSide({
  trigger,
  title,
  shoppingCartItems,
  isOpen,
  setShoppingCartProducts,
  onOpenChange,
}: {
  trigger: React.ReactNode;
  title: string;
  shoppingCartItems: ShoppingCardItems[];
  isOpen: boolean;
  setShoppingCartProducts: (items: ShoppingCardItems[]) => void;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet onOpenChange={onOpenChange} open={isOpen}>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-8 mt-8">
              {shoppingCartItems?.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  onDelete={(id) =>
                    setShoppingCartProducts(
                      shoppingCartItems.filter((p) => p.id !== id),
                    )
                  }
                  prod={item}
                />
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
