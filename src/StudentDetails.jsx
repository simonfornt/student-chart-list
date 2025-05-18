import React, { useState } from 'react';
import student from './data';

function StudentDetails() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter students based on name search (case-insensitive)
  const filteredStudents = student.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-center my-5 text-3xl font-bold">Student Chart List</h1>

      {/* Search Box */}
      <div className="mb-6 ">

        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-400 px-4 py-2 rounded-md w-sm text-sm "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Id</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Roll</th>
              <th className="border px-4 py-2">Class</th>
              <th className="border px-4 py-2">Father/Mother</th>
              <th className="border px-4 py-2">Groups</th>
              <th className="border px-4 py-2">DOB</th>
              <th className="border px-4 py-2">Payment</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="text-center">
                  <td className="border px-4 py-2">{student.id}</td>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.detail.roll}</td>
                  <td className="border px-4 py-2">{student.detail.class}</td>
                  <td className="border px-4 py-2">
                    {student.detail.fatherName}/{student.detail.motherName}
                  </td>
                  <td className="border px-4 py-2">{student.group}</td>
                  <td className="border px-4 py-2">{student.detail.date}</td>
                  <td className="border px-4 py-2">
                    {student.detail.payment ? 'Done' : 'Not Done'}
                  </td>
                  <td className="border px-4 py-2">
                    {student.address.city}/{student.address.village}
                  </td>
                  <td className="border px-4 py-2">{student.address.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-4 text-center" colSpan="10">
                  No student found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentDetails;
