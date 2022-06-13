import { useForm } from "react-hook-form";
import { NavigationMenuData } from "../Navigation/Navigation.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { menuSchema } from "./Settings.schema";
import useNavigation from "../Navigation/useNavigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function useSettings() {
  const { typedStorage, menus } = useNavigation();

  const {
    control,
    register,
    handleSubmit,
    formState,
    getValues,
    setValue,
    reset,
  } = useForm<NavigationMenuData>({
    mode: "onBlur",
    resolver: yupResolver(menuSchema),
  });

  useEffect(() => {
    reset({ menus });
  }, [menus, reset]);

  const navigate = useNavigate();
  const onSubmit = (data: NavigationMenuData) => {
    typedStorage.setItem("menus", data.menus);
    navigate("/");
  };

  return {
    control,
    register,
    getValues,
    handleSubmit,
    formState,
    onSubmit,
    setValue,
  };
}
