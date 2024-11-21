import { Resume } from "../interfaces/Resume/Resume";

export const RESUME_URL = process.env.PUBLIC_URL + "resume.pdf";


export const RESUME_ENOCH_ONLINE_ONLY: Resume = {
    basic: {
        name: "Enoch Chu",
        label : "",
        image : "",
        email : "",
        phone : "",
        url: "https://enochchu.github.io",
        summary: "",
        location: {
            address: "",
            postalCode: "",
            city: "",
            countryCode: "",
            region: ""
        },
        profiles: [{
            network: "Github",
            username: "enoch.chu",
            url: "https://github.com/enoch.chu"
        }]
    },
    work: [
        {
            name: "Northrop Grunman",
            position: "Principal Software Engineer",
            url: "https://www.northropgrumman.com/",
            location: "Redondo Beach, CA",
            startDate: "November 2022",
            endDate: "Present",
            summary: "",
            highlights: [
                ""
            ]
        },
        {
            name: "LinQuest Corporation",
            position: "Senior Software Specialist I",
            url: "https://www.linquest.com",
            location: "El Segundo, CA",
            startDate: "January 2019",
            endDate: "November 2022",
            summary: "",
            highlights: [
                "Created, tested, and deployed integration between information systems to JIRA and Confluence (Angular, Python).",
                "Created scripts (Powerscript, Bash) to aid in deployments for both servers and users.",
                "Worked on deployments from code branch maintenance (Git) to deployments to production (Linux/Ubuntu).",
                "Gathered requirements for projects and converted requirements to actionable items for execution.",
                "Created technical training materials, diagrams, and documentation for consumers and team members",
                "Created and provided training to personnel from Agile experience to JIRA and Confluence."
            ]
        },
        {
            name: "Liferay, Inc",
            position: "Software Engineer ",
            url: "https://www.linquest.com",
            location: "Diamond Bar, CA ",
            startDate: "April 2014",
            endDate: "May 2018",
            summary: "",
            highlights: [
                "Provided front and backend implementation and technical solutions for Liferay Marketplace (Java, Java Servlets, JSP, CSS, Javascript, MySQL).",
                "Deployed marketing integration and automation for internal operations (Bash, Java, Java Servlets, and Python).",
                "Developed upgrades and maintained legacy code for Liferay Training Certification (Java, Java Servlets, JSP, MySQL, CSS, Javascript).",
                "Created technical training materials and documentation for consumers and team members.",
                "Participate in code reviews that adhere to company standards.",
                "Assisted Operations and QA teams in handling customer issues from strategic accounts."
            ]
        },
        {
            name: "Liferay, Inc",
            position: "Front End Software Engineer ",
            url: "https://www.linquest.com",
            location: "Diamond Bar, CA ",
            startDate: "March 2011",
            endDate: "April 2018",
            summary: "",
            highlights: [
                "..."
            ]
        },
        {
            name: "California State University, Long Beach",
            position: "Student I.T Assistant - Mechanical & Aerospace Engineering Department",
            url: "https://www.csulb.edu/",
            location: "Long Beach, CA",
            startDate: "August 2010",
            endDate: "January 2011",
            summary: "",
            highlights: [
                "Helped, assisted, and resolved computer needs and issues for students and professors.",
                "Diagnose and fix computer hardware issues.",
                "Deployed and performed image restoration for computer labs computers."
            ]
        },
    ],
    education: [
        {
            institution: "California State University Long Beach",
            url: "",
            area: "B.A Studio Art with emphasis in Graphic Design",
            studyType: "Bachelor",
            startDate: "2007",
            endDate: "2011",
            score: "",
            courses: []
        }
    ],
    skills: [
        {
            name: "Bash",
            level: "",
            keywords: [""],
        },
        {
            name: "CSS",
            level: "",
            keywords: [""],
        },
        {
            name: "HTML",
            level: "",
            keywords: [""],
        },
        {
            name: "Java",
            level: "",
            keywords: [""],
        },
        {
            name: "Javascript",
            level: "",
            keywords: [""],
        },
        {
            name: "JSP",
            level: "",
            keywords: [""],
        },
        {
            name: "Python",
            level: "",
            keywords: [""],
        },
        {
            name: "SQL",
            level: "",
            keywords: [""],
        }
    ]
}