import {useCallback, useContext, useMemo} from "react";
import {useNavigate} from "react-router-dom";

import {Button, Card, Table} from "../../components";
import {AppContext, type RowRendererType} from "../../contexts";
import {ArrowLeftIcon} from "../../icons";
import {type SearchCaseType} from "../../types";
import {EmptyList} from "../../components";

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
      <Table.Row
        key={index}
        color={data.status === 'invalid' ? 'error' : undefined}
      >
        <Table.Cell>{data.data.searchKeywords}</Table.Cell>
        <Table.Cell>{data.data.username}</Table.Cell>
        <Table.Cell>{data.data.context}</Table.Cell>
      </Table.Row>
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
            <Table<SearchCaseType>
              data={searchCases}
              rowHeight={80}
              rowRenderer={rowRenderer}
              header={(
                <Table.Row>
                  <Table.HeaderCell value="Search Keywords"/>
                  <Table.HeaderCell value="Username"/>
                  <Table.HeaderCell value="Context"/>
                </Table.Row>
              )}
            />
          ) : (
            <EmptyList/>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
