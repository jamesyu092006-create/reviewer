const QUESTIONS = [
  {
    "lesson": "Lesson 1",
    "q": "What is a society?",
    "o": [
      "A small group sharing one hobby only",
      "A large group bound by shared institutions, norms, values, and relationships",
      "A formal school organization only",
      "A temporary classroom group"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "Which is an example of a geographic community?",
    "o": [
      "Parent-teacher association",
      "Teaching community",
      "Barangay or neighborhood",
      "Online study group"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 1",
    "q": "Which type of community is a parent-teacher association?",
    "o": [
      "Geographic",
      "Interest-based",
      "Practice-based",
      "Political"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "Which type of community is a teaching community?",
    "o": [
      "Practice-based",
      "Geographic",
      "Economic",
      "Governmental"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 1",
    "q": "Education is best described as the process of:",
    "o": [
      "Enforcing school rules only",
      "Facilitating learning and acquiring knowledge, skills, values, and habits",
      "Building school facilities",
      "Organizing elections"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "Which is a form of formal education?",
    "o": [
      "Family",
      "Media",
      "Schools and universities",
      "Community conversation"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 1",
    "q": "Which is a form of informal education?",
    "o": [
      "University degree program",
      "Family and media",
      "Community workshop",
      "Senior high school"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "Which is a form of non-formal education?",
    "o": [
      "Community workshops",
      "Universities",
      "Elementary schools",
      "Family conversations only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 1",
    "q": "Which is a key element of social interaction?",
    "o": [
      "Isolation",
      "Communication",
      "Silence",
      "Competition only"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "School culture refers to:",
    "o": [
      "The building design",
      "Shared beliefs, values, norms, and practices in a school",
      "Only school rules",
      "Only student uniforms"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "A positive school culture helps foster:",
    "o": [
      "Belonging, motivation, and academic success",
      "Competition only",
      "Less interaction",
      "Isolation"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 1",
    "q": "Society, community, and education are described as:",
    "o": [
      "Independent from one another",
      "Interdependent",
      "Unrelated",
      "Opposing systems"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 2",
    "q": "What is the core idea of Structural Functional Theory?",
    "o": [
      "Society is a system of interdependent institutions",
      "All social life is based on conflict",
      "Meanings are fixed",
      "Schools should avoid social roles"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Who is associated with Structural Functional Theory?",
    "o": [
      "Karl Marx and Max Weber",
      "Émile Durkheim and Talcott Parsons",
      "George Herbert Mead and Herbert Blumer",
      "Bronfenbrenner and Coleman"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 2",
    "q": "Which school function means teaching norms, values, and citizenship?",
    "o": [
      "Socialization",
      "Credentialism",
      "Stratification",
      "Automation"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Conflict Theory focuses mainly on:",
    "o": [
      "Power, resources, and inequality",
      "Only classroom language",
      "School rituals only",
      "Biological development"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Which thinker is linked to Conflict Theory?",
    "o": [
      "Talcott Parsons",
      "Karl Marx",
      "Herbert Blumer",
      "Émile Durkheim"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 2",
    "q": "Credentialism refers to:",
    "o": [
      "Using qualifications to regulate access to occupations and status",
      "Learning through games",
      "Teaching only values",
      "Using technology in class"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Symbolic Interactionism focuses on:",
    "o": [
      "Large institutions only",
      "Everyday interaction, language, labels, and shared meanings",
      "Government policy only",
      "Economic production only"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 2",
    "q": "Who is associated with Symbolic Interactionism?",
    "o": [
      "George Herbert Mead and Herbert Blumer",
      "Marx and Weber",
      "Durkheim and Parsons",
      "Green and Coleman"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "A label such as gifted or problematic may influence a learner’s:",
    "o": [
      "Self-concept and achievement",
      "Age",
      "School location",
      "Curriculum schedule only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Education 4.0 shifts learning from teacher-centered toward:",
    "o": [
      "Learner-centered",
      "Exam-centered",
      "Building-centered",
      "Textbook-only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Which is a principle of Education 4.0?",
    "o": [
      "Personalized learning",
      "Fixed classroom only",
      "Passive learning",
      "No technology use"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Which is listed as a future-ready competency?",
    "o": [
      "Critical thinking",
      "Memorization only",
      "Silence",
      "Dependence"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "RA 10533 established the foundation for:",
    "o": [
      "K to 12 basic education",
      "Only senior high school",
      "Higher education only",
      "Private schools only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "How many years of Kindergarten are included in K to 12?",
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "How many years are in Elementary under K to 12?",
    "o": [
      "4",
      "5",
      "6",
      "7"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 3",
    "q": "How many years are in Junior High School?",
    "o": [
      "2",
      "3",
      "4",
      "5"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 3",
    "q": "How many years are in Senior High School?",
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 3",
    "q": "One main goal of MATATAG is to provide:",
    "o": [
      "Fewer, clearer, better-sequenced competencies",
      "More overlapping competencies",
      "Less time for mastery",
      "More congested content"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "Which foundational area is prioritized by MATATAG?",
    "o": [
      "Literacy",
      "Only sports",
      "Only arts",
      "Only entrepreneurship"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "In SY 2024–2025, the MATATAG rollout covered:",
    "o": [
      "K, 1, 4, 7",
      "2, 3, 5, 8",
      "6, 9, 10",
      "11 and 12 only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "Strengthened SHS uses:",
    "o": [
      "A smaller focused core plus electives",
      "No core subjects",
      "Only technical subjects",
      "Only academic subjects"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "Which is one of the six Strengthened SHS core subjects?",
    "o": [
      "General Mathematics",
      "Advanced Robotics only",
      "Accounting only",
      "Agriculture only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "Which is an implementation risk?",
    "o": [
      "Unequal teachers, devices, and facilities",
      "Too much equal access",
      "Too many complete resources",
      "No need for training"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "A response to the digital divide includes:",
    "o": [
      "Connectivity, device lending, offline resources, and digital literacy",
      "Removing technology from schools",
      "Ignoring privacy issues",
      "Using AI without guidance"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "A school is described as:",
    "o": [
      "A community within a community",
      "An isolated institution",
      "A business only",
      "A government office only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "A genuine school-community partnership involves:",
    "o": [
      "Shared planning, action, and accountability",
      "Donations only",
      "One-way communication",
      "School decisions only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Which law emphasizes shared governance and school-based management?",
    "o": [
      "RA 9155",
      "RA 8525",
      "RA 7160",
      "RA 10533"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Which law supports Adopt-a-School partnerships?",
    "o": [
      "RA 8525",
      "RA 9155",
      "RA 7160",
      "RA 10533"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Which theory says institutions perform complementary roles for stability and development?",
    "o": [
      "Functionalism",
      "Conflict Theory",
      "Symbolic Interactionism",
      "Credentialism"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Which theory views learners through overlapping home, school, peer, service, and cultural environments?",
    "o": [
      "Ecological theory",
      "Conflict theory",
      "Credentialism",
      "Behaviorism"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Green’s framework includes which three patterns?",
    "o": [
      "Closed-door, Balanced, Open-door",
      "Formal, Informal, Non-formal",
      "Unary, Binary, Ternary",
      "Input, Process, Output"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Which Green pattern has extensive input and two-way information flow?",
    "o": [
      "Open-door",
      "Closed-door",
      "Balanced only",
      "Isolated"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Which pattern matches participation to purpose and protects privacy, safety, and expertise?",
    "o": [
      "Balanced",
      "Closed-door",
      "Open-door only",
      "No-door"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Brigada Eskwela mainly supports:",
    "o": [
      "School readiness, safety, and bayanihan",
      "Only college admissions",
      "Only sports programs",
      "Only teacher hiring"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "A sustainable partnership begins by:",
    "o": [
      "Assessing learner data, consultation, and resources",
      "Acting without evidence",
      "Measuring before planning",
      "Ignoring stakeholders"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Strong partnerships should measure:",
    "o": [
      "What changes for learners",
      "Only number of meetings",
      "Only number of volunteers",
      "Only donations received"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "A school as a learning community treats learning as:",
    "o": [
      "A shared, continuous responsibility",
      "A one-way transaction",
      "Only a student responsibility",
      "Only a teacher responsibility"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "Which is a feature of a learning community?",
    "o": [
      "Shared vision",
      "Isolation",
      "One-way communication",
      "No reflection"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "The Hiatt-Michael Model emphasizes partnership among:",
    "o": [
      "Family, school, and community",
      "Teachers only",
      "Students only",
      "Government only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "Community of Practice means people deepen expertise through:",
    "o": [
      "Sustained interaction around a shared concern or practice",
      "Individual study only",
      "One-time meetings",
      "Competition"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "The three essential elements of a Community of Practice are:",
    "o": [
      "Domain, Community, Practice",
      "Input, Output, Feedback",
      "School, Home, Market",
      "Teacher, Student, Principal"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "A Professional Learning Community focuses on:",
    "o": [
      "Systematic collaboration and learner outcomes",
      "One-time seminars only",
      "Student discipline only",
      "School finance only"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "SLAC/LAC is best described as:",
    "o": [
      "A school-based mechanism for collaborative continuing professional development",
      "A student club",
      "A grading system",
      "A school election"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "In a SLAC cycle, what comes after identifying a concern?",
    "o": [
      "Examine evidence",
      "Apply in class immediately",
      "End the session",
      "Write grades"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "After agreeing on a strategy in a SLAC session, teachers should:",
    "o": [
      "Apply it in class",
      "Forget the concern",
      "Avoid reflection",
      "Stop collaboration"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "The final part of the SLAC practice cycle is to:",
    "o": [
      "Improve and sustain",
      "Identify concern",
      "Professional input",
      "Discuss and analyze"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "Which role may lead a LAC session?",
    "o": [
      "LAC Leader or School Head",
      "Only students",
      "Only parents",
      "Only external visitors"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "A good SLAC action plan should include:",
    "o": [
      "Concern, evidence, strategy, persons involved, expected outcome, and monitoring",
      "Only the meeting date",
      "Only participant names",
      "Only attendance"
    ],
    "a": 0
  }
];
