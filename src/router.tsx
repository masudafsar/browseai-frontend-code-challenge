import {createBrowserRouter} from "react-router-dom";
import {PickerPage, ResultsPage, ReviewPage} from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PickerPage/>,
  },
  {
    path: '/review',
    element: <ReviewPage/>,
  },
  {
    path: '/result',
    element: <ResultsPage/>,
  },
]);

export default router;
