import logo from './logo.svg';
import './App.css';
import First from './components/first/First';

function App() {
  return (
    <div className="App">
        <div>
           <article>
              <h3>Lists</h3>
              <p>You see these types of blogs articles all over the internet:</p>
              <ul>
                <li>Top 10 How-To YouTube Videos</li>
                <li>10 Reasons Everybody is Talking About Game of Thrones</li>
                <li>5 Holiday Recipes You Have to Try</li>
              </ul>
              <p>It’s not a coincidence—there is a reason for this trend. Lists are a great way to streamline information in a digestible and easy-to-share format. When people don’t have time to sit down and read a full blog article, they can easily skim a list-style article and get all of the information they need. Lists are great traffic builders and are more likely to go viral than other types of articles. Bottom line? People like reading lists! Case in point: You’re reading one right now, aren’t you?</p>
           </article>
        </div>
        <First></First>
    </div>
  );
}

export default App;
