import {useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";

import {Badge, Button, Card, EmptyList, Table} from "../../components";
import {ArrowLeftIcon} from "../../icons";
import {AppContext, type RowRendererType} from "../../contexts";
import {type ColorThemeType, type SearchCaseStatusType, type SearchCaseType} from "../../types";

export interface ResultsPagePropsTypes {
}

const resultBadgeColors: { [key in SearchCaseStatusType]: ColorThemeType } = {
  invalid: 'error',
  error: 'error',
  idle: 'primary',
  loading: 'warning',
  notFound: 'primary',
  found: 'success',
}

export function ResultsPage({}: ResultsPagePropsTypes) {
  const {searchCases} = useContext(AppContext);
  const navigate = useNavigate();

  const rowRenderer = useCallback<RowRendererType<SearchCaseType>>(function (data, index) {
    let resultText = '';
    switch (data.status) {
      case "invalid":
        resultText = 'INVALID';
        break;
      case "error":
        resultText = 'ERROR';
        break;
      case "loading":
        resultText = 'Loading...';
        break;
      case "notFound":
        resultText = 'No repositories found';
        break;
      case "found":
        resultText = `${data.results.length} ${data.results.length > 1 ? 'repositories' : 'repository'} found`;
        break;
      case "idle":
        resultText = 'Queued';
        break;
    }

    return (
      <Table.Row
        key={index}
        color={data.status === 'invalid' ? 'error' : undefined}
      >
        <Table.Cell>{data.data.searchKeywords}</Table.Cell>
        <Table.Cell>{data.data.username}</Table.Cell>
        <Table.Cell>{data.data.context}</Table.Cell>
        <Table.Cell>
          <Badge
            title={resultText}
            size='sm'
            variant='text'
            color={resultBadgeColors[data.status]}
          />
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
