import React from "react";

import Image from "next/image";
import filter from "@/public/images/icons/filter-products-icon.svg";
import gridView from "@/public/images/icons/grid-view-icon.svg";
import listView from "@/public/images/icons/list-view-icon.svg";
import { cn } from "@/lib/utils";

export default function Icon({
  label = false,
  icon,
  customStyles,
}: {
  label?: boolean;
  icon: string;
  customStyles?: string;
}) {
  const getIcon = () => {
    switch (icon) {
      case "gridView":
        return gridView;
      case "listView":
        return listView;
      case "filter":
        return filter;
    }
  };

  const getLabel = () => {
    switch (icon) {
      case "filter":
        return "Filter";
    }
  };

  return (
    <div className={cn(`flex items-center gap-2 ${customStyles}`)}>
      <Image alt={`icon-${icon}`} src={getIcon()} className={`w-8`} />
      {label && getLabel()}
    </div>
  );
}
