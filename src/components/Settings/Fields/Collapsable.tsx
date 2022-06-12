import React, { useState } from "react";

const Collapsable = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string | undefined;
}) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <p onClick={() => setActive(!active)}>{title}</p>
      {active && children}
    </div>
  );
};

export default Collapsable;
