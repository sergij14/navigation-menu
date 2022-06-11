
import { Control, useForm, UseFormRegister } from "react-hook-form";
import { NavigationMenuData } from "../Navigation/Navigation.types";
import MenuFields from "./MenuFields";

export type Props = { 
  register: UseFormRegister<NavigationMenuData>, 
  control: Control<NavigationMenuData, any>
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
      } = useForm<NavigationMenuData>({
        mode: 'onChange'
      });
      const onSubmit = (data: NavigationMenuData) => console.log("data", data);

      return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <MenuFields
        {...{ control, register }}
      />

      <button type="submit">submt</button>
      </form>

        </div>
      )
}