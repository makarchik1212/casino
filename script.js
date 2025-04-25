/* Основные стили */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    color: #fff;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #333;
    align-items: center;
}

header .logo img {
    width: 100px;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

main {
    padding: 20px;
}

.intro {
    text-align: center;
    margin-bottom: 50px;
}

.intro h1 {
    font-size: 36px;
    color: #00c8ff;
}

button {
    background-color: #00c8ff;
    color: #fff;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #009bb3;
}

.cases {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}

.case-container {
    display: flex;
}

.case {
    background-color: #222;
    padding: 20px;
    text-align: center;
    margin: 0 10px;
    border-radius: 8px;
    width: 200px;
}

.case img {
    width: 100%;
    border-radius: 8px;
}

.case h3 {
    font-size: 20px;
    margin-top: 10px;
}

.upgrade {
    text-align: center;
    margin-top: 50px;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: #bbb;
}

