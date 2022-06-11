import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./NestedFieldArray";

let renderCount = 0;

type Props = {

}

export default function Fields({ control, register, setValue, getValues }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  renderCount++;

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                {...register(`test[${index}].name`)}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
              <NestedArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({});
          }}
        >
          append
        </button>

      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
