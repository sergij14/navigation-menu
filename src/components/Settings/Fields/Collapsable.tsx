import React, { useEffect, useState } from "react";

const Collapsable = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string | undefined;
}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if(!title){
      setActive(true)
    }
  }, [title])
  return (
    <div>
      <p onClick={() => setActive(!active)}>{title}</p>
      {active && children}
    </div>
  );
};

export default Collapsable;
