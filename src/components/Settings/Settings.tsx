
import { Control, useForm, UseFormRegister } from "react-hook-form";
import MenuFields from "./MenuFields";

type DataType = {menus: {
    label: string;
    subMenu: {
        label: string;
        innerMenus: {
            title: string;
            items: {
                label: string;
                href: string;
            }[];
        }[];
    }[];
}[]}

export type Props = { 
  register: UseFormRegister<DataType>, 
  control: Control<DataType, any>
}

export default function Settings(){
    const {
        control,
        register,
        handleSubmit,
        getValues,
        formState: {errors},
        reset,
        setValue
      } = useForm<DataType>({
        mode: 'onChange'
      });
      const onSubmit = (data: DataType) => console.log("data", data);

      return (
        <div>
                  <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>

      <MenuFields
        {...{ control, register }}
      />

      <button type="submit">submt</button>
      </form>

        </div>
      )
}