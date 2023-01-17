import React from 'react'

const ExampleApp = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <header className='bg-blue-500 text-white p-4'>
        <h1 className='text-xl font-bold'>Example App</h1>
      </header>
      <main className='container mx-auto p-4'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-white rounded-lg p-4'>
            <p className='text-lg'>Column 1</p>
          </div>
          <div className='bg-white rounded-lg p-4'>
            <p className='text-lg'>Column 2</p>
          </div>
          <div className='bg-white rounded-lg p-4'>
            <p className='text-lg'>Column 3</p>
          </div>
        </div>
      </main>
      <footer className='bg-blue-500 text-white p-4'>
        <p className='text-sm'>Copyright ©2022 Example App</p>
      </footer>
    </div>
  )
}

export default ExampleApp
