import { Grommet } from 'grommet'
import Nav from '../nav'

export default function Layout({ user, setUser, children }) {
  return (
    <Grommet plain>
      <div className="container mx-auto">
        <Nav user={user} setUser={setUser} />
        {children}
      </div>
    </Grommet>
  )
}
