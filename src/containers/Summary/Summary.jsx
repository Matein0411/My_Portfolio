import { motion } from "framer-motion";
import { images } from "../../constants";
import { useTheme } from "../../hooks/useTheme";
import { AppWrap } from "../../wrapper";
import "./Summary.scss";

const Summary = () => {
  const { mode } = useTheme();
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className={`app__summary  app__flex`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__summary-info"
      >
        <div className="app__summary-badge">
          <div className={`badge-cmp ${mode} app__flex`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Mateo Yunga</h1>
            </div>
          </div>
          <div className={`tag-cmp ${mode} app__flex`}>
            <p className="p-text">Software Engineering Student</p>
            {/* <p className="p-text">MobileApp Develope  r</p> */}
            {/* <p className="p-text">Freelancer</p> */}
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__summary-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__summary-circles"
      >
        {[images.javascript, images.python, images.java].map((circle, index) => (
          <div
            className={`circle-cmp ${mode} app__flex`}
            key={`circle-${index}`}
          >
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Summary, "home");
