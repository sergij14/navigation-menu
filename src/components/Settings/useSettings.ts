import { useForm } from "react-hook-form";
import { NavigationMenuData } from "../Navigation/Navigation.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { menuSchema } from "./Settings.schema";
import useNavigation from "../Navigation/useNavigation";
import { useNavigate } from "react-router-dom";

export default function useSettings() {
  const { typedStorage } = useNavigation();
  const menus = typedStorage.getItem("menus") || [];

  const { control, register, handleSubmit, formState } =
    useForm<NavigationMenuData>({
      mode: "onChange",
      defaultValues: menus ? { menus } : {},
      resolver: yupResolver(menuSchema),
    });

  const navigate = useNavigate();
  const onSubmit = (data: NavigationMenuData) => {
    typedStorage.setItem("menus", data.menus);
    navigate("/");
  };

  return {
    control,
    register,
    handleSubmit,
    formState,
    onSubmit,
  };
}
