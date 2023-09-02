const NewRecord = () => {
  return (

    <form className='d-flex flex-column' action=''>

      {/* ----- New Record // Transfer ------ */}
      <div className='btn-group btn-group-lg' role='group' aria-label='Large radio toggle button group'>
        <input type='radio' className='btn-check' name='btnradio' id='btnradio1' autoComplete='off' />
        <label className='btn btn-outline-primary' htmlFor='btnradio1'>New record</label>
        <input type='radio' className='btn-check' name='btnradio' id='btnradio2' autoComplete='off' />
        <label className='btn btn-outline-primary' htmlFor='btnradio2'>Transfer</label>

      </div>
      <div className='input-group input-group-lg mt-5'>
        <span className='input-group-text' id='inputGroup-sizing-lg'>$</span>
        <input type='text' className='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-lg' />
      </div>

      <div className='d-flex justify-content-between align-items-center mt-5'>
        <label className='mx-4' htmlFor=''>Select category</label>
        <div className='dropdown'>
          <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
            Dropdown button
          </button>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'><a className='dropdown-item' href='#'>Action</a></li>
            <li><a className='dropdown-item' href='#'>Another action</a></li>
            <li><a className='dropdown-item' href='#'>Something else here</a></li>
          </ul>
        </div>
      </div>

      <div className='d-flex justify-content-between align-items-center mt-5'>
        <label className='mx-4' htmlFor=''>Select a template</label>
        <div className='dropdown'>
          <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
            Dropdown button
          </button>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'><a className='dropdown-item' href='#'>Action</a></li>
            <li><a className='dropdown-item' href='#'>Another action</a></li>
            <li><a className='dropdown-item' href='#'>Something else here</a></li>
          </ul>
        </div>
      </div>

    </form>
  )
}
export default NewRecord
