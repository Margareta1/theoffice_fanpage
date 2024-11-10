import { Navigate, createBrowserRouter } from "react-router-dom";
import { CastAndCharactersPage, HomePage, QuizPage, TriviaPage } from "../pages";

export const router = createBrowserRouter([
  { path: "/home", element: <HomePage /> },
  { path: "/cast-and-characters", element: <CastAndCharactersPage /> },
  { path: "/trivia", element: <TriviaPage /> },
  { path: "/quiz", element: <QuizPage /> },
  { path: "*", element: <Navigate to='/home' /> },
]);
