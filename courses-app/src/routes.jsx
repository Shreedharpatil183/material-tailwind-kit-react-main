import { Home, Profile, SignIn, SignUp } from "@/pages";
import CoursesPage from "./pages/CoursesPage";
import InterviewPrepPage from "./pages/InterviewPrepPage";

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
    name: "interview prep",
    href: "",
    path: "/interviewprep",
    element: <InterviewPrepPage />
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
