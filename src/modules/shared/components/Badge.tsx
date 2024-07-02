import React from "react";

export interface BadgeProps{
    icon: JSX.Element;
    badgeAdditionalClass: string;
    bubbleContent?: string;
    bubbleAdditionalClass: string;
}

export const Badge: React.FC<{props: BadgeProps}> = ({props}) => {
const {icon, bubbleAdditionalClass, bubbleContent, badgeAdditionalClass} = props;

return (

<div className="relative inline-flex w-fit">
    { bubbleContent &&
  <div
    className={`absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white ${bubbleAdditionalClass}`}>
    {bubbleContent}
  </div>
    }
  <div
    className="flex items-center justify-center rounded-lg  text-center shadow-lg">
    <span
      className="[&>svg]:w-10 [&>svg]:fill-white dark:[&>svg]:fill-gray-200">
      {icon}
    </span>
  </div>
</div>
)
}