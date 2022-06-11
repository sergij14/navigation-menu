import React from "react";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { Props } from "./Settings";
import SubMenuFields from "./SubMenuFields";

export default function MenuFields({ control, register }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menus"
  });


  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                {...register(`menus.${index}.label`)}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete menu
              </button>
              <SubMenuFields nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({label: '', subMenus: []});
          }}
        >
          Add menu
        </button>

      </section>

    </>
  );
}
