import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import "../styles/table.css"

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};
const Table = () => {
  const [rowData] = useState([
    { invoice: "M063592DR2", date: "08.04.2021", description1: "Code 5928MD01" ,status: "Completed", description2: "$2500.00"  },
    { invoice: "M063592DR2", date: "08.04.2021", description1: "Code 5928MD01" ,status: "Completed", description2: "$2500.00"  },
    { invoice: "M063592DR2", date: "08.04.2021", description1: "Code 5928MD01" ,status: "Completed", description2: "$2500.00"  },
    { invoice: "M063592DR2", date: "08.04.2021", description1: "Code 5928MD01" ,status: "Completed", description2: "$2500.00"  },
    { invoice: "M063592DR2", date: "08.04.2021", description1: "Code 5928MD01" ,status: "Completed", description2: "$2500.00"  },
  ]);

  const defaultColDef = {
    sortable: true,
    headerCheckboxSelection: isFirstColumn,
    checkboxSelection: isFirstColumn,
    headerComponentParams: {
      template:
        `<div class="ag-cell-label-container" role="presentation">
      <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>
      <div ref="eLabel" class="ag-header-cell-label" role="presentation">
      <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>
      <span id="sorting-icons">
      <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>
      <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>
      </span>

          <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>
      </div>
  </div>`
    }
  };

  const [columnDefs] = useState([
    { field: 'invoice', headerName: 'Invoice ID',  type: 'leftAligned', flex: 1 },
    { field: 'date', headerName: 'Date', type: 'leftAligned', flex: 1 },
    { field: 'description1', headerName: 'Description',  type: 'leftAligned', flex: 1},
    { field: 'status',headerName: 'Status',  type: 'centerAligned', flex: 1,  cellClass: 'status-cell'},
    { field: 'description2',headerName: 'Description',  type: 'leftAligned', flex: 1},
  ]);

  const icons = {
    sortAscending: `<i class="fa-solid fa-angle-up"></i>`,
    sortDescending: `<i   class="fa-solid fa-angle-down"></i>`,
  };

  return (
    <div className="ag-theme-material" style={{ height: 400}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection={'multiple'}
        icons={icons}
        rowHeight={60} 
      >
      </AgGridReact>
    </div>
  );
};

export default Table;