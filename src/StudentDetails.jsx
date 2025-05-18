import React, { useState } from 'react';
import studentsData from './data'; // Your static data file

function StudentDetails() {
  const [filters, setFilters] = useState({
    name: '',
    class: '',
    group: '',
    payment: '',
  });

  // Filter logic
  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    student.detail.class.toLowerCase().includes(filters.class.toLowerCase()) &&
    (filters.group === '' || student.group.includes(filters.group)) &&
    (filters.payment === '' || String(student.detail.payment) === filters.payment)
  );

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <h1 className='text-center my-5 text-3xl font-bold'>Student Chart List</h1>

      {/* Filters */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
        <input
          type='text'
          placeholder='Search by name'
          value={filters.name}
          onChange={e => setFilters({ ...filters, name: e.target.value })}
          className='border p-2 rounded'
        />
        <input
          type='text'
          placeholder='Search by class'
          value={filters.class}
          onChange={e => setFilters({ ...filters, class: e.target.value })}
          className='border p-2 rounded'
        />
        <select
          value={filters.group}
          onChange={e => setFilters({ ...filters, group: e.target.value })}
          className='border p-2 rounded'
        >
          <option value=''>All Groups</option>
          <option value='arts'>Arts</option>
          <option value='science'>Science</option>
          <option value='commerce'>Commerce</option>
        </select>
        <select
          value={filters.payment}
          onChange={e => setFilters({ ...filters, payment: e.target.value })}
          className='border p-2 rounded'
        >
          <option value=''>All Payments</option>
          <option value='true'>Done</option>
          <option value='false'>Not Done</option>
        </select>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='w-full border text-sm'>
          <thead>
            <tr className='bg-gray-200 text-center'>
              <th className='border px-2 py-1'>ID</th>
              <th className='border px-2 py-1'>Name</th>
              <th className='border px-2 py-1'>Roll</th>
              <th className='border px-2 py-1'>Class</th>
              <th className='border px-2 py-1'>Father/Mother</th>
              <th className='border px-2 py-1'>Groups</th>
              <th className='border px-2 py-1'>DOB</th>
              <th className='border px-2 py-1'>Payment</th>
              <th className='border px-2 py-1'>Address</th>
              <th className='border px-2 py-1'>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className='text-center'>
                <td className='border px-2 py-1'>{student.id}</td>
                <td className='border px-2 py-1'>{student.name}</td>
                <td className='border px-2 py-1'>{student.detail.roll}</td>
                <td className='border px-2 py-1'>{student.detail.class}</td>
                <td className='border px-2 py-1'>
                  {student.detail.fatherName} / {student.detail.motherName}
                </td>
                <td className='border px-2 py-1'>{student.group}</td>
                <td className='border px-2 py-1'>{student.detail.date}</td>
                <td className='border px-2 py-1'>
                  {student.detail.payment ? 'Done' : 'Not Done'}
                </td>
                <td className='border px-2 py-1'>
                  {student.address.city}/{student.address.village}
                </td>
                <td className='border px-2 py-1'>{student.address.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentDetails;
