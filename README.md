# Token-Manger-Bot
```html
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');

html {
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}

.h2 {
    font-size: 10;
}

body {
    font-size: 14px;
}

header {
    width: 100%;
    height: 100vh;
    background-color: #2b2f4b;
    color: #fff;
}

header #particles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

header .info-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    height: 100vh;
}

header .info-text h1 {
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Ubuntu';
}

header .info-text h3 {
    font-size: 1.5rem;
}

header .info-text .scroll {
    position: absolute;
    bottom: 20%;
    left: 50%;
    color: #fff;
    transform: translate(0, -50%);
    transition: all 0.5s;
}

header .info-text .scroll:hover {
    opacity: 0.7;
}

header .info-text .scroll::before {
    position: absolute;
    top: -16px;
    left: -16px;
    z-index: -1;
    content: '';
    width: 44px;
    height: 44px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    border-radius: 100%;
    animation: pulse 3s infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 0;
    }

    15%, 45% {
        opacity: 1;
    }

    60% {
        box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
        opacity: 0;
    }
}

#about,
#features,
#social-media {
    background-color: #2b2f4b;
    padding: 40px;
}

#about .header,
#features .header,
#social-media .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

#about .header h1,
#features .header h1,
#social-media .header h1 {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
}

#about .header a,
#features .header a,
#social-media .header a {
    text-decoration: none;
    font-size: 1.3em;
    color: #fff;
    border: 1px solid transparent;
    padding: 10px 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    border-radius: 6px;
    transition: all 0.3s ease;
}

#about .header a:hover,
#features .header a:hover,
#social-media .header a:hover {
    border-color: #fff;
    box-shadow: none;
}

#about .card,
#features .card,
#social-media .card {
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    border-radius: 20px;
    display: flex;
    gap: 30px;
    border: 1px solid transparent;
    transition: all 0.3s ease;
}

#about .card:hover,
#features .card:hover,
#social-media .card:hover {
    border-color: #fff;
    box-shadow: none;
}

#about .card img,
#social-media .card img {
    max-width: 200px;
    max-height: 200px;
}

#about .card .info,
#social-media .card .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

#about .card .info h1,
#features .card .info h1,
#social-media .card .info h1 {
    margin-bottom: 20px;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    font-family: 'Ubuntu';
}

#about .card .info p,
#features .card .info p,
#social-media .card .info p {
    color: #ccc;
    font-size: 1.1rem;
    line-height: 1.8rem;
}

#features .feature-cards,
#social-media .social-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
}

#features .feature-cards .card,
#social-media .social-icons a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 350px;
}

#features .feature-cards .card .info i,
#social-media .social-icons i {
    color: #fff;
    font-size: 8rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1.4rem;
}

#features .feature-cards .card .info h1,
#social-media .social-icons h1 {
    text-align: center;
}

#features .feature-cards .card .info p,
#social-media .social-icons p {
    font-size: 1.1rem;
}

.scroll-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #2b2f4b;
    color: #fff;
    border: 1px solid transparent;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    padding: 16px 18px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.3s ease;
}

.scroll-top:hover {
    border-color: #fff;
    box-shadow: none;
}

@media screen and (max-width: 720px) {
    header .info-text h1 {
        font-size: 4rem;
    }
    #social-media {
        background-color: #f4f4f4;
        /* Set your preferred background color */
        padding: 50px 0;
        /* Adjust the padding as needed */
    }

    .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .social-icons a {
        margin: 0 15px;
        /* Adjust the margin between icons */
        color: #333;
        /* Set the icon color */
        font-size: 24px;
        /* Set the icon size */
        transition: color 0.3s ease;
    }

    .social-icons a:hover {
        color: #007bff;
        /* Set the hover color */
    }

    header .info-text h3 {
        font-size: 1.1rem;
    }

    #about .card {
        flex-direction: column;
        align-items: center;
    }

    #about .card img {
        max-width: 150px;
        max-height: 150px;
    }
}
```
