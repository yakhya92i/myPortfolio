"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disk pl-2'>
                <li>Canva</li>
                <li>NextJs</li>
                <li>Node.js</li>
                <li>ReactJs</li>
                <li>MongoDB</li>
                <li>ExpressJs</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>Office Pack</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disk pl-2'>
                <li>Goethe Institut - German Courses</li>
                <li>BEM - Oil & Gas Logistics and Distribution</li>
                <li>Gomycode - Software Developper Bootcamp</li>
                <li>IAM Tech - Preparatory courses in engineering program</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "Certification",
        content: (
            <ul className='list-disk pl-2'>
                <a href="https://diploma.gomycode.app/?id=31722594257975311">
                <button className= 'bg-red-700 p-2 rounded-2xl'> <li>Certified Software Developer</li> </button>
                </a>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 itemss-center py-8 px-image source \4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/setup.png" width={500} height={700} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg '>
                        I am a software developer and I am also studying oil logistics.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("Education")}
                            active={tab === "Education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("Certification")}
                            active={tab === "Certification"}
                        >
                            {" "}
                            Certification{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>

    )
}

export default AboutSection;