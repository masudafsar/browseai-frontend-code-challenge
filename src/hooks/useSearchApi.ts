import {useQuery, useQueryClient} from "@tanstack/react-query";
import {search} from "../services";
import {useContext, useEffect, useMemo, useState} from "react";
import {AppContext} from "../contexts";

export function useSearchApi() {
  const queryClient = useQueryClient();
  const {searchCases, setSearchCases} = useContext(AppContext);

  const [currentSearchCase, setCurrentSearchCase] = useState<number>(0);
  const [fetchQueryAt, setFetchQueryAt] = useState<number>(Infinity)
  const [estimatedTime, setEstimatedTime] = useState<number>(Infinity);

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

  const queuedSearchCases = useMemo(() => searchCases.filter(item => item.status === 'idle'), [searchCases]);

  return {searchCases, searchQuery, currentSearchCase, estimatedTime, queuedSearchCases}
}
