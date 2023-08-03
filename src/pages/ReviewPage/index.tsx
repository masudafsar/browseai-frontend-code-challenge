import {Button, Card, Table, TableDataRowPropsType} from "../../components";
import {useContext, useMemo} from "react";
import {AppContext} from "../../contexts/appContext";
import {ArrowLeftIcon} from "../../icons";
import {useNavigate} from "react-router-dom";

export interface ReviewPagePropsTypes {
}

export function ReviewPage({}: ReviewPagePropsTypes) {
  const {searchCases} = useContext(AppContext);
  const navigate = useNavigate();

  const tableData = useMemo(
    () => searchCases.map<TableDataRowPropsType>(item => ({
      data: {...item.data},
      color: item.status === "invalid" ? 'error' : undefined,
    })),
    [searchCases]
  );

  return (
    <div className="my-16">
      <Button
        title="Upload New CSV"
        variant="text"
        size="md"
        className="mb-3"
        iconLeading={<ArrowLeftIcon/>}
        onClick={() => navigate('/')}
      />
      <Card>
        <Card.Header>
          <Card.Header.Title title='Review CSV File'/>
        </Card.Header>
        <Card.Body>
          <Table data={tableData}/>
        </Card.Body>
      </Card>
    </div>
  );
}
