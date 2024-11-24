import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  BestEpisodesPage,
  CastAndCharactersPage,
  HomePage,
  QuizPage,
} from "../pages";
import { Layout } from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <HomePage /> },
      { path: "cast-and-characters", element: <CastAndCharactersPage /> },
      { path: "best-episodes", element: <BestEpisodesPage /> },
      { path: "quiz", element: <QuizPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);
