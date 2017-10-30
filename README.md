# MY READS
MyReads project, creates a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## How to load the App
The project uses Node.js and the Create-React-App starter. If you do not have Node installed, you can download it from here: [Node.js](https://nodejs.org/en/download)

Once Node is installed, go to the directory where you want to store the app

**git clone https://github.com/chaudharyneha/react-nd-udacity-myread.git**
**npm install**

After all dependencies has been installed, you can launch the app with-

**npm start**

A new browser window automatically opens up displaying the app. If it doesn't, go to http://localhost:3000/ in your browser window.

## How to use the App
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

 --> Currently Reading
 --> Want to Read
 --> Read
 
 Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.
 
 The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.
The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you will instantly see all of the selections you made on the search page in your library.
