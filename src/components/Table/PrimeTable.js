
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { Flip, toast } from 'react-toastify';
import axios from 'axios';


import "primereact/resources/themes/arya-blue/theme.css";
//core

import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

export default function PrimeTable(props) {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [selectedCustomers, setSelectedCustomers] = useState([]);


  const token = JSON.parse(localStorage.user).tokens.access.token;
  const notify = (message) => toast(message, {
    position: "top-right",
    autoClose: 2000,
    // hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    // progress: undefined,
    theme: "light",
    transition: Flip,
    });

    useEffect(() => {
      async function getRes(){
        try {
          const res = await axios({
            method: "GET",
            headers : {authentication : `Bearer ${token}`},
            withCredentials: false,
            url: `${process.env.REACT_APP_BASE_URL}/category/getCategories`,
          })
          setCustomers(res.data.results)
          console.log(res)
        } catch (error) {
          notify(error.message)
         console.log(error) 
        }
          initFilters();
      } 
      getRes()
    }, [props]);

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-UK', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <>
            {/* <div className="flex flex-wrap justify-content-end gap-2">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
        </div> */}
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
            </>
        );
    };

    const handleEdit = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                {/* <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" /> */}
                <span>{option.name}</span>
            </div>
        );
    };
    const handleDelete = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                {/* <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" /> */}
                <span>{option.name}</span>
            </div>
        );
    };


const actionBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <Button severity="success" onClick={()=> handleEdit(rowData)}> Edit </Button>
            <Button severity="success" onClick={()=> handleDelete(rowData)}>Delete </Button>
        </React.Fragment>
    );
};
const header = renderHeader();

    return (
        <>
      <div className="card">
        <DataTable value={customers}  paginator header={header} rows={10} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
         dataKey="_id"
        // FOR ROW SELECTION
         selectionMode="checkbox" selection={selectedCustomers}
        filters={filters} filterDisplay="menu" globalFilterFields={['name']}
        emptyMessage="Insured Member not found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" 
        // rowExpansionTemplate={rowExpansionTemplate}
        >
            
        <Column header="S.No" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '15rem' }} />
        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '30rem' }}></Column> 
        </DataTable>
      </div>
      </>
    );
}
        