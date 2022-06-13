import { PlusIcon, XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { ErrorMessage } from "../../App/App.styles";
import {
  DeleteFieldButton,
  FieldInput,
  FieldLabel,
  InnerItems,
  SettingsButton,
  SettingsField,
  SettingsFieldContainer,
} from "../Settings.styles";
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
  setValue,
}: Props & { nestIndex: number; innerIndex: number; innerItemsIndex: number }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items`,
  });

  return (
    <SettingsFieldContainer>
      {fields.map((item, k) => {
        setValue?.(
          `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.id`,
          item.id
        );
        return (
          <SettingsField key={item.id} style={{ marginLeft: 20 }}>
            <Collapsable
              title={getValues?.(
                `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.label`
              )}
            >
              <InnerItems>
                <div>
                  <FieldLabel>Item label:</FieldLabel>
                  <FieldInput
                    {...register(
                      `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.label`
                    )}
                    style={{ marginRight: "25px" }}
                  />
                  <ErrorMessage>
                    {
                      formState.errors?.menus?.[nestIndex]?.subMenus?.[
                        innerIndex
                      ]?.innerMenus?.[innerItemsIndex]?.items?.[k]?.label
                        ?.message
                    }
                  </ErrorMessage>
                </div>
                <div>
                  <FieldLabel>Item link:</FieldLabel>
                  <FieldInput
                    {...register(
                      `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${innerItemsIndex}.items.${k}.link`
                    )}
                    style={{ marginRight: "25px" }}
                  />
                  <ErrorMessage>
                    {
                      formState.errors?.menus?.[nestIndex]?.subMenus?.[
                        innerIndex
                      ]?.innerMenus?.[innerItemsIndex]?.items?.[k]?.link
                        ?.message
                    }
                  </ErrorMessage>
                </div>
              </InnerItems>
              <DeleteFieldButton type="button" onClick={() => remove(k)}>
                <XCircleIcon />
                Delete item
              </DeleteFieldButton>
            </Collapsable>
          </SettingsField>
        );
      })}
      <SettingsButton
        type="button"
        onClick={() =>
          append({
            link: "",
            label: "",
          })
        }
      >
        <PlusIcon /> Add item
      </SettingsButton>
    </SettingsFieldContainer>
  );
}
