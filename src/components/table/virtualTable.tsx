import {useContext, useRef} from "react";
import {FixedSizeList} from "react-window";
import {TableContext} from "../../contexts";
import AutoSizer from "react-virtualized-auto-sizer";
import {InnerVirtualTable} from "./innerVirtualTable";

export interface VirtualTablePropsType {
}

export function VirtualTable({}: VirtualTablePropsType) {
  const listRef = useRef<FixedSizeList | null>();
  const {rowRenderer, data, setTop, rowHeight} = useContext(TableContext);

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
          itemSize={rowHeight}
          itemData={data}
        >
          {({index, data}) => rowRenderer(data[index], index)}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
}