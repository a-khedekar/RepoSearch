import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table'
import '../App.css';
import StickyTable from "react-sticky-table-thead"

function Table(props) {

    const data = props.tData;

    const columns = useMemo(
        () => [
            {
                Header: 'Owner',
                accessor: 'userName' // accessor is the "key" in the data
            },
            {
                Header: 'Project Name',
                accessor: 'projectName'

            },
            {
                Header: 'Description',
                accessor: 'description'

            },
            {
                Header: 'Created at',
                accessor: 'createdAt'

            },
            {
                Header: 'Updated at',
                accessor: 'updatedAt'

            },
            {
                Header: 'Visibility',
                accessor: 'visibility'

            },
        ]

        ,
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy)



    return (
        <div className="tablescroll">
            <StickyTable height={600}>
                {data.length > 0 && <table {...getTableProps()} style={{ border: 'solid 1px #2E2E2E', borderCollapse: 'collapse', marginLeft: '50px', marginRight: '50px', marginTop: '-2px', minWidth: '1340px' }}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        style={{
                                            borderBottom: 'solid 3px #BE0000',
                                            background: '#BE0000',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            marginTop: '10px',
                                            padding: '10px',


                                        }}
                                    >
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px #2E2E2E',
                                                    background: 'white',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
            </StickyTable>
        </div>


    )

}

export default Table;
