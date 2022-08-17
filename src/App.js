import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'

export default function App() {
  return ( 
    <div>
      <h1>Glue 5 lab</h1>
      <nav 
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem'
          }}
      >
        <Link to='/main'>Main</Link> |{''}
        <Link to='/contact'>Contact</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}