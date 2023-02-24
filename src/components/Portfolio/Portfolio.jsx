import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Todo from "../../img/todo.png";
import Login from "../../img/login.png";
import Blog from "../../img/blog.png";
import Money from "../../img/money.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
 <>
   <section class="recent-work" id="Project">
    <div class="container">
        <h1>My Recent Work</h1>

        <h3 style= {{ textAlign:"center" }}>  Credentials</h3><br /> <p style= {{ textAlign:"center" }}>   User: test123@gmail.com | Password: 12345 <br />
                              Admin: admin123@gmail.com | Password: 12345
        </p>


        <br /><br />
        <div class="projects">


          <div class="project">
            <div class="thubmnail">
            <img src={Todo} alt="" />
            </div>
            <h2>Women Dress Suggestion </h2>
            <p>
              Where users can select and save their favourites and also can do add
              their own dress.the four basic operations a Web application should be able to perform Create, Read, Update, and Delete. In such apps, users must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data. 
            </p>
            <div class="links">
              <a href="https://github.com/Abdulhadhi1/capstone-frontend" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Abdulhadhi1/capstone-backend" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://womendresssuggestion.netlify.app/login"
                class="btn btn-primary"
                target="_blank">View Project</a
              >
            </div>
            
            
          </div>
          
      
          <div class="project">
            <div class="thubmnail">
            




            <img src={Login} alt="" />




            </div>
            <h2>Chat App</h2>
            <p>
             A chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time. With a web or mobile chat app, users are able to receive the same engaging and lively interactions through custom messaging features, just as they would in person.
            </p>
            <div class="links">
              <a href="https://github.com/Abdulhadhi1/chat-app-frontend" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Abdulhadhi1/chat-app-backend" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://coruscating-marigold-1dfe69.netlify.app/"
                class="btn btn-primary"
                target="_blank">View Project</a>
            </div>
          </div>
   
        <div class="project">
          <div class="thubmnail">
          <img src={Blog} alt="" />
          </div>
          <h2>Food Deliveryapp</h2>
          <p>
            An online food ordering system or an online ordering platform is a place where customers can directly order foods.It is a web-based ordering system where customers using a mobile app can use the online user interface to order online
          </p>
          <div class="links">
            <a href="https://github.com/Abdulhadhi1/foodapp-front-end" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Abdulhadhi1/foodapp-back-end" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://littlenugget.netlify.app/home"
              class="btn btn-primary"
              target="_blank">View Project</a>
          </div>
        </div>


        <div class="project">
          <div class="thubmnail">
          <img src={Money} alt="" />
          </div>
          <h2>Daily Notes</h2>
          <p>
          Daily notes app created using React Js,Node js,MongoDB and Redux. User can signup and login into this app and can create notes, edit notes, edit profiles and can search for the particular notes
          </p>
          <div class="links">
            <a href="https://github.com/Abdulhadhi1/dailynotes-frontend" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Abdulhadhi1/dailynotes-backend" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://dailynotess.netlify.app/"
              class="btn btn-primary"
              target="_blank">View Project</a>
          </div>
        </div>


        
     
      </div>
      </div>
      <br />
      <br /><br /> <br /><br />
      </section>
 </>
  );
};

export default Portfolio;
