import {Card, Table, TableDataRowPropsType} from "../../components";

export interface ReviewPagePropsTypes {
  data: Array<TableDataRowPropsType>;
}

export function ReviewPage({data}: ReviewPagePropsTypes) {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title title='Review CSV File'/>
      </Card.Header>
      <Card.Body>
        <Table data={data}/>
      </Card.Body>
    </Card>
  );
}
