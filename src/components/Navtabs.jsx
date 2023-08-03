import { Link } from 'react-router-dom'

const Navtabs = () => {
  return (
    <>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <Link to='/wallet' className='nav-link active' id='wallet-tab' data-toggle='tab' href='#wallet' role='tab' aria-controls='wallet' aria-selected='true'>Wallet</Link>
        </li>
        <li className='nav-item'>
          <Link to='/budget' className='nav-link' id='budget-tab' data-toggle='tab' href='#budget' role='tab' aria-controls='budget' aria-selected='false'>Budget</Link>
        </li>
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div className='tab-pane fade show active' id='wallet' role='tabpanel' aria-labelledby='wallet-tab'>...</div>
        <div className='tab-pane fade' id='Budget' role='tabpanel' aria-labelledby='budget-tab'>...</div>
      </div>

    </>

  )
}
export default Navtabs
