import React from "react";
import { useFieldArray } from "react-hook-form";
import { Props } from "../Settings.types";
import Collapsable from "./Collapsable";

export default function InnerMenuItems({
  nestIndex,
  innerIndex,
  innerItemsIndex,
  control,
  getValues,
  register,
  formState,
}: Props & { nestIndex: number; innerIndex: number; innerItemsIndex: number }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <Collapsable
              title={
                getValues?.(
                  `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.title`
                ) + " entries"
              }
            >
              <label>submenu inner menu item label:</label>
              <input
                {...register(
                  `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.label`
                )}
                style={{ marginRight: "25px" }}
              />
              <p>
                {
                  formState.errors?.menus?.[nestIndex]?.subMenus?.[innerIndex]
                    ?.innerMenus?.[innerItemsIndex]?.items?.[k]?.label?.message
                }
              </p>

              <label>submenu inner menu item href:</label>
              <input
                {...register(
                  `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.href`
                )}
                style={{ marginRight: "25px" }}
              />
              <p>
                {
                  formState.errors?.menus?.[nestIndex]?.subMenus?.[innerIndex]
                    ?.innerMenus?.[innerItemsIndex]?.items?.[k]?.href?.message
                }
              </p>
              <button type="button" onClick={() => remove(k)}>
                Delete submenu inner menu item
              </button>
            </Collapsable>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() =>
          append({
            href: "",
            label: "",
          })
        }
      >
        Add submenu inner menu item
      </button>
    </div>
  );
}
