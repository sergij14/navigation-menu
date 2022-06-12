import React from "react";
import { useFieldArray } from "react-hook-form";
import { SettingsButton, SettingsButtons } from "../Settings.styles";
import { Props } from "../Settings.types";
import Collapsable from "./Collapsable";
import SubMenuFields from "./SubMenuFields";
import { PlusIcon } from "@heroicons/react/solid";

export default function MenuFields({
  control,
  register,
  formState,
  getValues,
  setValue,
}: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menus",
  });

  return (
    <div>
      {fields.map((item, index) => {
        setValue?.(`menus.${index}.id`, item.id);
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
                {...{ control, register, formState, getValues, setValue }}
              />
            </Collapsable>
            <hr />
            <br />
          </div>
        );
      })}
      <SettingsButtons>
        <SettingsButton
          type="button"
          onClick={() => {
            append({ label: "", subMenus: [] });
          }}
        >
          <PlusIcon />
          Add entry
        </SettingsButton>
      </SettingsButtons>
    </div>
  );
}
