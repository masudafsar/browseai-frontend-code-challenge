import {Card, Table, TableDataRowPropsType} from "../../components";

export interface ReviewPagePropsTypes {
}

export function ReviewPage({}: ReviewPagePropsTypes) {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title title='Review CSV File'/>
      </Card.Header>
      <Card.Body>
        <Table data={[]}/>
      </Card.Body>
    </Card>
  );
}
