import router from "./router";
import {RouterProvider} from "react-router-dom";
import {AppContextProvider} from "./providers";

function App() {
  // const octokit = new Octokit({auth: "your_personal_access_tokens"});

  return (
    <AppContextProvider>
      <div className="container">
        <RouterProvider router={router}/>
        {/*{currentPage === "PickerPage" && (
          <PickerPage setSelectedFile={event => setSelectedFile(event.target.files?.[0])}/>)}
        {currentPage === "ReviewPage" && reviewData && (
          <>
            <ReviewPage data={reviewData.map<TableDataRowPropsType>(item => ({data: item}))}/>
            <Table
              data={reviewData}
              title="Review"
              buttons={
                <>
                  <Button title="Delete rows with error"/>
                  <Button
                    title="Proceed"
                    onClick={() => {
                      reviewData.forEach((row) => {
                        octokit.rest.search
                          .repos({q: encodeURIComponent(row.searchKeywords)})
                          .then(({data: {total_count}}) => {
                            const result =
                              total_count > 0
                                ? total_count + " repositories found"
                                : "No repositories found";
                            setResultData((prevResultData) => [
                              ...(prevResultData ?? []),
                              {...row, searchResults: result}
                            ]);
                          });
                      });
                    }}
                  />
                </>
              }
            />
          </>
        )}
        {currentPage === "ResultsPage" && (
          <ResultsPage/>
        )}*/}
      </div>
    </AppContextProvider>
  );
}

export default App;
