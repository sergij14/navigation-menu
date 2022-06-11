import React from "react";
import { useFieldArray } from "react-hook-form";
import InnerNestedFieldArray from "./InnerNestedFieldArray";

export default ({ nestIndex, control, register }: any) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test[${nestIndex}].nestedArray`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Nested Array:</label>
            <input
              {...register(`test[${nestIndex}].nestedArray[${k}].field1`)}
              style={{ marginRight: "25px" }}
            />
          <InnerNestedFieldArray nestIndex={nestIndex} innerIndex={k} {...{ control, register }} />
            <button type="button" onClick={() => remove(k)}>
              Delete Nested
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};
