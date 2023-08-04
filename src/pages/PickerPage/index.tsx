import {ChangeEvent, useCallback, useContext, useState} from "react";
import {GitHubIcon} from "../../icons";
import {Card, FilePicker} from "../../components";
import {AppContext} from "../../contexts";
import {useNavigate} from "react-router-dom";
import {rawTextToSearchCases} from "../../utils/searchCase";

export interface PickerPagePropsTypes {
}

export function PickerPage({}: PickerPagePropsTypes) {
  const {setSearchCases} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const pickFileHandler = useCallback(function (event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const rawText = event.target?.result;

      setSearchCases(typeof rawText === "string" ? rawTextToSearchCases(rawText) : []);

      setIsLoading(false);
      navigate('/review');
    }

    setIsLoading(true);
    setSearchCases([]);
    reader.readAsText(file);
  }, [setSearchCases, setIsLoading]);

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
