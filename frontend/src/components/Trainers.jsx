import david1 from "../assets/david1.jpg";
import dorian from "../assets/dorian.jpg";
import ronnie from "../assets/ronnie.png";
import mike from "../assets/mike.webp";
import tom from "../assets/tom.jpg";
import kevin1 from "../assets/kevin1.jpg";
import chris from "../assets/chris.png";
import frank from "../assets/frank.webp";
import jay from "../assets/jay.jpg";
import flex from "../assets/flex.jpg";
import larry from "../assets/larry.jpg";
import arnold from "../assets/arnold.webp";
import mikeohearn from "../assets/mikeohearn.jpg";
import calum from "../assets/calum.jpg";
import bench from '../assets/Videos/bench.mp4'
import bench_thumb from '../assets/Videos/thumbnails/bench-thumb.png'
import row from '../assets/Videos/row.mp4'
import Trow from '../assets/Videos/Trow.mp4'
import deadliftRC from '../assets/Videos/deadliftRC.mp4'
import LEDY from '../assets/Videos/LEDY.mp4'
import LEDY2 from '../assets/Videos/thumbnails/LEDY_thumb.png'
import legpressDY from '../assets/Videos/legpressDY.mp4'
import deadlift from '../assets/Videos/thumbnails/deadlift.webp'
import legpress from '../assets/Videos/thumbnails/legrpess.webp'
import mikedbf from '../assets/Videos/mikeDBF.mp4'
import mikedbfJPG from '../assets/Videos/thumbnails/mikedbf.jpg'

