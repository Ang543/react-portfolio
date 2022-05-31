import React from 'react';

function Contact(props) {
    return (
        <div id="contact-me" class="content2">

        <h2>Contact Me</h2>
        <p>
            Have any questions? Here is how you can get in contact with me.
        </p>
        <div class="container">
            <div id="email-img" class="project-imgs">
                <div class="project-content">
                    <a href="mailto:angelocsaverino@gmail.com">
                    <h4>Email</h4>
                    <p> Send me an email
                    </p>
                    angelocsaverino@gmail.com</a>
                </div>
            </div>
            <div id="phone-img" class="project-imgs">
                <div class="project-content">
                    <a href="tel:732-354-7177">
                    <h4>Phone</h4>
                    <p> Call me on my personal phone
                    </p>
                    732-354-7177</a>

                </div>
            </div>
            <div id="github-img" class="project-imgs">
                <div class="project-content">
                    <a href="https://github.com/Ang543">
                    <h4>Github</h4>
                    <p> Check out my Github
                    </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;