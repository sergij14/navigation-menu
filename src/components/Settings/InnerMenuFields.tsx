import React from "react";
import { useFieldArray } from "react-hook-form";
import { Props } from "./Settings";

export default function InnerMenuFields ({ nestIndex, innerIndex, control, register }: Props & {innerIndex: number, nestIndex: number}) {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenu.${innerIndex}.innerMenus`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Inner Nested Array:</label>
            <input
              {...register(`menus.${nestIndex}.subMenu.${innerIndex}.innerMenus.${k}.title`)}
              style={{ marginRight: "25px" }}
            />
            <button type="button" onClick={() => remove(k)}>
              Delete submenu inner menu
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          prepend({
            items: [],
            title: ''
          })
        }
      >
        Add submenu inner menu
      </button>

      <hr />
    </div>
  );
};
