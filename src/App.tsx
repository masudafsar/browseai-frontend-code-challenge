import {Octokit} from "octokit";
import {CurrentPageType, ResultTableDataType, ReviewTableDataType} from "./types";
import {TableDataRowPropsType} from "./components";
import {useCallback, useEffect, useState} from "react";
import {PickerPage, ReviewPage} from "./pages";
import {ResultsPage} from "./pages/ResultsPage";

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPageType>("PickerPage");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [reviewData, setReviewData] = useState<Array<ReviewTableDataType>>();
  const [resultData, setResultData] = useState<Array<ResultTableDataType>>();

  const parseCSV = useCallback(async (file: File) => {
    const text = await file.text();

    const parsed = text.split("\n").map((row) => {
      const [searchKeywords, username, context] = row.split(",");
      return {searchKeywords, username, context};
    });

    setReviewData(parsed);
  }, []);

  useEffect(() => {
    if (currentPage === "PickerPage" && selectedFile && !reviewData) {
      parseCSV(selectedFile);
    } else if (currentPage === "PickerPage" && reviewData) {
      setCurrentPage("ReviewPage");
    } else if (currentPage === "ReviewPage" && resultData) {
      setCurrentPage("ResultsPage");
    }
  }, [currentPage, selectedFile, parseCSV, reviewData, resultData]);

  const octokit = new Octokit({auth: "your_personal_access_tokens"});

  return (
    <div className="container mt-24">
      {currentPage === "PickerPage" && (
        <PickerPage setSelectedFile={event => setSelectedFile(event.target.files?.[0])}/>
      )}
      {currentPage === "ReviewPage" && reviewData && (
        <ReviewPage
          data={reviewData.map<TableDataRowPropsType>(item => ({data: item}))}
        />
        /*<Table
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
        />*/
      )}
      {currentPage === "ResultsPage" && (
        <ResultsPage/>
      )}
    </div>
  );
}

export default App;
