import { useForm } from "react-hook-form";
import { NavigationMenuData } from "../Navigation/Navigation.types";
import MenuFields from "./Fields/MenuFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { menuSchema } from "./Settings.schema";
import useNavigation from "../Navigation/useNavigation";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { typedStorage } = useNavigation();
  const menus = typedStorage.getItem('menus');

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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MenuFields {...{ control, register, formState }} />

        <button type="submit" disabled={!formState.isDirty}>
          submt
        </button>
      </form>
    </div>
  );
}
