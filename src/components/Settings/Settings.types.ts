import { Control, FormState, UseFormGetValues, UseFormRegister } from "react-hook-form";
import { NavigationMenuData } from "../Navigation/Navigation.types";

export type Props = {
  register: UseFormRegister<NavigationMenuData>;
  control: Control<NavigationMenuData, any>;
  formState: FormState<NavigationMenuData>;
  getValues: UseFormGetValues<NavigationMenuData>
};
