# Experiment 2: Designing Static Web Pages for an Online Bookstore

## Objective
Design three static web pages for an online bookstore. The pages include:
1. **Home Page**
2. **Login Page**
3. **Catalogue Page**

Each page is designed using HTML and contains the necessary elements and layout, organized within three frames.

## Brief Theory

In this experiment, the following important HTML tags are utilized:

### 1. `<form>` Tag
- Used to create the **login page**.
- This tag structures a form where users can input their credentials, such as username and password.

### Example:
```html
<form action="/submit_login" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"><br><br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Login">
</form>
```

### 2. `<a>` Tag
- Used to create **links** between the home, login, and catalogue pages.
- This tag helps users navigate from one page to another.

### Example:
```html
<a href="login.html">Login</a>
<a href="catalogue.html">Catalogue</a>
```

### 3. `<img>` Tag
- Used to add **images** to the webpage, such as book covers, logos, or banners.

### Example:
```html
<img src="book_cover.jpg" alt="Book Cover" width="200" height="300">
```

## Structure
The project structure includes:
- `index.html` (Home Page)
- `login.html` (Login Page)
- `catalogue.html` (Catalogue Page)
- CSS files for styling (optional)
- Images folder for storing image assets

---

This experiment provides an introduction to creating a multi-page static website with a simple navigation system using HTML.
