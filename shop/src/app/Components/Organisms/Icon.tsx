import React from "react";

import Image from "next/image";
import filter from "@/public/images/icons/filter-products-icon.svg";
import gridView from "@/public/images/icons/grid-view-icon.svg";
import listView from "@/public/images/icons/list-view-icon.svg";
import { cn } from "@/lib/utils";
import { IconProps } from "./types";

export default function Icon({ label = false, icon, customStyles }: IconProps) {
  const getIcon = () => {
    switch (icon) {
      case "gridView":
        return gridView;
      case "listView":
        return listView;
      case "filter":
        return filter;
      default:
        throw new Error(`Invalid icon type: ${icon}`);
    }
  };

  const getLabel = () => {
    switch (icon) {
      case "filter":
        return "Filter";
      default:
        return "";
    }
  };

  return (
    <div className={cn(`flex items-center gap-2 ${customStyles}`)}>
      <Image alt={`icon-${icon}`} className="w-8" src={getIcon()} />
      {label ? getLabel() : null}
    </div>
  );
}
