import {
    NAVIGATION_ONE,
    NAVIGATION_TWO,
    NAVIGATION_THREE,
    OPTION_1,
    OPTION_2,
    OPTION_3,
    OPTION_4,
    OPTION_5, OPTION_6, OPTION_7
} from "./consts";
import NavigationOne from "../pages/NavigationOne";
import NavigationTwo from "../pages/NavigationTwo";
import NavigationThree from "../pages/NavigationThree";
import Option1 from "../pages/Option1";
import Option2 from "../pages/Option2";
import Option3 from "../pages/Option3";
import Option4 from "../pages/Option4";
import Option5 from "../pages/Option5";
import Option6 from "../pages/Option6";
import Option7 from "../pages/Option7";



export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },
    // {
    //     path: BASKET_ROUTE,
    //     Component: Basket
    // },
    // {
    //     path: ADMIN_SETTINGS,
    //     Component: Champ
    // },
]

export const publicRoutes = [
    {
        path: NAVIGATION_ONE,
        Component: NavigationOne
    },
    {
        path: NAVIGATION_TWO,
        Component: NavigationTwo
    },
    {
        path: NAVIGATION_THREE,
        Component: NavigationThree
    },
    {
        path: OPTION_1,
        Component: Option1
    },
    {
        path: OPTION_2,
        Component: Option2
    },
    {
        path: OPTION_3,
        Component: Option3
    },
    {
        path: OPTION_4,
        Component: Option4
    },
    {
        path: OPTION_5,
        Component: Option5
    },
    {
        path: OPTION_6,
        Component: Option6
    },
    {
        path: OPTION_7,
        Component: Option7
    },
]
