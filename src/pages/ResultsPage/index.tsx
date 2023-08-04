import {Button, Card} from "../../components";
import {ArrowLeftIcon} from "../../icons";
import {useNavigate} from "react-router-dom";

export interface ResultsPagePropsTypes {
}

export function ResultsPage({}: ResultsPagePropsTypes) {
  // const {searchCases} = useContext(AppContext);
  const navigate = useNavigate();

  /*const tableData = useMemo(
    () => searchCases.map<TableDataRowPropsType>(item => ({
      data: {...item.data},
      color: item.status === "invalid" ? 'error' : undefined,
    })),
    [searchCases]
  );*/

  return (
    <div className="pt-16 pb-24 flex flex-col h-screen">
      <Button
        title="Upload New CSV"
        variant="text"
        size="md"
        className="mb-3"
        iconLeading={<ArrowLeftIcon/>}
        onClick={() => navigate('/')}
      />
      <Card fillHeight>
        <Card.Header>
          <Card.Header.Title title='Search Results'/>
        </Card.Header>
        <Card.Body>
          {/*<Table data={searchCases}/>*/}
        </Card.Body>
      </Card>
    </div>
  )
}
