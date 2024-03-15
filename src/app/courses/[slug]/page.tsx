"use client"
import { BackgroundBeams } from '@/components/ui/background-beams';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';


const Page = ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const [show, setShow] = useState({
        fundamentals: false,
        dailyLife: false,
    });

    useEffect(() => {
        if (slug === 'arabic_fundamentals') {
            setShow({ fundamentals: true, dailyLife: false });
        } else if (slug === 'arabic_daily_life') {
            setShow({ fundamentals: false, dailyLife: true });
        }
    }, [slug]);

    return (
        <div className="min-h-screen bg-black py-12 pt-36 text-center">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            {show.fundamentals && (
                <div className="max-w-4xl flex justify-items-center flex-col mx-auto p-4 relative z-10 bg-black">
                    <h1
                        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Arabic Fundamentals</h1>
                    <div className="img text-center w-full flex justify-center rounded mt-4" >
                        <Image src="/courses/ArabicLanguage.jpg" alt='Arabic Fundamentals' width={800} height={300} />
                    </div>
                    <div className="detailDescription text-white text-left p-7 mt-4">
                        <h3 className='font-bold text-lg'>Overwiev:-</h3>
                        <p>The "Arabic Language Fundamentals" course serves as the cornerstone for anyone seeking to embark on a journey of Arabic language mastery. Designed for beginners and those looking to solidify their foundational knowledge, this course provides a comprehensive introduction to the Arabic language, covering grammar, vocabulary, pronunciation, and basic conversational skills.</p>
                        <h3 className='font-bold text-lg mt-4'>Course Objectives:-</h3>
                        <ul className="list-disc pl-5 " >
                            <li><strong>Build a Strong Foundation:</strong> Lay a solid groundwork in Arabic grammar, enabling you to understand the structure of the language and construct basic sentences.</li>
                            <li><strong>Expand Vocabulary: </strong>Expand your vocabulary with essential words and phrases used in everyday communication, ensuring practical proficiency.</li>
                            <li><strong>Refine Pronunciation: </strong>Focus on accurate pronunciation through guided exercises and drills, helping you develop clear and natural speech.</li>
                            <li><strong>Enhance Listening and Speaking Skills: </strong>Improve your listening comprehension and speaking abilities through interactive activities and dialogues.
                            </li>
                            <li><strong>Develop Reading and Writing Proficiency:</strong>Learn to read Arabic script fluently and write simple texts, enabling you to engage with written materials effectively.
                            </li>
                        </ul>
                        <h3 className='font-bold text-lg mt-4'>Course Structure:-</h3>
                        <ol className='list-decimal pl-6'>
                            <li><strong>Introduction to Arabic Script:</strong>Begin by learning the Arabic alphabet, including consonants, vowels, and diacritical marks. Practice writing and recognizing letters to develop proficiency in Arabic script.
                            </li>
                            <li><strong>Basic Grammar Concepts: </strong>Explore fundamental grammatical concepts such as noun-adjective agreement, verb conjugation, sentence structure, and word order. Gain a solid understanding of how Arabic sentences are formed.
                            </li>
                            <li><strong>Vocabulary Building: </strong>Expand your vocabulary with commonly used words and expressions in various contexts, including greetings, introductions, family, occupations, and daily activities.
                            </li>
                            <li><strong>Pronunciation Practice: </strong>Focus on correct pronunciation of Arabic sounds, including challenging phonemes unique to the language. Practice speaking and listening exercises to improve your accent and fluency.
                            </li>
                            <li><strong>Conversational Skills: </strong>Engage in role-playing activities, dialogues, and group discussions to practice speaking Arabic in real-life situations. Develop confidence in initiating and sustaining conversations.
                            </li>
                        </ol>
                        <h3 className='font-bold text-lg mt-4'>Who Should Enroll</h3>
                        <p>This course is suitable for beginners with little to no prior knowledge of Arabic, as well as those seeking to reinforce their foundational understanding of the language. Whether you're interested in learning Arabic for personal, academic, or professional reasons, this course provides a solid starting point for your language learning journey.</p>
                        <div className="mt-4 w-full text-center">
                            <Link href={"/contact"}>
                                <Button
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    Click Here to Enroll
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            )}
            {show.dailyLife && (
                <div className="max-w-4xl flex justify-items-center flex-col mx-auto p-4 relative z-10 bg-black">
                    <h1
                        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Arabic Daily Life</h1>
                    <div className="img text-center w-full flex justify-center rounded mt-4" >
                        <Image src="/courses/ArabicDaily2.png" alt='Arabic Daily Life' width={800} height={300} />
                    </div>
                    <div className="detailDescription text-white text-left p-7 mt-4">
                        <h3 className='font-bold text-lg'>Overwiev:-</h3>
                        <p>In today's interconnected world, proficiency in Arabic opens doors to countless opportunities for communication, cultural exchange, and personal growth. Our "Arabic for Daily Life" course is specifically designed to equip learners with practical language skills essential for navigating everyday situations with confidence and ease.
                        </p>
                        <h3 className='font-bold text-lg mt-4'>Course Content:-</h3>
                        <ul className="list-disc pl-5 " >
                            <li><strong>Foundational Vocabulary and Expressions:</strong> Build a strong foundation in Arabic vocabulary by learning essential words and phrases commonly used in daily interactions. From greetings and introductions to expressing needs and preferences, you'll acquire the language skills needed to communicate effectively in various contexts.</li>
                            <li><strong>Everyday Conversations: </strong>Engage in meaningful dialogues and role-play scenarios to practice conversational Arabic in real-life situations. Explore topics such as shopping, dining, transportation, and socializing, learning how to initiate conversations, ask questions, and express opinions fluently..</li>
                            <li><strong>Cultural Insights: </strong>Gain valuable insights into Arab culture, customs, and social etiquette to navigate cultural differences with sensitivity and respect. Learn about traditions, gestures, and norms of behavior, enhancing your cross-cultural communication skills and fostering meaningful connections
                            </li>
                            <li><strong>Practical Skills Development: </strong>Develop practical language skills through a variety of interactive activities, including listening exercises, speaking drills, and situational role-plays. Practice pronunciation, intonation, and conversational strategies to enhance your fluency and communication confidence.
                            </li>
                            <li><strong>Real-world Application: </strong>Apply your language skills in real-world scenarios through practical assignments and projects designed to simulate authentic experiences. From planning a trip to an Arabic-speaking country to participating in cultural events, you'll gain practical experience that prepares you for real-life interactions.
                            </li>
                        </ul>
                        <h3 className='font-bold text-lg mt-4'>Who Should Enroll</h3>
                        <ul className='list-disc pl-5'>
                            <li>Beginners with little to no prior knowledge of Arabic who wish to learn practical language skills for everyday use.</li>
                            <li>Travelers, expatriates, and professionals seeking to communicate effectively in Arabic-speaking environments.</li>
                            <li>Language enthusiasts and individuals interested in exploring the rich cultural heritage of the Arab world through language study.
                            </li>
                        </ul>
                        <div className="mt-4 w-full text-center">
                            <Link href={"/contact"}>
                                <Button
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    Click Here to Enroll
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Page;