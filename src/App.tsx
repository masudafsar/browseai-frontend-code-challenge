import * as classNames from "classnames";
import {Octokit} from "octokit";
import {CurrentPageType, ResultTableDataType, ReviewTableDataType} from "./types";
import {Button, Table} from "./components";
import {useCallback, useEffect, useState} from "react";

function App() {
  const [currentPage, setCurrentPage] =
    useState<CurrentPageType>("PickerPage");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [reviewData, setReviewData] =
    useState<Array<ReviewTableDataType>>();
  const [resultData, setResultData] =
    useState<Array<ResultTableDataType>>();

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
    <div className="flex flex-col items-center justify-center">
      {currentPage === "PickerPage" && (
        <input
          className={classNames(
            // button colors
            "file:bg-violet-50 file:text-violet-500 hover:file:bg-violet-100",
            // button shape and spacing
            "file:rounded-lg file:rounded-tr-none file:rounded-br-none",
            "file:px-4 file:py-2 file:mr-4 file:border-none",
            // overall input styling
            "hover:cursor-pointer border rounded-lg text-gray-400"
          )}
          type="file"
          onChange={(event) => setSelectedFile(event.target.files?.[0])}
          accept=".csv"
        />
      )}
      {currentPage === "ReviewPage" && reviewData && (
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
      )}
      {currentPage === "ResultsPage" && (
        <Table data={resultData} title="Results"/>
      )}
    </div>
  );
}

export default App;
