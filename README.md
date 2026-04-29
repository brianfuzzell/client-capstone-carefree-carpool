# Introduction
Thank you for reviewing my client-side React capstone project - one of the biggest projects required during my full-time full stack course work at Nashville Software School. The **Carefree Carpool** web application was developed using React.js, React Bootstrap for styling, and custom CSS for extra flavor. The frontend is deployed on Vercel and the backend database is hosted on Supabase. 

## 🚗 Take it for a test drive!
- Navigate to [carefree-carpool.vercel.app](https://carefree-carpool.vercel.app/)
- Or [Install the app locally](#installation)
- Or... see screen animations below

### Purpose
Like many people across the world, I'm a carpool driver. Whether we're carpooling middle schoolers, commuting coworkers, or ride sharing young adults, clearly communicating the ride shifts for both drivers and riders is a top priority. 

### Problem this solves for customers
Scheduling and communication. Maintaining the schedule through group messaging and/or sharing a Notes app doc can be cumbersome and ineffective. Carefree Carpool solves this problem by providing a simple, modern web application for use by drivers and riders alike.
- Quickly check the latest schedule on the go in the mobile-first UI. 
- Add a 2nd driver and countless riders to your account. 
- Easily schedule, edit, or delete your shifts in real time.

### Challenges
Scope and state! Like every professional software project I've worked on, scope was a big challenges. I wanted to squeeze so many features and functionality into the MVP (sound familiar?), but a limited timeline with a real deadline meant I had to revise and scale my focus down to a scope that would deliver real value to customers on the due date. After delivering a working MVP app, I can gather feedback, iterate, and expand features and functionality. But maintaining the discipline to keep the scope small enough to deliver an MVP on time was definitely difficult.

And then there's state. Setting state's starter values, updating state when values change, never modifying state directly... there's a lot to juggle with state and it was a big challenge for Carefree Carpool.

### Stretch Goals
What's next for this project? I have several stretch goals I plan to work on, but **Unit Tests** are at the top of the list.

### Animations
![Carefree Carpool - Editing rides](public/carefreeCarpoolDemo1.gif "Editing rides")

![Carefree Carpool - Adding & deleting rides](public/carefreeCarpoolDemo2.gif "Adding & deleting rides")

![Carefree Carpool - Register & add 2nd driver](public/carefreeCarpoolDemo3.gif "Register & add 2nd driver")

![Carefree Carpool - Add rider](public/carefreeCarpoolDemo4.gif "Add rider")

#### Capstone Requirements
##### Data
1. You must have an ERD for your project.
1. You must have a user-related data scheme. This means that different people can authenticate with your application, and the resources that are created must be assigned to individual users.
1. In addition to having user-related data, you need to have at least one more 1 -> many relationships defined in your ERD.
1. Having a many -> many relationship is recommended, but not required for your client side project.
1. You are required to use the persistent storage tool that you were taught (i.e. json-server, firebase, SQL Server, SQLite, etc.).

##### Application Design Requirements
1. You must support CRUD in your application. Create data, Read data, Update data, Delete data
2. You are required to use React.
3. You must have a form that allows a user to create a new resource.
4. Your form must include `<select>` element, radio button group, or checkbox group that allows a user to choose a related resource. For example, if your application allows users to create new plants for their home, one of the fields in the form must allow them to select something like the following items:

    - The room it will be in.
    - The level of sunlight it needs.
    - Its type.

5. You must show your proficiency with writing modular code that follows the Single Responsibility Principle.
6. Your application must support multiple routes to show different views to the user, and the user must be able to navigate to each route/view.
7. Customer must be able to delete their own data, and be prevented from deleting other customers' data.
8. Customer must be able to edit their own data, and be prevented from editing other customers' data.
9. You must be able to implement a flexible layout for your UI by either (a) authoring your own CSS using Flexbox, or (b) using a 3rd party framework like Bootstrap.
10. All copy for your application must be legible, so pay attention to colors, margins, padding, and font sizes.

## Installation
*Prerequisites*
- Node.js (v18 or higher)
- npm (comes with Node.js)
  
1. Clone the repository
```bash
   git clone https://github.com/yourusername/carefree-carpool.git
   cd carefree-carpool
```

2. Install dependencies
```bash
   npm install
```

3. Install json-server globally (one-time setup)
```bash
   npm install -g json-server
```

4. Start the app
```bash
   npm run dev
```

5. Open your browser to `http://localhost:5173`

---

## Database Structure

The app uses these tables:
- **users** - Family/admin-level accounts
- **drivers** - Carpool drivers
- **riders** - Riders being carpooled
- **shifts** - Individual rides (morning or afternoon)
- **riderShifts** - Links riders to specific shifts
