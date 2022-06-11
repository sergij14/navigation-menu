import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, innerIndex, control, register }: any) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test[${nestIndex}].nestedArray[${innerIndex}].innerNestedArray`
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Inner Nested Array:</label>
            <input
              {...register(`test[${nestIndex}].nestedArray[${innerIndex}].innerNestedArray.field1`)}
              style={{ marginRight: "25px" }}
            />

            <input
              {...register(`test[${nestIndex}].nestedArray[${innerIndex}].innerNestedArray.field2`)}
            />
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
