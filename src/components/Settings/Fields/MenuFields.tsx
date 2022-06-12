import React from "react";
import { useFieldArray } from "react-hook-form";
import { Props } from "../Settings.types";
import Collapsable from "./Collapsable";
import SubMenuFields from "./SubMenuFields";

export default function MenuFields({
  control,
  register,
  formState,
  getValues,
}: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menus",
  });

  return (
    <div>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <Collapsable title={getValues?.(`menus.${index}.label`)}>
              <label>Menu label:</label>
              <input {...register(`menus.${index}.label`)} />
              <p>{formState.errors?.menus?.[index]?.label?.message}</p>
              <button type="button" onClick={() => remove(index)}>
                Delete menu
              </button>
              <SubMenuFields
                nestIndex={index}
                {...{ control, register, formState, getValues }}
              />
            </Collapsable>
            <hr />
            <br />
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          append({ label: "", subMenus: [] });
        }}
      >
        Add menu
      </button>
      <br />
    </div>
  );
}