export const trainers = [
  {
    id: 1,
    num: "Dorian Yates",
    img: dorian,
    description: "Dorian Yates is a retired British professional bodybuilder known for his intense training methods and six-time Mr. Olympia victories.",
    exercises: [
      { name: "Leg Extensions", video: LEDY, thumbnail: LEDY2 },
      { name: `45° Leg Press`, video: legpressDY, thumbnail: legpress },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Dorian Yates' Training Philosophy",
      "Building Mass and Strength",
      "Nutrition and Supplementation",
      "Recovery and Injury Prevention",
    ],
    testimonials: [
      {
        text: "Dorian's training methods have transformed my physique! Highly recommended!",
        author: "John Doe",
      },
      {
        text: "The course provided valuable insights into bodybuilding techniques.",
        author: "Jane Smith",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for beginners?",
        answer: "Yes, the course is designed to accommodate all skill levels.",
      },
      {
        question: "How long do I have access to the course materials?",
        answer: "Once enrolled, you'll have lifetime access to the course content.",
      },
      {
        question: "What equipment do I need for the exercises?",
        answer: "You'll need basic gym equipment such as dumbbells, barbells, and a bench.",
      },
      {
        question: "Are there any prerequisites for this course?",
        answer: "No, there are no prerequisites. All levels are welcome!",
      },
    ],
    relatedCourses: [
      "Advanced Bodybuilding Techniques by Dorian Yates",
      "Nutrition for Athletes by Dorian Yates",
    ],
  },
  {
    id: 2,
    num: "David Goggins",
    img: david1,
    description: "David Goggins is an American ultramarathon runner, ultra-distance cyclist, and triathlete known for his mental toughness and endurance.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Mental Toughness",
      "Endurance Training for Ultramarathons",
      "Mindset and Motivation",
      "Overcoming Obstacles",
    ],
    testimonials: [
      {
        text: "David's course has changed the way I approach challenges in life!",
        author: "Sarah Johnson",
      },
      {
        text: "His mental resilience techniques are powerful and inspiring.",
        author: "Michael Adams",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for beginners?",
        answer: "The course is geared towards athletes seeking mental strength and endurance training.",
      },
      {
        question: "Can I apply these principles to daily life?",
        answer: "Absolutely! David's teachings can be applied to any area of life.",
      },
      {
        question: "Do I need any specialized equipment?",
        answer: "No, the course focuses on mental training and does not require specialized equipment.",
      },
    ],
    relatedCourses: [
      "Endurance Cycling by David Goggins",
      "Mental Resilience for Success by David Goggins",
    ],
  },
  // ... Other trainers with their respective information.
  {
    id: 3,
    num: "Ronnie Coleman",
    img: ronnie,
    description: "Ronnie Coleman is an American retired professional bodybuilder known for his record eight-time Mr. Olympia wins.",
    exercises: [
      { name: "Bent-over Barbell Row", video: row, thumbnail: bench_thumb },
      { name: "Deadlift", video: deadliftRC, thumbnail: deadlift },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Bodybuilding",
      "Building Muscle Mass and Strength",
      "Nutrition and Diet for Bodybuilders",
      "Training Techniques for Mass",
    ],
    testimonials: [
      {
        text: "Ronnie's course is a treasure trove of bodybuilding knowledge!",
        author: "Michael Thompson",
      },
      {
        text: "I learned the proper form and technique to maximize my lifts.",
        author: "Jessica Green",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for beginners?",
        answer: "Yes, the course covers both beginner and advanced bodybuilding techniques.",
      },
      {
        question: "What type of workouts does the course include?",
        answer: "The course includes various workouts targeting different muscle groups.",
      },
      {
        question: "Can I follow the course without a gym membership?",
        answer: "A gym membership is recommended for access to necessary equipment.",
      },
    ],
    relatedCourses: [
      "Advanced Bodybuilding Posing by Ronnie Coleman",
      "Ronnie Coleman's Arm Blasting Workout",
    ],
  },

  {
    id: 4,
    num: "Mike Mentzer",
    img: mike,
    description: "Mike Mentzer was an American professional bodybuilder known for his Heavy Duty training philosophy.",
    exercises: [
      { name: "Exercise 1", video: mikedbf, thumbnail: mikedbfJPG },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Heavy Duty Training",
      "Maximizing Muscle Growth with Fewer Workouts",
      "Nutrition and Recovery",
      "Building a Strong Mind-Muscle Connection",
    ],
    testimonials: [
      {
        text: "Mike Mentzer's training approach helped me break through plateaus!",
        author: "Andrew Collins",
      },
      {
        text: "I appreciate the emphasis on recovery and avoiding overtraining.",
        author: "Emily White",
      },
    ],
    faq: [
      {
        question: "Is Heavy Duty Training suitable for all lifters?",
        answer: "While effective, it may not be ideal for beginners or those new to weightlifting.",
      },
      {
        question: "Are there any age restrictions for this course?",
        answer: "The course is open to all ages interested in Heavy Duty Training principles.",
      },
      {
        question: "Does this course include cardio workouts?",
        answer: "The focus is primarily on weight training, but cardio can be incorporated separately.",
      },
    ],
    relatedCourses: [
      "Heavy Duty Back Training with Mike Mentzer",
      "Maximizing Strength by Mike Mentzer",
    ],
  },
  {
    id: 5,
    num: "Tom Platz",
    img: tom,
    description: "Tom Platz is an American retired professional bodybuilder known for his massive leg development and intense training style.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Tom Platz's Training Philosophy",
      "Leg Development and Squat Techniques",
      "Nutrition for Muscle Growth",
      "Workout Intensity and Mental Focus",
    ],
    testimonials: [
      {
        text: "Tom Platz's leg training tips took my squats to the next level!",
        author: "Steven Adams",
      },
      {
        text: "His passion for bodybuilding is truly inspiring.",
        author: "Amy Carter",
      },
    ],
    faq: [
      {
        question: "Are the leg workouts suitable for all fitness levels?",
        answer: "The course includes options for various fitness levels and modifications.",
      },
      {
        question: "Do I need a squat rack for the leg workouts?",
        answer: "A squat rack is beneficial for some exercises, but alternatives are provided.",
      },
      {
        question: "How often should I train legs?",
        answer: "The course outlines an effective leg training frequency based on individual goals.",
      },
    ],
    relatedCourses: [
      "Advanced Leg Training Techniques by Tom Platz",
      "Building a Legendary Physique by Tom Platz",
    ],
  },

  {
    id: 6,
    num: "Kevin Levrone",
    img: kevin1,
    description: "Kevin Levrone is an American former professional bodybuilder and actor known for his powerful physique and charisma on stage.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Kevin Levrone's Bodybuilding Approach",
      "Muscle Building and Sculpting",
      "Nutrition and Supplementation",
      "Posing and Presentation",
    ],
    testimonials: [
      {
        text: "Kevin Levrone's course helped me refine my posing and stage presence!",
        author: "Michelle Lee",
      },
      {
        text: "I learned how to tailor my nutrition to fuel my workouts effectively.",
        author: "Mark Johnson",
      },
    ],
    faq: [
      {
        question: "Is this course focused on competition preparation?",
        answer: "The course covers both competitive and general bodybuilding techniques.",
      },
      {
        question: "What posing styles are included in the course?",
        answer: "The course covers classic and modern bodybuilding poses.",
      },
      {
        question: "Can I follow the course without gym equipment?",
        answer: "A gym or home gym with basic equipment is recommended for best results.",
      },
    ],
    relatedCourses: [
      "Advanced Posing Techniques by Kevin Levrone",
      "Kevin Levrone's Arm Specialization Program",
    ],
  },
  {
    id: 7,
    num: "Chris Bumstead",
    img: chris,
    description: "Chris Bumstead is a Canadian IFBB professional bodybuilder and Classic Physique Olympia champion.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Classic Physique Training",
      "Achieving Aesthetics and Symmetry",
      "Nutrition for Classic Physique",
      "Posing and Presentation",
    ],
    testimonials: [
      {
        text: "Chris Bumstead's Classic Physique course helped me improve my proportions!",
        author: "Alex Rivera",
      },
      {
        text: "I learned how to present my physique gracefully on stage.",
        author: "Sophia Collins",
      },
    ],
    faq: [
      {
        question: "Is this course focused on Classic Physique competition?",
        answer: "The course caters to both aspiring competitors and enthusiasts seeking aesthetics.",
      },
      {
        question: "Do I need special equipment for Classic Physique training?",
        answer: "Basic gym equipment is sufficient for Classic Physique workouts.",
      },
      {
        question: "Can women also benefit from this course?",
        answer: "Yes, the principles apply to both men and women seeking Classic Physique aesthetics.",
      },
    ],
    relatedCourses: [
      "Classic Physique Posing by Chris Bumstead",
      "Classic Physique Nutrition Guide by Chris Bumstead",
    ],
  },

  {
    id: 8,
    num: "Mike O'Hearn",
    img: mikeohearn,
    description: "Mike O'Hearn is an American IFBB professional bodybuilder, actor, and fitness model.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Mike O'Hearn's Training Style",
      "Building Functional Muscle",
      "Nutrition and Supplements",
      "Balancing Fitness and Life",
    ],
    testimonials: [
      {
        text: "Mike O'Hearn's course taught me how to balance fitness and my busy schedule.",
        author: "Lisa Adams",
      },
      {
        text: "I appreciate his focus on overall athleticism and functional strength.",
        author: "Eric Thompson",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for beginners?",
        answer: "Yes, the course covers foundational principles and is suitable for all levels.",
      },
      {
        question: "What is Mike's philosophy on training?",
        answer: "Mike emphasizes functional strength and overall health in his approach to fitness.",
      },
      {
        question: "Does this course include bodyweight exercises?",
        answer: "Yes, the course includes bodyweight exercises for functional strength.",
      },
    ],
    relatedCourses: [
      "Functional Strength Training by Mike O'Hearn",
      "Mike O'Hearn's Powerlifting Techniques",
    ],
  },
  {
    id: 9,
    num: "Calum Von Moger",
    img: calum,
    description: "Calum Von Moger is an Australian bodybuilder and social media personality known for his resemblance to Arnold Schwarzenegger.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Bodybuilding like Calum",
      "Building a Classic Physique",
      "Nutrition for Muscle Growth",
      "Posing and Presentation",
    ],
    testimonials: [
      {
        text: "Calum's course helped me embrace a classic bodybuilding approach!",
        author: "Robert Walker",
      },
      {
        text: "I learned how to refine my posing and showcase my physique effectively.",
        author: "Emily Adams",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for aspiring classic bodybuilders?",
        answer: "Yes, the course is designed for those interested in building a classic physique.",
      },
      {
        question: "Can I follow the course without access to a gym?",
        answer: "Some exercises require gym equipment, but alternatives can be suggested.",
      },
      {
        question: "Does the course cover posing for competitions?",
        answer: "Yes, the course includes classic bodybuilding posing techniques.",
      },
    ],
    relatedCourses: [
      "Classic Bodybuilding Nutrition by Calum Von Moger",
      "Classic Physique Workouts by Calum Von Moger",
    ],
  },

  {
    id: 10,
    num: "Frank Zane",
    img: frank,
    description: "Frank Zane is an American former professional bodybuilder and three-time Mr. Olympia champion known for his aesthetics and symmetry.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Frank Zane's Aesthetic Training",
      "Building Aesthetic Muscle and Symmetry",
      "Nutrition and Supplementation for Aesthetics",
      "Posing for Optimal Presentation",
    ],
    testimonials: [
      {
        text: "Frank Zane's approach to aesthetics elevated my bodybuilding game!",
        author: "Thomas Anderson",
      },
      {
        text: "I learned how to create a balanced and symmetrical physique.",
        author: "Sophia Parker",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for competitive bodybuilders?",
        answer: "The course is designed for both competitive and non-competitive bodybuilders seeking aesthetics.",
      },
      {
        question: "Are there any age restrictions for this course?",
        answer: "No, the course is suitable for all ages interested in aesthetic bodybuilding.",
      },
      {
        question: "What type of equipment do I need for the workouts?",
        answer: "The course requires basic gym equipment for most exercises.",
      },
    ],
    relatedCourses: [
      "Aesthetic Posing Techniques by Frank Zane",
      "Nutrition for Aesthetic Bodybuilding by Frank Zane",
    ],
  },
  
  {
    id: 11,
    num: "Jay Cutler",
    img: jay,
    description: "Jay Cutler is an American retired professional bodybuilder and four-time Mr. Olympia champion.",
    exercises: [
      { name: "T-Bar Rows", video: Trow, thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Bodybuilding like Jay Cutler",
      "Maximizing Muscle Mass and Definition",
      "Nutrition and Supplementation for Bodybuilders",
      "Posing and Presentation Techniques",
    ],
    testimonials: [
      {
        text: "Jay Cutler's course provided valuable insights to take my bodybuilding to the next level!",
        author: "Alex Thompson",
      },
      {
        text: "I learned how to fine-tune my diet and workouts for optimal results.",
        author: "Sophia Williams",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for advanced bodybuilders?",
        answer: "Yes, the course caters to both beginners and experienced bodybuilders.",
      },
      {
        question: "Can I follow the course without a gym membership?",
        answer: "A gym membership is recommended for access to necessary equipment.",
      },
      {
        question: "Does the course include contest preparation tips?",
        answer: "Yes, the course covers contest preparation and presentation.",
      },
    ],
    relatedCourses: [
      "Posing Like a Champion by Jay Cutler",
      "Bodybuilding Nutrition Strategies by Jay Cutler",
    ],
  },

  {
    id: 12,
    num: "Flex Wheeler",
    img: flex,
    description: "Flex Wheeler is an American retired professional bodybuilder known for his incredible physique and posing abilities.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Flex Wheeler's Bodybuilding Methods",
      "Building Aesthetic Muscle and Symmetry",
      "Nutrition and Supplementation for Aesthetics",
      "Mastering the Art of Posing",
    ],
    testimonials: [
      {
        text: "Flex Wheeler's posing techniques took my bodybuilding stage presence to new heights!",
        author: "Michael Brooks",
      },
      {
        text: "I learned how to sculpt my physique for aesthetic appeal.",
        author: "Emily Collins",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for aspiring competitive bodybuilders?",
        answer: "Yes, the course covers both competitive and non-competitive bodybuilding techniques.",
      },
      {
        question: "Do I need any specialized equipment for the workouts?",
        answer: "The course requires basic gym equipment for most exercises.",
      },
      {
        question: "Does the course cater to all bodybuilding divisions?",
        answer: "The course focuses on aesthetics and symmetry, which apply to various divisions.",
      },
    ],
    relatedCourses: [
      "Aesthetic Posing Techniques by Flex Wheeler",
      "Nutrition for Aesthetic Bodybuilding by Flex Wheeler",
    ],
  },
  {
    id: 13,
    num: "Larry Scott",
    img: larry,
    description: "Larry Scott was an American professional bodybuilder known for being the first Mr. Olympia winner.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Larry Scott's Training Principles",
      "Building Aesthetic Muscle and Symmetry",
      "Nutrition and Supplementation for Aesthetics",
      "Posing for Optimal Presentation",
    ],
    testimonials: [
      {
        text: "Larry Scott's legacy in bodybuilding lives on through his course!",
        author: "Michael Adams",
      },
      {
        text: "I learned the importance of aesthetics and symmetry in bodybuilding.",
        author: "Emily Wilson",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for those interested in classic bodybuilding?",
        answer: "Yes, the course focuses on classic bodybuilding principles.",
      },
      {
        question: "Can I follow the course without a gym membership?",
        answer: "A gym membership is recommended for access to necessary equipment.",
      },
      {
        question: "Does the course cover posing for stage competitions?",
        answer: "Yes, the course includes classic bodybuilding posing techniques.",
      },
    ],
    relatedCourses: [
      "Classic Bodybuilding Posing by Larry Scott",
      "Aesthetic Nutrition Guide by Larry Scott",
    ],
  },

  {
    id: 14,
    num: "Arnold Schwarzenegger",
    img: arnold,
    description: "Arnold Schwarzenegger is an Austrian-American actor, politician, and former professional bodybuilder who won the Mr. Olympia contest seven times.",
    exercises: [
      { name: "Exercise 1", video: "", thumbnail: "" },
      { name: "Exercise 2", video: "", thumbnail: "" },
    ],
    price: "49",
    courseOverview: [
      "Introduction to Arnold's Bodybuilding Methods",
      "Building Mass and Symmetry",
      "Nutrition and Supplementation for Bodybuilders",
      "Mastering Classic Posing",
    ],
    testimonials: [
      {
        text: "Arnold's course inspired me to pursue bodybuilding as a lifelong journey!",
        author: "Thomas Johnson",
      },
      {
        text: "I learned the importance of setting clear goals and staying committed.",
        author: "Sophia Roberts",
      },
    ],
    faq: [
      {
        question: "Is this course suitable for beginners?",
        answer: "The course covers principles for both beginners and experienced bodybuilders.",
      },
      {
        question: "Can I follow the course without access to a gym?",
        answer: "A gym membership is recommended for access to necessary equipment.",
      },
      {
        question: "Does the course include Arnold's famous arm workouts?",
        answer: "Yes, the course covers Arnold's renowned arm training techniques.",
      },
    ],
    relatedCourses: [
      "Arnold's Total Body Workout",
      "Nutrition and Diet by Arnold Schwarzenegger",
    ],
  },
];
