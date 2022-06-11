
import { useForm } from "react-hook-form";
import { NavigationMenuData } from "../Navigation/Navigation.types";
import MenuFields from "./Fields/MenuFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { menuSchema } from "./Settings.schema";
import useTypedLocalStorage from "../../hooks/useTypedLocalStorage";

export default function Settings(){
  const {typedStorage} = useTypedLocalStorage<NavigationMenuData>()
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
        defaultValues: {menus: typedStorage.getItem('menus')  || [] },
        resolver: yupResolver(menuSchema),
      });
      const onSubmit = (data: NavigationMenuData) => {
        console.log(data);
        typedStorage.setItem('menus', data.menus);
      }      

      return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <MenuFields
        {...{ control, register, formState }}
      />

      <button type="submit" disabled={!formState.isDirty}>submt</button>
      </form>

        </div>
      )
}