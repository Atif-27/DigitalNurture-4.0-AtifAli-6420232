import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

import { books, blogs, courses } from './data';

function App() {
  return (
    <div className="container">
      <div className="column">
        <h1>Course Details</h1>
        <CourseDetails courses={courses} />
      </div>

      <div className="column">
        <h1>Book Details</h1>
        <BookDetails books={books} />
      </div>

      <div className="column">
        <h1>Blog Details</h1>
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
