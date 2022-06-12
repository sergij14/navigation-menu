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
import InnerMenuFields from "./InnerMenuFields";

export default function SubMenuFields({
  nestIndex,
  control,
  register,
  getValues,
  setValue,
  formState,
}: Props & { nestIndex: number }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `menus.${nestIndex}.subMenus`,
  });

  return (
    <SettingsFieldContainer>
      {fields.map((item, k) => {
        setValue?.(`menus.${nestIndex}.subMenus.${k}.id`, item.id);
        return (
          <SettingsField key={item.id} style={{ marginLeft: 20 }}>
            <Collapsable
              title={getValues?.(`menus.${nestIndex}.subMenus.${k}.label`)}
            >
              <FieldLabel>Submenu label:</FieldLabel>
              <FieldInput
                {...register(`menus.${nestIndex}.subMenus.${k}.label`)}
                style={{ marginRight: "25px" }}
              />
              <ErrorMessage>
                {
                  formState.errors?.menus?.[nestIndex]?.subMenus?.[k]?.label
                    ?.message
                }
              </ErrorMessage>
              <DeleteFieldButton type="button" onClick={() => remove(k)}>
                <XCircleIcon /> Delete submenu
              </DeleteFieldButton>
              <InnerMenuFields
                nestIndex={nestIndex}
                innerIndex={k}
                {...{ control, register, formState, getValues, setValue }}
              />
            </Collapsable>
          </SettingsField>
        );
      })}
      <SettingsButton
        type="button"
        onClick={() =>
          append({
            label: "",
            innerMenus: [],
          })
        }
      >
        <PlusIcon />
        Add submenu
      </SettingsButton>
    </SettingsFieldContainer>
  );
}
