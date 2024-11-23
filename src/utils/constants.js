

const features = [
  {
    gridArea: "tl",
    image: new URL("../assets/features/thumbs-up.svg", import.meta.url).href,
    heading: "Cross-Platform Accessibility",
    description: `Whether you're on your desktop, tablet, or smartphone, 
                  SmartNotes is accessible across all devices. Work seamlessly 
                  on the go and never miss a beat.`,
  },
  {
    gridArea: "tr",
    image: new URL("../assets/features/globe.svg", import.meta.url).href,
    heading: "Customizable Templates",
    description: `Create custom templates for your recurring tasks or projects to save 
                  time and ensure consistency. Tailor SmartNotes to fit your unique workflow 
                  and preferences.`,
  },
  {
    gridArea: "bl",
    image: new URL("../assets/features/flag.svg", import.meta.url).href,
    heading: "Secure Cloud Storage",
    description: `Rest easy knowing that your notes are securely stored in the cloud. 
                  Access your information from any device, anytime, without worrying about 
                  losing important data.`,
  },
  {
    gridArea: "blm",
    image: new URL("../assets/features/graphic-circle.svg", import.meta.url)
      .href,
    heading: "Real-Time Collaboration",
    description: `Collaborate seamlessly with your team members or classmates 
                  in real-time on shared notes and projects.`,
  },
  {
    gridArea: "brm",
    image: new URL("../assets/features/hash.svg", import.meta.url).href,
    heading: "AI-Powered Organization",
    description: `Our AI-powered organization feature categorizes and prioritizes your notes, 
       making it easy to find what you need when you need it.`,
  },
  {
    gridArea: "br",
    image: new URL("../assets/features/branch.svg", import.meta.url).href,
    heading: "Integrations",
    description: `Connect SmartNotes with your favorite productivity tools like Google Drive, 
      Trello, and Slack. Streamline your workflow by syncing data across platforms 
      and enhancing collaboration.`,
  },
];


const faqItems = [
  {
    id: 1,
    question: "What is ThaparGenie?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `ThaparGPT is an AI-powered chatbot designed to help Thapar students with instant, accurate answers to all campus-related queries, powered by a Large Language Model (LLM).`,
  },
  {
    id: 2,
    question: "How can ThaparGenie help me?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: 'ThaparGPT provides assistance with academic schedules, course details, campus facilities, events, administrative processes, and more, helping you navigate college life more effectively.',
  },
  {
    id: 3,
    question: "Is ThaparGenie available 24/7?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `Yes, ThaparGPT is available around the clock, offering instant support for your queries anytime, anywhere.`,
  },
  {
    id: 4,
    question: "How do I access ThaparGenie?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `You can access ThaparGPT through the official Thapar website or any designated platform where it is integrated for easy use.`,
  },
  {
    id: 5,
    question: "Is ThaparGenie only for students, or can faculty and staff use it too?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `While ThaparGPT is primarily designed for students, faculty and staff can also use it to quickly find information related to their academic and administrative needs.`,
  },
];

export { features, faqItems };
