import * as yup from "yup";

export const menuSchema = yup.object({
    menus:  yup.array().of(
        yup.object().shape({
            label:  yup.string().required("Menu label is required"),

        })
      ),
});
