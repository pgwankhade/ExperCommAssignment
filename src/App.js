import './App.css';
import NewsCardList from './components/NewsCardList'
import VisitorInfo from './components/VisitorInfo'
import VisitorList from './components/VisitorList'
import Navbar from './components/NavBar'
import { useState, useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  const [NewsList, setNewsList] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-03-20&sortBy=publishedAt&amp&apiKey=890589b7066341a5953729e92e3634b7')
      .then(response => response.json())
      .then(news => setNewsList(news.articles))
  }, [])

  return (
    <>
   
      <HashRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" name="news" render={props => <NewsCardList news={NewsList} />} />
        <Route path="/VisitorForm" name="visitor info" render={props => <VisitorInfo {...props}  />} />
        <Route path="/VisitorList" name="visitor list" render={props => <VisitorList {...props} />} />
      </Switch>
      </HashRouter>
    </>
  );
}

export default App;
