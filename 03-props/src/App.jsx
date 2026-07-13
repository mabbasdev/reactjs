import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Haris' age={129} img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" />
      <Card user='Abbas' age={20} img="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=150&auto=format&fit=crop&q=80](https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=150&auto=format&fit=crop&q=80" />
      <Card user='Asif' age={22} img="https://images.unsplash.com/photo-1740252117012-bb53ad05e370?w=150&auto=format&fit=crop&q=80](https://images.unsplash.com/photo-1740252117012-bb53ad05e370?w=150&auto=format&fit=crop&q=80" />
    </div>
  )
}

export default App
