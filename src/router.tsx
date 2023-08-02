import {createBrowserRouter} from "react-router-dom";
import {PickerPage, ReviewPage} from "./pages";
import {ResultsPage} from "./pages/ResultsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PickerPage/>
  },
  {
    path: '/review',
    element: <ReviewPage/>
  },
  {
    path: '/result',
    element: <ResultsPage/>
  },
]);

export default router;
