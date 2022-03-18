import logo from './logo.svg';
import './App.css';
import First from './components/first/First';
import Blog from './components/blog/Blog';
import Mobile from './components/mobile/Mobile';

function App() {
  return (
    <div className="App">
        <div>
           <article className='blog'>
              <h3>Lists</h3>
              <h2 >learning with js object</h2>
              <p style={{color:'white', padding: '30px',background:'black'}}>You see these types of blogs articles all over the internet:</p>
              <ul>
                <li>Top 10 How-To YouTube Videos</li>
                <li>10 Reasons Everybody is Talking About Game of Thrones</li>
                <li>5 Holiday Recipes You Have to Try</li>
              </ul>
              <p>It’s not a coincidence—there is a reason for this trend. Lists are a great way to streamline information in a digestible and easy-to-share format. When people don’t have time to sit down and read a full blog article, they can easily skim a list-style article and get all of the information they need. Lists are great traffic builders and are more likely to go viral than other types of articles. Bottom line? People like reading lists! Case in point: You’re reading one right now, aren’t you?</p>
           </article>
        </div>
        <Blog heading={"This is First component."} author={"Anamul haque"}/>
        <Blog heading={"This is second component."} author={"Raju Ahmed"}/>
        <Blog heading={"This is third component."} author={"Faruk Hossain"}/>
        <First></First>
        <Mobile/>
    </div>
  );
}

export default App;
