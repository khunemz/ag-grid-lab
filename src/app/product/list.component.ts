import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllCommunityModules, GridApi, Module } from '@ag-grid-community/all-modules';
import { ButtonCellRendererComponent } from '../shared/button/button-cell-renderer.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public gridApi;
  public gridColumnApi;

  public modules: Module[] = AllCommunityModules;
  public rowData: any[];
  public columnDefs: any;
  public defaultColDef: any;
  public getRowNodeId;
  public frameworkComponents: any;
  public isEditable: boolean;
  
  constructor(private http: HttpClient) {
  
    this.columnDefs = [
      { field: 'make' },
      { field: 'model' },
      {
        field: 'price',
        filter: 'agNumberColumnFilter',
      },
      { 
        field: 'athlete', 
        cellRenderer: 'btnCellRenderer', 
        cellRendererParams: {
          clicked: function(field) {
            // console.log(this.isEditable);
            // this.isEditable = !this.isEditable;
            console.log(this.columnDefs);
            // this.gridApi.setColumnDefs({editable: true })
            alert(field);
          }
        },
        editable: false ,
        minWidth: 150
      },  
    ];
    this.frameworkComponents = {
      btnCellRenderer: ButtonCellRendererComponent
    };
    this.defaultColDef = {
      flex: 1,
      editable: this.isEditable,
      sortable: true,
      filter: true,
    };
    this.getRowNodeId = function (data) {
      return data.id;
    };

  }

  
  ngOnInit(): void {
    this.rowData = [
      {
        id: 'aa',
        make: 'Toyota',
        model: 'Celica',
        price: 35000,
      },
      {
        id: 'bb',
        make: 'Ford',
        model: 'Mondeo',
        price: 32000,
      },
      {
        id: 'cc',
        make: 'Porsche',
        model: 'Boxter',
        price: 72000,
      },
      {
        id: 'dd',
        make: 'BMW',
        model: '5 Series',
        price: 59000,
      },
      {
        id: 'ee',
        make: 'Dodge',
        model: 'Challanger',
        price: 35000,
      },
      {
        id: 'ff',
        make: 'Mazda',
        model: 'MX5',
        price: 28000,
      },
      {
        id: 'gg',
        make: 'Horse',
        model: 'Outside',
        price: 99000,
      },
    ];
  }


  updateSort() {
    this.gridApi.refreshClientSideRowModel('sort');
  }

  updateFilter() {
    this.gridApi.refreshClientSideRowModel('filter');
  }

  setPriceOnToyota() {
    var rowNode = this.gridApi.getRowNode('aa');
    var newPrice = Math.floor(Math.random() * 100000);
    rowNode.setDataValue('price', newPrice);
  }

  setDataOnFord() {
    var rowNode = this.gridApi.getRowNode('bb');
    var newPrice = Math.floor(Math.random() * 100000);
    var newModel = 'T-' + Math.floor(Math.random() * 1000);
    var newData = {
      id: 'bb',
      make: 'Ford',
      model: newModel,
      price: newPrice,

    };
    rowNode.setData(newData);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }


  onBtStartEditing(key, char, pinned , i) {
    this.gridApi.setFocusedCell(i, 'lastName', pinned);
    this.gridApi.startEditingCell({
      rowIndex: i,
      colKey: 'lastName',
      rowPinned: pinned,
      keyPress: key,
      charPress: char,
    });
  }
}
