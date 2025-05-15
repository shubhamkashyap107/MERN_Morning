import Card from "./Components/Card";

function App()
{

//   const  users = [
//   "Alice Johnson", "Bob Smith", "Charlie Lee", "Diana Torres", "Ethan Wright",
//   "Fiona Adams", "George Clark", "Hannah Lewis", "Ian Turner", "Julia Scott",
//   "Kevin Hill", "Laura Baker", "Mike Davis", "Nina Allen", "Oscar Young",
//   "Paula Mitchell", "Quinn Harris", "Rachel Cooper", "Sam Murphy", "Tina Reed",
//   "Umar Collins", "Vera Kelly", "Will Peterson", "Xena Foster", "Yusuf Morgan",
//   "Zara Price", "Adam Bennett", "Bella Hughes", "Caleb Rogers", "Delilah Ward",
//   "Eli Ross", "Freya Cook", "Gavin Perry", "Hailey Cox", "Isaac Bailey",
//   "Jade Gray", "Kyle Simmons", "Lily Bennett", "Mason Bryant", "Naomi Russell",
//   "Owen Hayes", "Piper Jenkins", "Ray Woods", "Sophie Chambers", "Tyler Lane",
//   "Uma Saunders", "Victor Graham", "Wendy Fleming", "Xander Hoffman", "Yara Dean"
// ];

const users = [
  { name: "Alice Johnson", designation: "Software Engineer" },
  { name: "Bob Smith", designation: "Product Manager" },
  { name: "Charlie Lee", designation: "UX Designer" },
  { name: "Diana Torres", designation: "Data Analyst" },
  { name: "Ethan Wright", designation: "DevOps Engineer" },
  { name: "Fiona Adams", designation: "QA Engineer" },
  { name: "George Clark", designation: "Backend Developer" },
  { name: "Hannah Lewis", designation: "Frontend Developer" },
  { name: "Ian Turner", designation: "Technical Writer" },
  { name: "Julia Scott", designation: "Scrum Master" },
  { name: "Kevin Hill", designation: "Cloud Architect" },
  { name: "Laura Baker", designation: "HR Manager" },
  { name: "Mike Davis", designation: "Mobile Developer" },
  { name: "Nina Allen", designation: "Business Analyst" },
  { name: "Oscar Young", designation: "Full Stack Developer" },
  { name: "Paula Mitchell", designation: "UI Designer" },
  { name: "Quinn Harris", designation: "Machine Learning Engineer" },
  { name: "Rachel Cooper", designation: "Project Manager" },
  { name: "Sam Murphy", designation: "IT Support" },
  { name: "Tina Reed", designation: "SEO Specialist" },
  { name: "Umar Collins", designation: "Database Administrator" },
  { name: "Vera Kelly", designation: "Network Engineer" },
  { name: "Will Peterson", designation: "Cybersecurity Analyst" },
  { name: "Xena Foster", designation: "Game Developer" },
  { name: "Yusuf Morgan", designation: "Digital Marketer" },
  { name: "Zara Price", designation: "Systems Engineer" },
  { name: "Adam Bennett", designation: "Solutions Architect" },
  { name: "Bella Hughes", designation: "Data Scientist" },
  { name: "Caleb Rogers", designation: "Automation Tester" },
  { name: "Delilah Ward", designation: "Content Strategist" },
  { name: "Eli Ross", designation: "Tech Lead" },
  { name: "Freya Cook", designation: "Cloud Engineer" },
  { name: "Gavin Perry", designation: "Support Engineer" },
  { name: "Hailey Cox", designation: "Graphic Designer" },
  { name: "Isaac Bailey", designation: "SRE Engineer" },
  { name: "Jade Gray", designation: "AI Researcher" },
  { name: "Kyle Simmons", designation: "Security Engineer" },
  { name: "Lily Bennett", designation: "Operations Manager" },
  { name: "Mason Bryant", designation: "Technical Recruiter" },
  { name: "Naomi Russell", designation: "Cloud Consultant" },
  { name: "Owen Hayes", designation: "Site Reliability Engineer" },
  { name: "Piper Jenkins", designation: "DevRel Advocate" },
  { name: "Ray Woods", designation: "Creative Director" },
  { name: "Sophie Chambers", designation: "Customer Success Manager" },
  { name: "Tyler Lane", designation: "Infrastructure Engineer" },
  { name: "Uma Saunders", designation: "Research Scientist" },
  { name: "Victor Graham", designation: "Technical Program Manager" },
  { name: "Wendy Fleming", designation: "Information Architect" },
  { name: "Xander Hoffman", designation: "Engineering Manager" },
  { name: "Yara Dean", designation: "Brand Strategist" }
];



  // return (
  //   <ul>
  //     {users.length && users.map((item) => {
  //       return <li>{item}</li>
  //     })}
  //   </ul>
  // )


  return(
    <>
    {/* <Card name="Rocky" designation="Influencer" img="https://plus.unsplash.com/premium_photo-1669377175251-3d87fc6541e7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card name="Shubham" designation="SDE" img="https://plus.unsplash.com/premium_photo-1669377175251-3d87fc6541e7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card name="Money" designation="Paisa" img="https://plus.unsplash.com/premium_photo-1669377175251-3d87fc6541e7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}

    {/* {Card("shkdfsd", 3, true)} */}

    {users.map((item) => {
      return <Card name={item.name} designation={item.designation} />
    })}

    </>

  )
}


export default App