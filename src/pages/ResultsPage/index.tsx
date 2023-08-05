import {useContext, useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Badge, Button, Card, EmptyList, Table} from "../../components";
import {ArrowLeftIcon} from "../../icons";
import {AppContext, type RowRendererType} from "../../contexts";
import {type ColorThemeType, type SearchCaseStatusType, type SearchCaseType} from "../../types";
import {ArrowRightIcon} from "../../icons/arrowRightIcon";
import {search} from "../../services";
import {humanReadableTimeSpan} from "../../utils/time";

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

const resultTexts: { [key in SearchCaseStatusType]: string } = {
  invalid: '',
  error: 'ERROR',
  idle: 'Queued',
  loading: 'Loading...',
  notFound: 'No repositories found',
  found: 'N repositories found',
}

export function ResultsPage({}: ResultsPagePropsTypes) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {searchCases, setSearchCases} = useContext(AppContext);
  const [currentSearchCase, setCurrentSearchCase] = useState<number>(0);
  const [fetchQueryAt, setFetchQueryAt] = useState<number>(Infinity)
  const [estimatedTime, setEstimatedTime] = useState<number>(Infinity);

  const queuedSearchCases = useMemo(() => searchCases.filter(item => item.status === 'idle'), [searchCases]);

  const searchQuery = useQuery(
    [...(searchCases[currentSearchCase] ? [
      searchCases[currentSearchCase].data.searchKeywords,
      searchCases[currentSearchCase].data.username,
      searchCases[currentSearchCase].data.context,
    ] : [])],
    () => search(searchCases[currentSearchCase].data),
    {
      staleTime: 0,
      enabled: Boolean(searchCases[currentSearchCase]),
    },
  );

  useEffect(() => {
    queryClient.clear();
    setFetchQueryAt(Date.now);
  }, []);

  useEffect(() => {
    const searchCase = searchCases[currentSearchCase];
    if (!searchCase) return;
    if (searchQuery.isLoading || searchQuery.isFetching) {
      searchCase.status = 'loading';
    } else if (searchQuery.isSuccess) {
      searchCase.count = searchQuery.data?.data?.total_count || 0;
      searchCase.status = searchCase.count > 0 ? 'found' : "notFound";
      setEstimatedTime(Date.now() - fetchQueryAt);
    } else if (searchQuery.isError) {
      searchCase.status = 'error';
    } else {
      searchCase.status = 'idle';
    }
    setSearchCases(prevState => {
      const next = [...prevState];
      next[currentSearchCase] = {...searchCase};
      return next;
    });
  }, [searchQuery.status, setSearchCases]);

  useEffect(() => {
    const searchCase = searchCases[currentSearchCase];
    if (!searchCase) return;

    if (searchCase.status === "found" || searchCase.status === "notFound") {
      setCurrentSearchCase(prevState => prevState + 1);
      setFetchQueryAt(Date.now());
    }
  }, [currentSearchCase, searchCases]);

  const rowRenderer: RowRendererType<SearchCaseType> = function (data, index) {
    let resultText = resultTexts[data.status];
    if (data.status === 'found') resultText = `${data.count} ${data.count > 1 ? 'repositories' : 'repository'} found`;

    return (
      <Table.Row
        key={index}
        color={data.status === 'invalid' ? 'error' : undefined}
      >
        <Table.Cell>{data.data.searchKeywords}</Table.Cell>
        <Table.Cell>{data.data.username}</Table.Cell>
        <Table.Cell>{data.data.context}</Table.Cell>
        <Table.Cell>
          {resultText ? <Badge
            title={resultText}
            size='sm'
            variant='text'
            color={resultBadgeColors[data.status]}
            iconTrailing={data.status === 'found' && <ArrowRightIcon/>}
          /> : undefined}
        </Table.Cell>
      </Table.Row>
    );
  };

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
          <Card.Header.TitleAlt
            title={`Finish estimated time: ${humanReadableTimeSpan(estimatedTime * (queuedSearchCases?.length || 0))}`}
          />
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
  );
}
