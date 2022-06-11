import React from "react";
import { useFieldArray } from "react-hook-form";
import { Props } from "../Settings.types";
import InnerMenuItems from "./InnerMenuItems";

export default function InnerMenuFields ({ nestIndex, innerIndex, control, register, formState }: Props & {innerIndex: number, nestIndex: number}) {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Submenu inner menu title:</label>
            <input
              {...register(`menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${k}.title`)}
              style={{ marginRight: "25px" }}
            />
                        <p>
              {formState.errors?.menus?.[nestIndex]?.subMenus?.[innerIndex]?.innerMenus?.[k].title?.message}
            </p>
            <InnerMenuItems nestIndex={nestIndex} innerIndex={innerIndex} innerItemsIndex={k} {...{ control, register, formState }} />
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