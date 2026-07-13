import React from 'react'
import JobCard from './components/JobCard'
import User from './components/User'

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      nameOfCompany: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 120,
      location: "Mumbai, India"
    },
    {
      id: 2,
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      nameOfCompany: "Apple",
      datePosted: "1 day ago",
      post: "Hardware Systems Design Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 145,
      location: "Cupertino, CA"
    },
    {
      id: 3,
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
      nameOfCompany: "GitHub",
      datePosted: "3 days ago",
      post: "Junior Front-End Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 65,
      location: "San Francisco, CA"
    },
    {
      id: 4,
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      nameOfCompany: "Netflix",
      datePosted: "2 weeks ago",
      post: "Staff AI Infrastructure Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 190,
      location: "Los Gatos, CA"
    },
    {
      id: 5,
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
      nameOfCompany: "Meta",
      datePosted: "4 days ago",
      post: "Product Design Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 55,
      location: "New York, NY"
    },
    {
      id: 6,
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      nameOfCompany: "Google",
      datePosted: "10 hours ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 115,
      location: "Seattle, WA"
    }
  ];

  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem) {
        return <JobCard
          nameOfCompany={elem.nameOfCompany}
          id={elem.id}
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      })}
    </div>
  )
}

export default App
