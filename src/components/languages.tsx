import React, { useState } from 'react';
import JavaScript from '../assets/javascript.png';
import TypeScript from '../assets/typescript.png';
import NodeJs from '../assets/nodeJs.png';
import NestJs from '../assets/nestJs.svg';
import ReactIcon from '../assets/react.png';
import Flutter from '../assets/flutter.png';
import Phyton from '../assets/phyton.png';
import VueJs from '../assets/vueJs.png';

export function Languages() {
    const [showJavaScriptTag, setShowJavaScriptTag] = useState(false);
    const [showTypeScriptTag, setShowTypeScriptTag] = useState(false);
    const [showNodeJsTag, setShowNodeJsTag] = useState(false);
    const [showNestJsTag, setShowNestJsTag] = useState(false);
    const [showReactTag, setShowReactTag] = useState(false);
    const [showFlutterTag, setShowFlutterTag] = useState(false);
    const [showPhytonTag, setShowPhytonTag] = useState(false);
    const [showVueJsTag, setShowVueJsTag] = useState(false);

    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowJavaScriptTag(true)} onMouseLeave={() => setShowJavaScriptTag(false)}>
                    <img src={JavaScript} width={50} height={50} className="w-full h-auto" alt="JavaScript" />
                    {showJavaScriptTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            JavaScript
                        </div>
                    )}
                </div>
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowTypeScriptTag(true)} onMouseLeave={() => setShowTypeScriptTag(false)}>
                    <img src={TypeScript} width={50} height={50} className="w-full h-auto" alt="TypeScript" />
                    {showTypeScriptTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            TypeScript
                        </div>
                    )}
                </div>
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowNodeJsTag(true)} onMouseLeave={() => setShowNodeJsTag(false)}>
                    <img src={Phyton} width={50} height={50} className="w-full h-auto" alt="Node.js" />
                    {showNodeJsTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Phyton
                        </div>
                    )}
                </div>
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowReactTag(true)} onMouseLeave={() => setShowReactTag(false)}>
                    <img src={ReactIcon} width={50} height={50} className="w-full h-auto" alt="React" />
                    {showReactTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            React
                        </div>
                    )}
                </div>
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowPhytonTag(true)} onMouseLeave={() => setShowPhytonTag(false)}>
                    <img src={NodeJs} width={50} height={50} className="w-full h-auto" alt="Phyton" />
                    {showPhytonTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            NodeJs
                        </div>
                    )}
                </div>
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowNestJsTag(true)} onMouseLeave={() => setShowNestJsTag(false)}>
                    <img src={NestJs} width={50} height={50} className="w-full h-auto" alt="Nest.js" />
                    {showNestJsTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Nest.js
                        </div>
                    )}
                </div>
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowVueJsTag(true)} onMouseLeave={() => setShowVueJsTag(false)}>
                    <img src={VueJs} width={50} height={50} className="w-full h-auto" alt="Vue.js" />
                    {showVueJsTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Vue.js
                        </div>
                    )}
                </div>
                <div className="relative inline-block w-14 h-14" onMouseEnter={() => setShowFlutterTag(true)} onMouseLeave={() => setShowFlutterTag(false)}>
                    <img src={Flutter} width={50} height={50} className="w-full h-auto" alt="Flutter" />
                    {showFlutterTag && (
                        <div className="absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Flutter
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}