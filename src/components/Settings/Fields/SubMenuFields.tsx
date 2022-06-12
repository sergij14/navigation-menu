import React from "react";
import { useFieldArray } from "react-hook-form";
import { Props } from "../Settings.types";
import Collapsable from "./Collapsable";
import InnerMenuFields from "./InnerMenuFields";

export default function SubMenuFields({
  nestIndex,
  control,
  register,
  getValues,
  formState,
}: Props & { nestIndex: number }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenus`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        console.log();

        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <Collapsable
              title={getValues?.(`menus.${nestIndex}.subMenus.${k}.label`)}
            >
              <label>Submenu label:</label>
              <input
                {...register(`menus.${nestIndex}.subMenus.${k}.label`)}
                style={{ marginRight: "25px" }}
              />
              <p>
                {
                  formState.errors?.menus?.[nestIndex]?.subMenus?.[k]?.label
                    ?.message
                }
              </p>
              <button type="button" onClick={() => remove(k)}>
                Delete submenu
              </button>
              <InnerMenuFields
                nestIndex={nestIndex}
                innerIndex={k}
                {...{ control, register, formState, getValues }}
              />
            </Collapsable>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() =>
          append({
            label: "",
            innerMenus: [],
          })
        }
      >
        Add submenu
      </button>
    </div>
  );
}
