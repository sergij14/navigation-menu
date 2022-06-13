import React, { useEffect, useState } from "react";
import {
  FieldCollapsableContainer,
  FieldCollapsableTitle,
} from "../Settings.styles";
import {
  ArrowCircleDownIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";

const Collapsable = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string | undefined;
}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (!title) {
      setIsActive(true);
    }
  }, [title]);
  return (
    <FieldCollapsableContainer>
      <FieldCollapsableTitle
        onClick={() => setIsActive(!isActive)}
        isActive={isActive}
      >
        {isActive ? <ArrowCircleDownIcon /> : <ArrowCircleRightIcon />}
        {title === "" ? "Enter the label" : title}
      </FieldCollapsableTitle>
      {isActive && children}
    </FieldCollapsableContainer>
  );
};

export default Collapsable;
