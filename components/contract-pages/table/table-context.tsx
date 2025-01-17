import { createContext, useCallback, useContext, useState } from "react";
import invariant from "tiny-invariant";

type ExpansionType = "list" | "transfer" | "settings" | "rewards";
interface IExpandedSettings {
  tokenId: string;
  type: ExpansionType;
}

export interface ITableContext {
  expanded: IExpandedSettings | null;
  expandRow: (setting: IExpandedSettings) => void;
  closeAllRows: () => void;
}

export interface ITableContextSafe extends ITableContext {
  _insideProvider: true;
}

const TableContext = createContext({} as ITableContextSafe);

export function useTableContext(): ITableContext {
  const { _insideProvider, ...context } = useContext(TableContext);
  invariant(
    _insideProvider,
    "useTableContext must be used inside TableProvider",
  );
  return context;
}

export const TableProvider: React.FC = ({ children }) => {
  const [expanded, setExpanded] = useState<IExpandedSettings | null>(null);

  const expandRow = useCallback((setting: IExpandedSettings) => {
    setExpanded(setting);
  }, []);

  const closeAllRows = useCallback(() => {
    setExpanded(null);
  }, []);

  return (
    <TableContext.Provider
      value={{
        expanded,
        expandRow,
        closeAllRows,
        _insideProvider: true,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
