import {ChangeEvent, useCallback, useContext, useState} from "react";
import {GitHubIcon} from "../../icons";
import {Card, FilePicker} from "../../components";
import {AppContext} from "../../contexts";
import {SearchCaseInputDataType, SearchCaseType} from "../../types";
import {useNavigate} from "react-router-dom";

export interface PickerPagePropsTypes {
}

export function PickerPage({}: PickerPagePropsTypes) {
  const {setSearchCases} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const pickFileHandler = useCallback(async function (event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) return;
    const reader = new FileReader();
    reader.onloadstart = async function () {
      setIsLoading(true);
      setSearchCases([]);
    }
    reader.onload = async function (event) {
      const rawText = event.target?.result;
      if (typeof rawText !== "string") return;
      const lines = rawText.split('\n').map(line => line.replace('\r', ''));
      const cases: SearchCaseType[] = [];
      const uniqueLines = new Set<string>();

      lines.forEach((line, lineIndex) => {
        const isDuplicate = uniqueLines.has(line);
        if (!isDuplicate) uniqueLines.add(line);
        const [searchKeywords, username, context] = line.split(',');
        const data: SearchCaseInputDataType = {
          searchKeywords,
          username,
          context,
        };
        const searchCase: SearchCaseType = {
          data: {...data},
          results: [],
          status: data.searchKeywords && !isDuplicate ? "idle" : "invalid",
        };
        cases.push(searchCase);
      });
      setSearchCases(cases);
      setIsLoading(false);
      navigate('/review');
    }
    reader.readAsText(event.target.files?.[0]);
  }, [setSearchCases]);

  return (
    <div className="py-24 flex flex-col h-screen">
      <Card>
        <Card.Header>
          <Card.Header.Icon icon={<GitHubIcon/>}/>
          <Card.Header.Title
            title='Github Repository Finder'
            supportingText='Please choose a CSV file which contains Search Keywords, Username and Context.'
          />
        </Card.Header>
        <Card.Body>
          <div className="p-6 pt-4">
            <FilePicker
              disabled={isLoading}
              onChange={pickFileHandler}
              accept=".csv"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
