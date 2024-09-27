import { motion } from "framer-motion";

const MySkills = () => {
  const skills = [
    { name: "JavaScript", color: "bg-purple-400" },
    { name: "React", color: "bg-purple-500" },
    { name: "Node.js", color: "bg-purple-600" },
    { name: "CSS", color: "bg-purple-700" },
    { name: "Tailwind CSS", color: "bg-purple-800" },
    { name: "MongoDB", color: "bg-purple-900" },
    { name: "Express.js", color: "bg-purple-400" },
    { name: "Python", color: "bg-purple-500" },
    { name: "Typescript", color: "bg-purple-600" },
    { name: "Firebase", color: "bg-purple-700" },
    { name: "Git", color: "bg-purple-800" },
    { name: "Github", color: "bg-purple-900" },
    { name: "VS Code", color: "bg-purple-400" },
  ];

  return (
    <section id="about-me" className="pt-10 pb-24">
      <div className="text-center mt-16">
        <h2 className="font-playfair font-semibold text-4xl mb-5">
          ABOUT <span className="text-pink">ME</span>
        </h2>
      </div>
      <div className="md:flex md:justify-between md:gap-16 mt-16">
        {/* TECHNICAL SKILLS */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="font-playfair font-semibold text-2xl mb-5">
            Skills
          </h3>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 text-center text-white ${skill.color} rounded-full`}
              >
                <p className="text-xl font-semibold">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center items-center mt-16 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="font-playfair font-semibold text-2xl mb-5">
            a little introduction ...
          </h3>
          <p className="mt-4 mb-7 text-left">
          Hello, my name is Michelle, and I am a disciplined software engineer with a 
          passion for learning and expanding my technical expertise. My goal is to 
          contribute to meaningful projects that will leave an impact on people.
          </p>
          <p className="mt-4 mb-7 text-left">
          Currently, I am pursuing a BS in Computer Science at Stanford University,
          where I am involved in Women in Computer Science and the Vietnamese
          Student Association. 
          </p>

          <p className="mt-4 mb-7 text-left">
          This Winter quarter, I will be a part of Stanford’s CS + Social Good, where I
          plan to leverage technology to support underprivileged communities. As an 
          aspiring software engineer, my goal is to empower those in need. 
          </p>

          <p className="mt-4 mb-7 text-left">
          I am driven by my curiosity for the vast amount of things I still need to learn. I
          am constantly pushing myself to seek new challenges. I believe that the most
          effective way to grow is to learn from those with more experience and to make mistakes. 

          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

