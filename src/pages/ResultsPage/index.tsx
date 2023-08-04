import {useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";

import {Badge, Button, Card, EmptyList, Table} from "../../components";
import {ArrowLeftIcon} from "../../icons";
import {AppContext, RowRendererType} from "../../contexts";
import {type SearchCaseType} from "../../types";

export interface ResultsPagePropsTypes {
}

export function ResultsPage({}: ResultsPagePropsTypes) {
  const {searchCases} = useContext(AppContext);
  const navigate = useNavigate();

  const rowRenderer = useCallback<RowRendererType<SearchCaseType>>(function (data, index) {
    return (
      <Table.Row
        key={index}
        color={data.status === 'invalid' ? 'error' : undefined}
      >
        <Table.Cell>{data.data.searchKeywords}</Table.Cell>
        <Table.Cell>{data.data.username}</Table.Cell>
        <Table.Cell>{data.data.context}</Table.Cell>
        <Table.Cell>
          <Badge title={data.status} size='sm' variant='text'/>
        </Table.Cell>
      </Table.Row>
    );
  }, []);

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
                  <Table.HeaderCell value="Search Result"/>
                </Table.Row>
              )}
            />
          ) : (
            <EmptyList/>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}
