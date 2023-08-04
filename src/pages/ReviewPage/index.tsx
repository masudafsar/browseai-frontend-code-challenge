import {Button, Card, Table, TableDataRow, TableHeaderColumn} from "../../components";
import {useCallback, useContext, useMemo} from "react";
import {AppContext, RowRendererType} from "../../contexts";
import {ArrowLeftIcon} from "../../icons";
import {useNavigate} from "react-router-dom";
import {keyToText} from "../../utils/string";
import {SearchCaseType} from "../../types";

export interface ReviewPagePropsTypes {
}

export function ReviewPage({}: ReviewPagePropsTypes) {
  const {searchCases, setSearchCases} = useContext(AppContext);
  const navigate = useNavigate();

  const invalidSearchCount = useMemo(
    () => searchCases.filter(item => item.status === 'invalid').length,
    [searchCases]
  );

  const rowRenderer = useCallback<RowRendererType<SearchCaseType>>(function (data, index) {
    return (
      <TableDataRow
        key={index}
        data={data.data}
        color={data.status === 'invalid' ? 'error' : undefined}
      />
    );
  }, [])

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
          {searchCases.length > 0 ? (
            <Table
              data={searchCases}
              rowHeight={80}
              rowRenderer={rowRenderer}
              header={(
                <tr>
                  {Object.entries(searchCases[0]?.data || {}).map(([key, _]) => (
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
