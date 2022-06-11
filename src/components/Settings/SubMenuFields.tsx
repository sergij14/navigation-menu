import React from "react";
import { useFieldArray } from "react-hook-form";
import InnerMenuFields from "./InnerMenuFields";
import { Props } from "./Settings";

export default  function SubMenuFields ({ nestIndex, control, register }: Props & {nestIndex: number}) {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenu`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Nested Array:</label>
            <input
              {...register(`menus.${nestIndex}.subMenu.${k}.label`)}
              style={{ marginRight: "25px" }}
            />
          <InnerMenuFields nestIndex={nestIndex} innerIndex={k} {...{ control, register }} />
            <button type="button" onClick={() => remove(k)}>
              Delete submenu
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          prepend({
            label: '',
            innerMenus: []
          })
        }
      >
        Add submenu
      </button>

      <hr />
    </div>
  );
};
