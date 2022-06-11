import React from "react";
import { useFieldArray } from "react-hook-form";
import InnerMenuFields from "./InnerMenuFields";
import { Props } from "./Settings";

export default  function InnerMenuItems ({ nestIndex, innerIndex, innerItemsIndex, control, register }: Props & {nestIndex: number, innerIndex: number, innerItemsIndex :number,}) {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenu.${innerIndex}.innerMenus.${innerItemsIndex}.items`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>submenu inner menu item label:</label>
            <input
              {...register(`menus.${nestIndex}.subMenu.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.label`)}
              style={{ marginRight: "25px" }}
            />
            <label>submenu inner menu item href:</label>
            <input
              {...register(`menus.${nestIndex}.subMenu.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.href`)}
              style={{ marginRight: "25px" }}
            />
            <button type="button" onClick={() => remove(k)}>
              Delete submenu inner menu item
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          prepend({
            href: '',
            label: ''
          })
        }
      >
        Add submenu inner menu item
      </button>

      <hr />
    </div>
  );
};
