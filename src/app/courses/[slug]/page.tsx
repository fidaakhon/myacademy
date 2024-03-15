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
        tajweed: false,
        nazira: false
    });

    useEffect(() => {
        if (slug === 'arabic_fundamentals') {
            setShow({ fundamentals: true, dailyLife: false, tajweed: false, nazira: false });
        } else if (slug === 'arabic_daily_life') {
            setShow({ fundamentals: false, dailyLife: true, tajweed: false, nazira: false });
        } else if (slug === 'tajweed') {
            setShow({ fundamentals: false, dailyLife: false, tajweed: true, nazira: false });
        } else if (slug === 'nazira') {
            setShow({ fundamentals: false, dailyLife: false, tajweed: false, nazira: true });
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
            {show.tajweed && (
                <div className="max-w-4xl flex justify-items-center flex-col mx-auto p-4 relative z-10 bg-black">
                    <h1
                        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Tajweed: Quranic Recitation</h1>
                    <div className="img text-center w-full flex justify-center rounded mt-4" >
                        <Image src="/courses/Tajweed.jpg" alt='Arabic Daily Life' width={800} height={300} />
                    </div>
                    <div className="detailDescription text-white text-left p-7 mt-4">
                        <h3 className='font-bold text-lg'>Overwiev:-</h3>
                        <p>The Quran, as the divine revelation and the ultimate source of guidance for Muslims, holds profound significance in the lives of believers. Mastering the art of Quranic recitation, known as Tajweed, is not only a testament to one's reverence for the sacred text but also a means of deepening one's spiritual connection with Allah.<br />

                            Our "Tajweed: Quranic Recitation" course is meticulously crafted to provide learners with the knowledge, skills, and techniques necessary to recite the Quran with precision, beauty, and reverence. Guided by experienced instructors and enriched with interactive learning experiences, this course offers a transformative journey into the melodious rhythms and divine eloquence of the Quran.
                        </p>
                        <h3 className='font-bold text-lg mt-4'>Course Content:-</h3>
                        <ul className="list-disc pl-5 " >
                            <li><strong>Fundamentals of Tajweed:</strong> Explore the foundational principles of Tajweed, including proper pronunciation (Makharij), articulation points (Sifaat), and rules of recitation (Ahkam). Learn to distinguish between different letters and sounds, mastering the intricacies of Quranic phonetics.</li>
                            <li><strong>Rules of Recitation: </strong>Delve into the rules and regulations governing Quranic recitation, such as elongation (Madd), pauses (Waqf), and nasalization (Ghunnah). Understand the significance of each rule and its application in preserving the integrity and beauty of the Quranic text.</li>
                            <li><strong>Mastery of Sounds and Intonation: </strong>Develop proficiency in producing the various sounds and articulations unique to Quranic recitation. Practice proper pronunciation, intonation, and rhythm to convey the lyrical beauty and divine message of the Quran with precision and clarity.
                            </li>
                            <li><strong>Memorization and Fluency: </strong>Enhance your memorization skills and fluency in reciting Quranic verses through guided practice and repetition. Learn effective memorization techniques and strategies to internalize Quranic passages and develop a strong Quranic repertoire.
                            </li>
                            <li><strong>Spiritual Reflection and Connection: </strong>Deepen your spiritual connection with the Quran through reflective recitation (Tadabbur) and contemplation (Tafsir). Engage with the profound meanings and wisdom of the Quranic verses, fostering a deeper understanding and reverence for the divine message.
                            </li>
                        </ul>
                        <h3 className='font-bold text-lg mt-4'>Who Should Enroll</h3>
                        <ul className='list-disc pl-5'>
                            <li>Individuals seeking to perfect their Quranic recitation skills and master the art of Tajweed.</li>
                            <li>Students of knowledge and seekers of spiritual enrichment who wish to deepen their understanding and appreciation of the Quran.</li>
                            <li>Teachers, Imams, and Quranic instructors interested in enhancing their teaching methodologies and pedagogical approaches in Quranic recitation.
                            </li>
                        </ul>
                        <p className='font-bold mt-3'>Embark on a transformative journey into the world of Tajweed and Quranic recitation. Join us in unlocking the beauty, power, and spiritual significance of the Quranic text. Enroll in our "Tajweed: Quranic Recitation" course and embark on a profound and enriching quest to connect with the divine word of Allah.</p>
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
            {show.nazira && (
                <div className="max-w-4xl flex justify-items-center flex-col mx-auto p-4 relative z-10 bg-black">
                    <h1
                        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Quran Nazira</h1>
                    <div className="img text-center w-full flex justify-center rounded mt-4" >
                        <Image src="/courses/Nazira.jpg" alt='Arabic Daily Life' width={800} height={300} />
                    </div>
                    <div className="detailDescription text-white text-left p-7 mt-4">
                        <h3 className='font-bold text-lg'>Overwiev:-</h3>
                        <p>The Quran stands as the timeless and sacred scripture of Islam, revered by millions around the world for its divine guidance and profound wisdom. Memorizing and reciting the Quran, known as Nazira, is a cherished tradition that not only preserves the integrity of the text but also deepens one's spiritual connection with Allah.<br />

                            Our "Quran Nazira" course offers a comprehensive and structured approach to Quranic memorization and recitation, guided by experienced instructors and enriched with interactive learning experiences. Whether you're a beginner embarking on your memorization journey or seeking to refine your recitation skills, this course provides the tools and support you need to excel in your Quranic studies.
                        </p>
                        <h3 className='font-bold text-lg mt-4'>Course Content:-</h3>
                        <ul className="list-disc pl-5 " >
                            <li><strong>Memorization Techniques:</strong> Learn effective memorization techniques and strategies to facilitate the memorization of Quranic verses and chapters. Explore mnemonic devices, repetition methods, and visualization techniques to enhance retention and recall.</li>
                            <li><strong>Recitation Practice: </strong>Engage in regular recitation practice sessions to reinforce memorized verses and improve fluency in Quranic recitation. Receive personalized feedback and guidance from instructors to correct pronunciation, intonation, and rhythm.</li>
                            <li><strong>Tajweed Application: </strong>Apply Tajweed rules and principles in your recitation to ensure proper pronunciation, articulation, and rhythm. Learn to recognize and apply the rules of Tajweed, such as elongation (Madd), stops (Waqf), and nasalization (Ghunnah), enhancing the beauty and accuracy of your recitation.
                            </li>
                            <li><strong>Revision and Review: </strong>Incorporate regular revision and review sessions into your study routine to maintain and strengthen memorization proficiency. Practice reciting previously memorized verses and chapters, consolidating your memorization and improving retention.
                            </li>
                            <li><strong>Spiritual Enrichment: </strong>Cultivate a deeper spiritual connection with the Quran through reflective recitation (Tadabbur) and contemplation (Tafsir). Engage with the meanings and lessons of Quranic verses, fostering personal growth, and spiritual enlightenment.
                            </li>
                        </ul>
                        <h3 className='font-bold text-lg mt-4'>Who Should Enroll</h3>
                        <ul className='list-disc pl-5'>
                            <li>Individuals aspiring to memorize the Quran and deepen their spiritual connection with the divine scripture.
                            </li>
                            <li>Students of knowledge and seekers of spiritual enlightenment who wish to embark on a journey of Quranic memorization and recitation.</li>
                            <li>Parents and educators interested in guiding children and youth in Quranic memorization and recitation practices.
                            </li>
                        </ul>
                        <p className='font-bold mt-3'>Embark on a transformative journey of Quranic memorization and recitation with our "Quran Nazira" course. Join us in preserving the beauty, integrity, and divine message of the Quran through the cherished tradition of Nazira. Enroll today and embark on a profound and rewarding quest to connect with the eternal word of Allah.</p>
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