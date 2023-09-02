import { NewRecord, Categories, History } from '../components'

const Wallet = () => {
  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col'> <Categories /> </div>
        <div className='col'> <NewRecord /> </div>
        <div className='col'> <History /></div>
      </div>
    </div>
  )
}
export default Wallet
