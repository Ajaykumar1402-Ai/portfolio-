import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    num: "01 // 2026",
    title: "Smart Farming — AI Crop Disease Detection",
    desc: "CNN-based classifier using TensorFlow and OpenCV. Analyzes crop images in real time, detects disease cause, and suggests remedies — optimized for rural low-connectivity environments. Presented as a research paper at Sri Eshwar College of Technology.",
    tags: ["TensorFlow", "OpenCV", "CNN", "Python"],
    codeLink: "YOUR_GITHUB_REPO_LINK_HERE",
    demoLink: "YOUR_COLAB_OR_DEMO_LINK_HERE",
    image: "/proj_smart_farming.png"
  },
  {
    num: "02 // 2026",
    title: "Voice Assistant — Real-Time Mobile Voice Agent",
    desc: "A voice assistant deployed on mobile via LiveKit for real-time, low-latency voice streaming. Integrates NLP modules for intent recognition, enabling context-aware responses across multiple use cases.",
    tags: ["LiveKit", "NLP", "Python", "Mobile"],
    codeLink: "YOUR_GITHUB_REPO_LINK_HERE",
    demoLink: "YOUR_DEMO_LINK_HERE",
    image: "/proj_voice_assistant.png"
  },
  {
    num: "03 // 2026",
    title: "TB Vision Pro — AI Tuberculosis Detection System",
    desc: "A multimodal AI system that combines chest X-ray image analysis with clinical symptom data to detect Tuberculosis with clinical-grade accuracy. Built to assist early screening by fusing computer vision and structured health data into a single prediction pipeline.",
    tags: ["Python", "PyTorch/TensorFlow", "CNN", "FastAPI", "React"],
    codeLink: "https://github.com/Ajaykumar1402-Ai/Multimodal-TB-Detection-System",
    demoLink: "https://multimodal-tb-detection-system.vercel.app/",
    image: "/proj_tb_vision.png"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const brightness = useTransform(mouseYSpring, [-0.5, 0.5], [1.1, 0.9]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      style={{
