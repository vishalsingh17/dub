import { LucideIcon } from "lucide-react";
import { ComponentType, SVGProps } from "react";

// custom icons
export { default as Copy } from "./copy";
export { default as ExpandingArrow } from "./expanding-arrow";
export { default as Magic } from "./magic";
export { default as Photo } from "./photo";
export { default as SortOrder } from "./sort-order";
export { default as Success } from "./success";
export { default as Tick } from "./tick";

// loaders
export { default as LoadingCircle } from "./loading-circle";
export { default as LoadingDots } from "./loading-dots";
export { default as LoadingSpinner } from "./loading-spinner";

// brand logos
export { default as Facebook } from "./facebook";
export { default as Github } from "./github";
export * from "./go";
export { default as Google } from "./google";
export { default as LinkedIn } from "./linkedin";
export * from "./prisma";
export { default as ProductHunt } from "./product-hunt";
export * from "./python";
export * from "./raycast";
export * from "./ruby";
export * from "./tinybird";
export { default as Twitter } from "./twitter";
export * from "./typescript";
export { default as Unsplash } from "./unsplash";
export { default as YouTube } from "./youtube";

// Nucleo icons
export * from "./nucleo";

export type Icon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
