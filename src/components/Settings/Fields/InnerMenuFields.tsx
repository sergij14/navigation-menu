import { PlusIcon, XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { ErrorMessage } from "../../App/App.styles";
import {
  DeleteFieldButton,
  FieldInput,
  FieldLabel,
  SettingsButton,
  SettingsField,
  SettingsFieldContainer,
} from "../Settings.styles";
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
    <SettingsFieldContainer>
      {fields.map((item, k) => {
        setValue?.(
          `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${k}.id`,
          item.id
        );

        return (
          <SettingsField key={item.id} style={{ marginLeft: 20 }}>
            <Collapsable
              title={getValues?.(
                `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${k}.title`
              )}
            >
              <FieldLabel>Inner menu title:</FieldLabel>
              <FieldInput
                {...register(
                  `menus.${nestIndex}.subMenus.${innerIndex}.innerMenus.${k}.title`
                )}
                style={{ marginRight: "25px" }}
              />
              <ErrorMessage>
                {
                  formState.errors?.menus?.[nestIndex]?.subMenus?.[innerIndex]
                    ?.innerMenus?.[k]?.title?.message
                }
              </ErrorMessage>
              <InnerMenuItems
                nestIndex={nestIndex}
                innerIndex={innerIndex}
                innerItemsIndex={k}
                {...{ control, register, formState, getValues, setValue }}
              />
              <DeleteFieldButton type="button" onClick={() => remove(k)}>
                <XCircleIcon /> Delete inner menu
              </DeleteFieldButton>
            </Collapsable>
          </SettingsField>
        );
      })}
      <SettingsButton
        type="button"
        onClick={() =>
          append({
            items: [],
            title: "",
          })
        }
      >
        <PlusIcon />
        Add inner menu
      </SettingsButton>
    </SettingsFieldContainer>
  );
}
