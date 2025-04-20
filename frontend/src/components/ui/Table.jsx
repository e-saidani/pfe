/** @format */

import React from "react";

function Table(props) {
  return (
    <div className="overflow-hidden rounded-xl border  border-gray-200 bg-white">
      <table >
        <thead className="border-b border-gray-100">
          <tr>
            {props.columns.map((column, index) => (
              <th
                className="px-5 py-3 font-medium text-gray-500 text-start w-fit"
                key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {props.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {props.columns.map((column, colIndex) => (
                <td className=" px-5 py-4 sm:px-6 text-start" key={colIndex}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
