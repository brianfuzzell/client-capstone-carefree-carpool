import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <div className="body-container">
      <h2>About</h2>
      <Container className="about-container">
        <div>
          Hi, I'm Brian Fuzzell. Thanks for reviewing my client-side React capstone project - one of
          the biggest projects required during my full-time full stack course
          work at{" "}
          <a href="https://nashvillesoftwareschool.com/" target="_blank">
            Nashville Software School
          </a>
          . The Carefree Carpool web application was developed using React.js,
          React Bootstrap for styling, and custom CSS for extra flavor. The
          frontend is deployed on Vercel and the backend database is hosted on
          Supabase.
        </div>
        <div className="about-space">
          <h4>GitHub:</h4>
          <a href="https://github.com/brianfuzzell/client-capstone-carefree-carpool" target="_blank">https://github.com/brianfuzzell/client-capstone-carefree-carpool</a>
        </div>
        <div className="about-space">
          <h5>Purpose</h5>
          Like many people across the world, I'm a carpool driver. Whether we're
          carpooling middle schoolers, commuting coworkers, or ride sharing
          young adults, clearly communicating the ride shifts for both drivers
          and riders is a top priority.
        </div>
        <div className="about-space">
          <h5>Problem this solves for customers</h5>
          Scheduling and communication. Maintaining the schedule through group
          messaging and/or sharing a Notes app doc can be cumbersome and
          ineffective. Carefree Carpool solves this problem by providing a
          simple, modern web application for use by drivers and riders alike.
          <ul>
            <li>
              Quickly check the latest schedule on the go in the mobile-first
              UI.
            </li>
            <li>Add a 2nd driver and countless riders to your account.</li>
            <li>Easily schedule, edit, or delete your shifts in real time.</li>
          </ul>
        </div>
        <div className="about-space about-requirements">
          <h5>Technical Specs / Capstone Requirements</h5>

          <ol>
            <li>
              You must support CRUD in your application. Create data, Read data,
              Update data, Delete data
            </li>
            <li>You are required to use React.</li>
            <li>
              You must have a form that allows a user to create a new resource.
            </li>
            <li>
              Your form must include &lt;select&gt; element, radio button group,
              or checkbox group that allows a user to choose a related resource.
              For example, if your application allows users to create new plants
              for their home, one of the fields in the form must allow them to
              select something like the following items:
              <ul>
                <li>The room it will be in.</li>
                <li>The level of sunlight it needs.</li>
                <li>Its type.</li>
              </ul>
            </li>
            <li>
              You must show your proficiency with writing modular code that
              follows the Single Responsibility Principle.
            </li>
            <li>
              Your application must support multiple routes to show different
              views to the user, and the user must be able to navigate to each
              route/view.
            </li>
            <li>
              Customer must be able to delete their own data, and be prevented
              from deleting other customers' data.
            </li>
            <li>
              Customer must be able to edit their own data, and be prevented
              from editing other customers' data.
            </li>
            <li>
              You must be able to implement a flexible layout for your UI by
              either (a) authoring your own CSS using Flexbox, or (b) using a
              3rd party framework like Bootstrap.
            </li>
            <li>
              All copy for your application must be legible, so pay attention to
              colors, margins, padding, and font sizes.
            </li>
          </ol>
        </div>
      </Container>
    </div>
  );
};
