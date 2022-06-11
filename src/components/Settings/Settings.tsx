
import { Control, FormState, useForm, UseFormRegister } from "react-hook-form";
import { NavigationMenuData } from "../Navigation/Navigation.types";
import MenuFields from "./MenuFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { menuSchema } from "./schema";
import { useEffect } from "react";

export type Props = { 
  register: UseFormRegister<NavigationMenuData>, 
  control: Control<NavigationMenuData, any>,
  formState: FormState<NavigationMenuData>
}

export default function Settings(){
    const {
        control,
        register,
        handleSubmit,
        getValues,
        formState,
        reset,
        setValue
      } = useForm<NavigationMenuData>({
        mode: 'onChange',
        resolver: yupResolver(menuSchema),
      });
      const onSubmit = (data: NavigationMenuData) => {
        console.log(data);
        
      }

     useEffect(() => {
      console.log(formState);
     }, [formState])
      

      return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <MenuFields
        {...{ control, register, formState }}
      />

      <button type="submit">submt</button>
      </form>

        </div>
      )
}