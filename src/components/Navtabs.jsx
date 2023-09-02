import { Link } from 'react-router-dom'
import Wallet from '../pages/Wallet'
import Budget from '../pages/Budget'

const Navtabs = () => {
  return (
    <>
      <nav>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <button className='nav-link active' id='nav-wallet-tab' data-bs-toggle='tab' data-bs-target='#nav-wallet' type='button' role='tab' aria-controls='nav-wallet' aria-selected='true'>Wallet</button>
          <button className='nav-link' id='nav-budget-tab' data-bs-toggle='tab' data-bs-target='#nav-budget' type='button' role='tab' aria-controls='nav-budget' aria-selected='false'>Budget</button>
        </div>
      </nav>
      <div className='tab-content' id='nav-tabContent'>
        <div className='tab-pane fade show active' id='nav-wallet' role='tabpanel' aria-labelledby='nav-wallet-tab' tabIndex='0'> <Wallet /> </div>
        <div className='tab-pane fade' id='nav-budget' role='tabpanel' aria-labelledby='nav-budget-tab' tabIndex='0'> <Budget /> </div>
      </div>

      {/*    <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <Link to='/wallet' className='nav-link active' id='wallet-tab' data-toggle='tab' href='#wallet' role='tab' aria-controls='wallet' aria-selected='true'>Wallet</Link>
        </li>
        <li className='nav-item'>
          <Link to='/budget' className='nav-link' id='budget-tab' data-toggle='tab' href='#budget' role='tab' aria-controls='budget' aria-selected='false'>Budget</Link>
        </li>
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div className='tab-pane fade show active' id='wallet' role='tabpanel' aria-labelledby='wallet-tab'> <Wallet /> </div>
        <div className='tab-pane fade' id='Budget' role='tabpanel' aria-labelledby='budget-tab'> <Budget /> </div>
      </div> */}

    </>

  )
}
export default Navtabs
