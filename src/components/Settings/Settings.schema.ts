import { InnerMenu } from '../Navigation/Navigation.styles';
import * as yup from "yup";

export const menuSchema = yup.object({
    menus:  yup.array().of(
        yup.object().shape({
            label:  yup.string().required("Menu label is required"),
            subMenus: yup.array().of(yup.object().shape({
                label:  yup.string().required("Submenu label is required"),
                innerMenus: yup.array().of(yup.object().shape({
                    title: yup.string().required("Submenu inner menu title is required"),
                    items: yup.array().of(yup.object().shape({
                          label:  yup.string().required("Inner menu item label is required"),
                          href: yup.string().required("Inner menu item href is required"),
                    }))
                }))
            }))
        })
      ),
});
