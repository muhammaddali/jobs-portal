import React from 'react';
import Image from 'next/image';
import sampleImg from '../../images/sample.jpg';

export const JobCard = () => {
    return (
        <>
            <div className="max-w-6xl rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row justify-center p-3 gap-72">

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

                    <Image
                        className="rounded-full w-20 h-20 object-cover"
                        src={sampleImg}
                        alt="Sample"
                        width={80}
                        height={80}
                    />


                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 textColor">
                            <h3 className="font-semibold">Company</h3>
                            <h3 className="bg-blue-100 text-blue-500 px-2 py-1 rounded text-xs">New</h3>
                            <h3 className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Featured</h3>
                        </div>

                        <h2 className="text-xl font-bold mb-1">Card Title</h2>

                        <div className="flex flex-wrap gap-3 text-gray-600 text-sm">
                            <h4>Posted At</h4>
                            <h4>Contract</h4>
                            <h4>Location</h4>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-start md:justify-end gap-3 items-center">
                    <span className="badgeBg badgeText px-3 py-1 rounded-full text-sm font-bold">
                        Frontend
                    </span>
                    <span className="badgeBg badgeText px-3 py-1 rounded-full text-sm font-bold">
                        Senior
                    </span>
                    <span className="badgeBg badgeText px-3 py-1 rounded-full text-sm font-bold">
                        HTML
                    </span>
                </div>

            </div>
        </>
    );
};
