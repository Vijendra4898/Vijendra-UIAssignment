import React, { useState } from "react";

const CustomerTable = ({ customers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  /**
   * Calculate the index range for the current page
   */
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);


  /**
   * Handle pagination
   * @param {*} pageNumber 
   * @returns 
   */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /**
   * Calculate total pages
   */
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4">
        <div className="overflow-x-auto">
          <div className="max-h-[400px] overflow-y-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Customer</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Month</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Points</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Total Points</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(({ name, rewards }, idx) =>
                  Object.entries(rewards.rewardsByMonth).map(([month, points], index) => (
                    <tr key={`${idx}-${month}`} className="hover:bg-gray-100 transition-colors">
                      {index === 0 && (
                        <td
                          className="border border-gray-300 px-4 py-2 font-medium"
                          rowSpan={Object.keys(rewards.rewardsByMonth).length}
                        >
                          {name}
                        </td>
                      )}
                      <td className="border border-gray-300 px-4 py-2">{month}</td>
                      <td className="border border-gray-300 px-4 py-2">{points}</td>
                      {index === 0 && (
                        <td
                          className="border border-gray-300 px-4 py-2 font-medium"
                          rowSpan={Object.keys(rewards.rewardsByMonth).length}
                        >
                          {rewards.totalPoints}
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            className={`px-4 py-2 rounded-md text-white ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
              }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
              }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
