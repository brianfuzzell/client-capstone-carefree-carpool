# Introduction
Thank you for reviewing my client-side React capstone project - one of the biggest projects required during my full-time full stack course work at Nashville Software School. The **Carefree Carpool** web application was developed using React.js, React Bootstrap for styling, custom CSS for extra flavor, and a JSON server database. 

### Purpose
Like many people across the world, I'm a carpool driver. Whether we're carpooling middle schoolers, commuting coworkers, or ride sharing young adults, clearly communicating the ride shifts for both drivers and riders is a top priority. 

### Problem this solves for customers
Scheduling and communication. Maintaining the schedule through group messaging and/or sharing a Notes app doc can be cumbersome and ineffective. Carefree Carpool solves this problem by providing a simple, modern web application for use by drivers and riders alike.
- Quickly check the latest schedule on the go in the mobile-first UI. 
- Add a 2nd driver and countless riders to your account. 
- Easily schedule, edit, or delete your shifts in real time.

🔥 See screen animations below or better yet, [install the app](#installation) and take it for a test drive.

### Challenges
Like every professional software project I've worked on, scope and focus were the biggest challenges. I wanted to squeeze so many features and functionality into the MVP (sound familiar?), but a limited timeline with a real deadline meant I had to revise and scale my focus down to a scope that would deliver real value to customers on the due date. After delivering a working MVP app, I can gather feedback, iterate, and expand features and functionality. But maintaining the discipline to keep the scope small enough to deliver an MVP on time was definitely difficult.

### Animations
![Carefree Carpool - Editing rides](public/carefreeCarpoolDemo1.gif "Editing rides")

![Carefree Carpool - Adding & deleting rides](public/carefreeCarpoolDemo2.gif "Adding & deleting rides")

![Carefree Carpool - Register & add 2nd driver](public/carefreeCarpoolDemo3.gif "Register & add 2nd driver")

![Carefree Carpool - Add rider](public/carefreeCarpoolDemo4.gif "Add rider")

## Installation

1. Clone the repository
```bash
   git clone https://github.com/yourusername/carefree-carpool.git
   cd carefree-carpool
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server
```bash
   npm run dev
```

4. In a separate terminal, start the JSON server
```bash
   cd api
   json-server -p 8088 -w database.json
```

5. Open your browser to `http://localhost:5173`
