
import { useForm } from "react-hook-form";
import FieldArray from "./FieldArray";

export default function Settings(){
    const {
        control,
        register,
        handleSubmit,
        getValues,
        formState: {errors},
        reset,
        setValue
      } = useForm<any>({
        mode: 'onChange'
      });
      const onSubmit = (data: any) => console.log("data", data);

      return (
        <div>
                  <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>

      <FieldArray
        {...{ control, register, getValues, setValue, errors }}
      />

      <button type="submit">submt</button>
        </div>
      )
}