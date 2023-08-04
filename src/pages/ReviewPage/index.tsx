import {Button, Card, Table, TableDataRowPropsType, TableHeaderColumn} from "../../components";
import {useContext, useMemo} from "react";
import {AppContext} from "../../contexts";
import {ArrowLeftIcon} from "../../icons";
import {useNavigate} from "react-router-dom";
import {keyToText} from "../../utils/string";

export interface ReviewPagePropsTypes {
}

export function ReviewPage({}: ReviewPagePropsTypes) {
  const {searchCases, setSearchCases} = useContext(AppContext);
  const navigate = useNavigate();

  const tableData = useMemo(
    () => searchCases.map<TableDataRowPropsType>(item => ({
      data: {...item.data},
      color: item.status === "invalid" ? 'error' : undefined,
    })),
    [searchCases]
  );

  const invalidSearchCount = useMemo(
    () => searchCases.filter(item => item.status === 'invalid').length,
    [searchCases]
  );

  function removeInvalidCases() {
    setSearchCases(prev => prev.filter(item => item.status !== 'invalid'));
  }

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
          <Card.Header.Title title='Review CSV File'/>
          <Card.Header.Actions>
            {invalidSearchCount > 0 ? <Button
              title={`Delete ${invalidSearchCount} ${invalidSearchCount === 1 ? 'Error' : 'Errors'}`}
              color="warning"
              variant="outline"
              onClick={removeInvalidCases}
            /> : undefined}
            <Button
              title="Start Searching"
              color="primary"
              disabled={searchCases.length === 0 || invalidSearchCount !== 0}
              variant="fill"
            />
          </Card.Header.Actions>
        </Card.Header>
        <Card.Body>
          {tableData.length > 0 ? (
            <Table
              data={tableData}
              header={(
                <tr>
                  {Object.entries(tableData[0]?.data || {}).map(([key, _]) => (
                    <TableHeaderColumn key={key} value={keyToText(key)}/>
                  ))}
                </tr>
              )}
            />
          ) : (
            <p>empty</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
