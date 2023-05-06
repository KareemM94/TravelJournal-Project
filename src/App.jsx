import './App.css';
import Header from './components/header';
import Card from './components/card';
import data from './components/data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    )
  })
  
  
  
  return (
  <div className='container'>
      <Header />
      <div className='second-container'>
       {cards}
      </div>

  </div>
  )
}

export default App;
