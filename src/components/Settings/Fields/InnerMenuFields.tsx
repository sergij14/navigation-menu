import React from "react";
import { useFieldArray } from "react-hook-form";
import { Props } from "../Settings.types";
import Collapsable from "./Collapsable";
import InnerMenuItems from "./InnerMenuItems";

export default function InnerMenuFields({
  nestIndex,
  innerIndex,
  control,
  register,
  getValues,
  setValue,
  formState,
}: Props & { innerIndex: number; nestIndex: number }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        setValue?.(`menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${k}.id`, item.id)

        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <Collapsable
              title={getValues?.(
                `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${k}.title`
              )}
            >
              <label>Submenu inner menu title:</label>
              <input
                {...register(
                  `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${k}.title`
                )}
                style={{ marginRight: "25px" }}
              />
              <p>
                {
                  formState.errors?.menus?.[nestIndex]?.subMenus?.[innerIndex]
                    ?.innerMenus?.[k].title?.message
                }
              </p>
              <InnerMenuItems
                nestIndex={nestIndex}
                innerIndex={innerIndex}
                innerItemsIndex={k}
                {...{ control, register, formState, getValues, setValue }}
              />
              <button type="button" onClick={() => remove(k)}>
                Delete submenu inner menu
              </button>
            </Collapsable>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() =>
          append({
            items: [],
            title: "",
          })
        }
      >
        Add submenu inner menu
      </button>
    </div>
  );
}
