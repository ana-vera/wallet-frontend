import { Routes, Route } from 'react-router-dom'
import {
  Dashboard,
  CreateCategory,
  Wallet,
  Budget
} from '@/pages'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<CreateCategory />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/budget' element={<Budget />} />

    </Routes>
  )
}
export default RouterIndex
