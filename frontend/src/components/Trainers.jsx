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
import johndoe from '../assets/john-doe.png'
import zena from '../assets/zena.webp'

export const  trainers = [
  {
    classId:15,
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
        authorImage: johndoe,
        rating: 5, 
      },
      {
        text: "The course provided valuable insights into bodybuilding techniques.",
        author: "Jane Smith",
        authorImage: zena,
        rating: 4.3, 
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
    classId:25,
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
        authorImage: zena,
        rating: 4.5, 
      },
      {
        text: "His mental resilience techniques are powerful and inspiring.",
        author: "Michael Adams",
        authorImage: johndoe,
        rating: 5, 
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
    classId:35,
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
        authorImage: johndoe,
        rating: 5, 
      },
      {
        text: "I learned the proper form and technique to maximize my lifts.",
        author: "Jessica Green",
        authorImage:zena,
        rating: 5, 
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
    classId:45,
    id: 4,
    num: "Mike Mentzer",
    img: mike,
    description: "Mike Mentzer was an American professional bodybuilder known for his Heavy Duty training philosophy.",
    exercises: [
      { name: "Incline Dumbbell Flies", video: mikedbf, thumbnail: mikedbfJPG },
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
        authorImage: johndoe,
        rating: 4.3, 
      },
      {
        text: "I appreciate the emphasis on recovery and avoiding overtraining.",
        author: "Emily White",
        authorImage: zena,
        rating: 5, 
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
    classId:55,
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
        authorImage: johndoe,
        rating: 5, 
      },
      {
        text: "His passion for bodybuilding is truly inspiring.",
        author: "Amy Carter",
        authorImage: zena,
        rating: 5, 
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
    classId:65,
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
        authorImage: zena,
        rating: 5, 
      },
      {
        text: "I learned how to tailor my nutrition to fuel my workouts effectively.",
        author: "Mark Johnson",
        authorImage: johndoe,
        rating: 5, 
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
    classId:75,
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
        authorImage: 'https://yt3.googleusercontent.com/lN8vE5uYnGBbMjl2eooSC2TTpDlfiYtWLCBtU_2lOQsepHEKW_2nyhpJ7hxBv_A2sv7-MCbI6w=s900-c-k-c0x00ffffff-no-rj',
        rating: 5, 
      },
      {
        text: "I learned how to present my physique gracefully on stage.",
        author: "Cortney Alexis King",
        authorImage: 'https://www.muscleandfitness.com/wp-content/uploads/2016/09/PB31529.jpg?w=300&quality=40&strip=all',
        rating: 4.5, 
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
    classId:85,
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
        authorImage: 'https://www.usatoday.com/gcdn/presto/2023/01/10/USAT/9abf6153-77ca-4cd6-8d36-8a495172056b-emily_robinson.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp',
        rating: 4, 
      },
      {
        text: "I appreciate his focus on overall athleticism and functional strength.",
        author: "Eric Thompson",
        authorImage: 'https://pbs.twimg.com/media/FiZQn87X0AI-_kY?format=jpg&name=large',
        rating: 4, 
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
    classId:95,
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
        authorImage: 'https://steamuserimages-a.akamaihd.net/ugc/1997946697935212396/83D71DDE8FE99E2891081771B08CD7938D6100F6/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        rating: 5, 
      },
      {
        text: "I learned how to refine my posing and showcase my physique effectively.",
        author: "Emily Adams",
        authorImage: 'https://p16-amd-va.axod.net/obj/tos-maliva-p-0068/a13d1a38de02902e3d45a9e39f84947c.jpg?x-expires=1692892894&x-signature=omXJxeHQonNpmzz91q0i9DuavpD5b5p3rfCFekOO%3D',
        rating: 4.5, 
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
    classId:105,
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
        authorImage: "https://i1.sndcdn.com/artworks-tFqLwOpPeGOaZeW0-L4pGtA-t500x500.jpg",
        rating: 5, 
      },
      {
        text: "I learned how to create a balanced and symmetrical physique.",
        author: "Sophia Parker",
        authorImage: 'https://w0.peakpx.com/wallpaper/260/66/HD-wallpaper-irina-dreyt-portrait-display-brunette-women-outdoors-model-smartphone-pants-side-view-depth-of-field-women-sunlight-hat-ass-women-with-glasses-profile-sea-thumbnail.jpg',
        rating: 4, 
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
    classId:115,
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
        authorImage: 'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Michael%20Osterrieder,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1536739214/pt5jhbphubanbzqy19ir.jpg',
        rating: 5, 
      },
      {
        text: "I learned how to fine-tune my diet and workouts for optimal results.",
        author: "Sophia Williams",
        authorImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYTbrBCi7fEvWLoOXGl5D36WsLdVAkPKYjQ&usqp=CAU',
        rating: 5, 
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
    classId:125,
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
        authorImage: 'https://wallpapercave.com/wp/wp7578910.jpg',
        rating: 5, 
      },
      {
        text: "I learned how to sculpt my physique for aesthetic appeal.",
        author: "Emily Collins",
        authorImage: 'https://i.pinimg.com/1200x/39/60/e2/3960e2aa41c5f2a305ba9185700dfdba.jpg',
        rating: 5, 
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
    classId:135,
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
        authorImage: johndoe,
        rating: 4, 
      },
      {
        text: "I learned the importance of aesthetics and symmetry in bodybuilding.",
        author: "Emily Wilson",
        authorImage: zena,
        rating: 3.5, 
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
    classId:145,
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
        authorImage: "https://people.com/thmb/ADBOAkfhESlZjkEn8_1O_KMzK6M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(539x0:541x2):format(webp)/joseph-baena-1-1-70970815e6bf49f3b15e841c72751ca5.jpg",
        rating: 5, 
      },
      {
        text: "I learned the importance of setting clear goals and staying committed.",
        author: "Sophia Roberts",
        authorImage: "https://preview.redd.it/new-lean-beef-patty-post-it-could-be-lighting-but-that-back-v0-2y0j5ggfwdab1.png?auto=webp&s=0aed27abb4ccca78c41519668b2580bb2700a127",
        rating: 5, 
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

