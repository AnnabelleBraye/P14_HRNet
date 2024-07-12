// types/react-table-component-package/index.d.ts
declare module 'react-table-component-package' {
  import { FC } from 'react';
  import { TableProps, ColType } from 'react-table-component-package/dist/react-table-component-package.es.js';

  export const Table: FC<TableProps>;
  export { TableProps, ColType };
}
