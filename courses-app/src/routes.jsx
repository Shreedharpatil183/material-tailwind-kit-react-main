import { Home, Profile, SignIn, SignUp } from "@/pages";
import CoursesPage from "./pages/CoursesPage";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "courses",
    href: "",
    path: "/courses",
    element: <CoursesPage />
  },
  {
    name: "test series",
    href: "",
    target: "_blank",
    element: ""
  },
  {
    name: "quiz",
    href: "",
    target: "_blank",
    element: ""
  },
  {
    name: "mcq",
    href: "",
    target: "_blank",
    element: ""
  },
  {
    name: "interview prep",
    href: "",
    target: "_blank",
    element: ""
  },
  {
    name: "packages",
    href: "",
    target: "_blank",
    element: ""
  }
  // {
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // }
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
