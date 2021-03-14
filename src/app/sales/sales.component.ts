import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';



@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  @Input() potatoes: Array<Object>;

  columnDefs = [
    {
      headerName: 'Product ID',
      children: [
        {
          headerName: '',
          field: 'productID',
          sortable: true,
          suppressMovable: true,
          maxWidth: 150
        }
      ]
    },
    {
      headerName: 'Product Name',
      children: [
        {
          headerName: '',
          field: "productName",
          sortable: true,
          suppressMovable: true,
          minWidth: 150
        }
      ],
    },{
      headerName: 'Sales',
      children: [
        {
          field: "salesQ1",
          sortable: true,
          suppressMovable: true,
          minWidth: 100
        },{
          field: "salesQ2",
          sortable: true,
          suppressMovable: true,
          minWidth: 100
        },{
          field: "salesQ3",
          sortable: true,
          suppressMovable: true,
          minWidth: 100
        },{
          field: "salesQ4",
          sortable: true,
          suppressMovable: true,
          minWidth: 100
        }
      ]
    },{
      headerName: 'Total sales',
      pinned: 'right',
      valueGetter: params => {
        return params.data.salesQ1 + params.data.salesQ2 + params.data.salesQ3 + params.data.salesQ4
      },
      lockPosition: true,
      suppressMovable: true
    }
  ];

  rowData: any[];


  constructor() { }

  ngOnInit(): void {
    this.rowData = this.potatoes['data'];
  }

   onFilterTextBoxChanged(e) {
    this.agGrid.api.setQuickFilter(e.target.value);
  }

}
