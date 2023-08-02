import {ChangeEventHandler} from "react";
import {GitHubIcon} from "../../icons/githubIcon";
import {Card, FilePicker} from "../../components";

export interface PickerPagePropsTypes {
  setSelectedFile: ChangeEventHandler<HTMLInputElement>;
}

export function PickerPage({setSelectedFile}: PickerPagePropsTypes) {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Icon icon={<GitHubIcon/>}/>
        <Card.Header.Title
          title='Github Repository Finder'
          supportingText='Please choose a CSV file which contains Search Keywords, Username and Context.'
        />
      </Card.Header>
      <Card.Body>
        <FilePicker onPickFile={setSelectedFile}/>
      </Card.Body>
    </Card>
  );
}
