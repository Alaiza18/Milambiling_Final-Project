function show() {
    document.getElementById('intro').style.display = 'none';

    const content = document.createElement('div');
    content.id = 'content';
    content.className = 'content';
    content.style.backgroundImage = "url('img/11.jpg')";

    content.innerHTML =`
<body>
    <nav class="header">
        <div class="bars" id="bars>
            <i class="ri-menu-2-fill"></i>
        </div>
        <div class="logo">
            <img src="img/logo6.png" alt="logo">
            <a href="#">Alaiza</a>
        </div>
        <ul class="menu" id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
        </ul>
        <a href="#contact" class="button"> Contact Me
            <i class="ri-arrow-up-line"></i></a>
    </nav>

    <!--ME-->
    <div class="me">
        <div class="content" id="home">
            <h2>Hi!</h2>
            <h1>I'm <span>Alaiza</span></h1>
            <h3>Welcome to My Personal Portfolio!</h3>
            <p>This space is where I showcase my latest projects, share inspirations, and invite collaboration. Whether you're here to explore, get inspired, or connect, I hope you find something that sparks your imagination.</p>
            <button class="button">Interested <i class="ri-question-mark"></i></button>
        </div>
        <div class="social">
            <img src="img/fb.png" alt="#" class="element elem1">
            <img src="img/insta.png" alt="#" class="element elem2">
            <img src="img/mail.png" alt="#" class="element elem3">
            </div>
        <div class="img">
            <img src="img/new.png" alt="#">
        </div>
    </div>

    <!--About-->
    <section class="aboutme" id="about">
        <div class="about">
            <h1>ABOUT</h1>

        <div class="about_me">
            <h2>About Me</h2>
            <p>I'm Alaiza Milambiling a Bachelor of Information Technology student of Marinduque State University. I'm Interested in Arts and Designing. There are many people that are better than me at this things but I'm willing to learn and to improve my skills.</p>
        </div>
        
        <div class="what_i_do">
            <h2>What I do</h2>
            <p>I am practicing through small activities and projects from school. And it helps me learn and inhance my skills little by little.</p>
        </div>

        <div class="my_dream">
            <h2>My Dream</h2>
            <p>My Dream is being an artist, I took this course hoping that I'll be studying Animation but unfortunately they shut it down for the mean time.</p>
        </div>
    </section>

    <!--PROJECT-->
    <section class="project" id="project">
        <div class="pics">
            <h1>PROJECTS</h1>
            <img src="img/pf.png" alt="#" class="img1">
            <img src="img/op.png" alt="#" class="img2">
            <img src="img/sv.png" alt="#" class="img3">
        </div>
        <div class="project_content">
            <h2>My Projects</h2>
            <p>These are some projects that I've done before. From small personal website to a simple 3D game helps me improve and learn new things little by little.</p>
        </div>
    </section>

    <!--SKILLS-->
    <section class="myskills" id="skills">
        <div class="my_skills">
            <h1>SKILLS</h1>
        <div class="skills_content">
             <!--card 1-->
            <div class="skills">
                <h2>10%</h2>
                <p>Java</p>
            </div>
            <!--card 2-->
            <div class="skills">
                <h2>60%</h2>
                <p>Python</p>
            </div>
            <!--card 3-->
            <div class="skills">
                <h2>50%</h2>
                <p>Android Studio</p>
            </div>
            <!--card 4-->
            <div class="skills">
                <h2>60%</h2>
                <p>HTML</p>
            </div>
            <!--card 5-->
            <div class="skills">
                <h2>50%</h2>
                <p>CSS</p>
            </div>
            <!--card 6-->
            <div class="skills">
                <h2>10%</h2>
                <p>JavaScript</p>
            </div>
        </div>   
    </section>

    <!--CONTACT-->
    <section class="contact" id="contact">
        <div class="head">
            <h1>Let's Talk</h1>
            <p>Do you have anything to say to me? Let's Talk.</p>
        </div>
        <div class="contact_container">
            <div class="inputs">
                <div class="contact_head">
                    <h2>Get In Touch</h2>
                </div>
                <div class="input_top">
                    <input type="text" placeholder="Your Name">
                    <input type="email" placeholder="Your Email">
                </div>
                <input type="text" placeholder="Your Phone">
                <textarea name="" id="" placeholder="Your Meassage"></textarea>
                <div class="submit">
                    <button class="button">Send</button>
                </div>
            </div>
        <div class="content">
            <!-- box 1-->
            <div class="contact_content">
                <h2>milambiling.alaiza@marsu.edu.ph</h2>
                <div class="contact_info">
                    <i class="ri-mail-line"></i>
                    <p>Official Mail</p>
                </div>
            </div>
            <!-- box 2-->
            <div class="contact_cont">
                <h2>+63 930-791-9460</h2>
                <div class="contact_info">
                    <i class="ri-phone-line"></i>
                    <p>Official Phone</p>
                </div>
            </div>
        </div>
    </section>
    <!--FOOTER-->
    <section class="footer">
        <div class="footer_box">
            <div class="logo">
                <img src="img/logo6.png" alt="logo">
                <a href="#">Alaiza</a>
            </div>
        </div>
            <p> Again, I'm Alaiza Milambiling. Open your heart to every oportunity that goes on your way.</p>
        <div class="social_icon">
            <i class="ri-facebook-fill"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-instagram-fill"></i>
        </div>
        <div></div>
    </section>
</body>
    `;

    document.body.appendChild(content);
}