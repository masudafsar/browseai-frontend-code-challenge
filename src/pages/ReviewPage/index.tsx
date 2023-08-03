import {Card, Table, TableDataRowPropsType} from "../../components";
import {useContext, useMemo} from "react";
import {AppContext} from "../../contexts/appContext";

export interface ReviewPagePropsTypes {
}

export function ReviewPage({}: ReviewPagePropsTypes) {
  const {searchCases} = useContext(AppContext);

  const tableData = useMemo(
    () => searchCases.map<TableDataRowPropsType>(item => ({
      data: {...item.data},
      color: item.status === "invalid" ? 'error' : undefined,
    })),
    [searchCases]
  );

  return (
    <Card>
      <Card.Header>
        <Card.Header.Title title='Review CSV File'/>
      </Card.Header>
      <Card.Body>
        <Table data={tableData}/>
      </Card.Body>
    </Card>
  );
}
