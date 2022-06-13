import * as yup from "yup";

export const menuSchema = yup.object({
  menus: yup.array().of(
    yup.object().shape({
      label: yup.string().required("Menu label is required"),
      link: yup
      .string()
      .required("Menu link is required"),
      subMenus: yup.array().of(
        yup.object().shape({
          label: yup.string().required("Submenu label is required"),
          link: yup
          .string()
          .required("Submenu link is required"),
          innerMenus: yup.array().of(
            yup.object().shape({
              title: yup
                .string()
                .required("Inner menu title is required"),
              items: yup.array().of(
                yup.object().shape({
                  label: yup
                    .string()
                    .required("Menu item label is required"),
                  link: yup
                    .string()
                    .required("Menu item link is required"),
                })
              ),
            })
          ),
        })
      ),
    })
  ),
});
