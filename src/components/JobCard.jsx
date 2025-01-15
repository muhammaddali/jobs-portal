import React from 'react';
import Image from 'next/image';

export const JobCard = ({ company, logo, New, Featured, position, role, level, postedAt, contract, location, languages = [], tools = [] }) => {
    return (
        <>
            <div className="max-w-6xl rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row justify-between p-3 sm:gap-3 md:gap-72 mb-8">

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <Image
                        className="rounded-full w-20 h-20 object-cover"
                        src={logo}
                        alt="Company's Logo"
                        width={80}
                        height={80}
                    />

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 textColor">
                            <h3 className="font-semibold">{company}</h3>
                            <div className="flex gap-2">
                                {New && <h3 className="greenBg text-white px-2 py-1 rounded-full text-xs font-semibold">{New}</h3>}
                                {Featured && <h3 className="featureBg text-white px-2 py-1 rounded-full text-xs font-semibold">{Featured}</h3>}
                            </div>
                        </div>

                        <h2 className="text-xl font-bold mb-1">{position}</h2>

                        <div className="flex flex-wrap gap-3 greyText font-semibold text-sm">
                            <h4>{postedAt}</h4>
                            <h4>{contract}</h4>
                            <h4>{location}</h4>
                        </div>
                    </div>
                </div>

                <hr className="md:hidden my-4 border-gray-500" />

                <div className="flex flex-wrap justify-start md:justify-end gap-3 items-center"
                    style={{ cursor: 'pointer' }}
                >
                    <span className="badgeBg badgeText px-3 py-1 rounded-sm text-sm font-bold">
                        {role}
                    </span>
                    <span className="badgeBg badgeText px-3 py-1 rounded-sm text-sm font-bold">
                        {level}
                    </span>

                    {languages.map((lang, index) => (
                        <span key={index} className="badgeBg badgeText px-3 py-1 rounded-sm text-sm font-bold">
                            {lang}
                        </span>
                    ))}
                    {tools.map((tool, index) => (
                        <span key={index} className="badgeBg badgeText px-3 py-1 rounded-sm text-sm font-bold">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};
