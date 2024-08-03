export interface Job {
    id: string;
    title: string;
    description: string;
    responsibilities: string[];
    ideal_candidate: IdealCandidate;
    when_where: string;
    about: About;
    company: string;
    image: string;
  }
  
  export interface IdealCandidate {
    age: string;
    gender: string;
    traits: string[];
  }
  
  export interface About {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  }

  export interface Category{
      Design: string;
      Technology: string;
      Health: string;
      Marketing: string;
  }