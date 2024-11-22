// Please look at https://jsonresume.org/schema for the schema specs

export interface ResumeInternetProfile {
    network: string;
    username: string;
    url: string;
}

export interface ResumeAddress {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

export interface ResumeBasic {
    name : string;
    label : string;
    image : string;
    email : string;
    phone : string;
    url: string;
    summary: string;
    location: ResumeAddress;
    profiles: ResumeInternetProfile[];
}

export interface ResumeWork {
    name: string;
    position: string;
    url: string;
    location: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface ResumeVolunteer {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface ResumeEducation {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
}

export interface ResumeAward {
    title: string;
    date: string;
    awarder: string;
    summary: string;
}

export interface ResumeCertificate {
    name: string;
    date: string;
    issuer: string;
    url: string;
}

export interface ResumePublication {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
}

export interface ResumeSkill {
    name: string;
    level: string;
    keywords: string[];
}

export interface ResumeLanguage {
    language: string;
    fluency: string;
}

export interface ResumeInterest {
    name: string;
    keywords: string[];
}

export interface ResumeReference {
    name: string;
    reference: string;
}

export interface ResumeProject {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
}

export interface Resume {
    basic: ResumeBasic;
    work?: ResumeWork[];
    education?: ResumeEducation[];
    awards?: ResumeAward[];
    certificates?: ResumeCertificate[];
    publications?: ResumePublication[];
    skills?: ResumeSkill[];
    languages?: ResumeLanguage[];
    interests?: ResumeInterest[];
    references?: ResumeReference[];
    projects?: ResumeProject[];
}