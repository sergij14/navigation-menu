import React from "react";
import { useFieldArray } from "react-hook-form";
import { Props } from "../Settings.types";
import SubMenuFields from "./SubMenuFields";

export default function MenuFields({ control, register, formState }: Props) {
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
              <p>
              {formState.errors?.menus?.[index]?.label?.message}
              </p>
              <button type="button" onClick={() => remove(index)}>
                Delete menu
              </button>
              <SubMenuFields nestIndex={index} {...{ control, register, formState }} />
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
