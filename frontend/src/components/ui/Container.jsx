import React from 'react'

function Container(props) {
  return (
    <div className='w-fit bg-white border rounded-2xl border-gray-200'>
      <div>
        <h3 className='px-6 py-5 text-base font-medium text-gray-800'>{props.title}</h3>
      </div>
      <div className='p-4 border-t border-gray-100 sm:p-6'>
        {props.element}
      </div>
    </div>
  );
}

export default Container