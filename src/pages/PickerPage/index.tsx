import {ChangeEvent, useCallback, useContext, useState} from "react";
import {GitHubIcon} from "../../icons/githubIcon";
import {Card, FilePicker} from "../../components";
import {AppContext} from "../../contexts/appContext";
import {SearchCaseType} from "../../types";
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
      const cases: SearchCaseType[] = [];
      rawText.split('\n').forEach((line) => {
        const [searchKeywords, username, context] = line.split(',');
        const searchCase: SearchCaseType = {
          data: {
            searchKeywords,
            username,
            context,
          },
          results: [],
          status: "idle",
        };
        cases.push(searchCase);
      });
      setSearchCases(cases);
    }
    reader.readAsText(event.target.files?.[0]);
    setIsLoading(false);
    navigate('/review');
  }, [setSearchCases]);

  return (
    <div className="my-24">
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
