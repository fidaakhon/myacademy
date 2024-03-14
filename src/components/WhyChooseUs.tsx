
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Expert Instruction',
      description:
        'Our courses are led by experienced instructors who are passionate about teaching Arabic language, Quranic studies, and Islamic knowledge. Benefit from their expertise and personalized guidance as you embark on your learning journey.',
    },
    {
      title: 'Comprehensive Curriculum',
      description:
        'We offer a comprehensive curriculum designed to cater to learners at all levels, from beginners to advanced. Explore a wide range of courses covering Arabic language fundamentals, Quranic recitation, Islamic ethics, and more, tailored to meet your learning objectives.',
    },
    {
      title: 'Interactive Learning Experience',
      description:
        'Engage in an interactive learning experience that goes beyond traditional methods. Our courses incorporate a variety of teaching techniques, including interactive lectures, discussions, and hands-on activities, to enhance your understanding and retention of the material.',
    },
    {
      title: 'Flexible Learning Options',
      description:
        'Choose from flexible learning options to fit your schedule and preferences. Whether you prefer self-paced online courses or live sessions with instructors, we offer a variety of options to accommodate your learning style and commitments.',
    },
    {
      title: 'Transformative Learning Experience',
      description:
        'Experience the transformative power of education at Zia,s Academy. Gain new insights, broaden your horizons, and develop valuable skills that will empower you to succeed in your personal and professional life.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs