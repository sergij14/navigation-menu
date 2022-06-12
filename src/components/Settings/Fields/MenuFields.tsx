import React from "react";
import { useFieldArray } from "react-hook-form";
import {
  DeleteFieldButton,
  FieldInput,
  FieldLabel,
  SettingsButton,
  SettingsButtons,
  SettingsField,
  SettingsFieldContainer,
} from "../Settings.styles";
import { Props } from "../Settings.types";
import Collapsable from "./Collapsable";
import SubMenuFields from "./SubMenuFields";
import { PlusIcon, XCircleIcon } from "@heroicons/react/solid";
import { ErrorMessage } from "../../App/App.styles";

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
    <SettingsFieldContainer>
      {fields.map((item, index) => {
        setValue?.(`menus.${index}.id`, item.id);
        return (
          <SettingsField key={item.id}>
            <Collapsable title={getValues?.(`menus.${index}.label`)}>
              <FieldLabel>Menu label:</FieldLabel>
              <FieldInput {...register(`menus.${index}.label`)} />
              <ErrorMessage>
                {formState.errors?.menus?.[index]?.label?.message}
              </ErrorMessage>
              <SubMenuFields
                nestIndex={index}
                {...{ control, register, formState, getValues, setValue }}
              />
              <DeleteFieldButton type="button" onClick={() => remove(index)}>
                <XCircleIcon />
                Delete menu
              </DeleteFieldButton>
            </Collapsable>
          </SettingsField>
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
    </SettingsFieldContainer>
  );
}
