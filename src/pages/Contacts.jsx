import React from 'react'

const Contacts = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 flex flex-col'>
        <h1 className='head-text gap-9'>Hello! <span className='blue-gradient_text font-semibold drop-shadow '>Contact Us</span></h1>
        <div className='mt-5 text-slate-500 flex gap-2 flex-col'>
          <h1><strong>Email: </strong>Hunneyhunney27@gmail.com</h1>
          <h1><strong>Phone: </strong>888xxxxxxxx</h1>

      </div>
      </div>
    </section>
  )
}

export default Contacts
