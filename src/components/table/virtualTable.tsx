import {useContext, useRef} from "react";
import {FixedSizeList} from "react-window";
import {TableContext} from "../../contexts";
import AutoSizer from "react-virtualized-auto-sizer";
import {TableDataRow} from "../tableDataRow";
import {InnerVirtualTable} from "./innerVirtualTable";

export function VirtualTable() {
  const listRef = useRef<FixedSizeList | null>();
  const {data, setTop} = useContext(TableContext);

  return (
    <AutoSizer>
      {({width, height}) => (
        <FixedSizeList
          ref={el => (listRef.current = el)}
          width={width}
          height={height}
          innerElementType={InnerVirtualTable}
          onItemsRendered={props => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore private method access
            const style = listRef.current?._getItemStyle?.(props.overscanStartIndex);
            setTop(style?.top || 0);
          }}
          itemCount={data.length}
          itemSize={80}
        >
          {({index}) => {
            return <TableDataRow key={index} data={data[index].data} color={data[index].color}/>
          }}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
}