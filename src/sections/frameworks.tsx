import { useState } from 'react';
import JavaScript from '../assets/javascript.png';
import TypeScript from '../assets/typescript.png';
import NodeJs from '../assets/nodeJs.png';
import NestJs from '../assets/nestJs.svg';
import ReactIcon from '../assets/react.png';
import Flutter from '../assets/flutter.png';
// import Phyton from '../assets/phyton.png';
import VueJs from '../assets/vueJs.png';

export function Frameworks() {
    const [showJavaScriptTag, setShowJavaScriptTag] = useState(false);
    const [showTypeScriptTag, setShowTypeScriptTag] = useState(false);
    // const [showNodeJsTag, setShowNodeJsTag] = useState(false);
    const [showNestJsTag, setShowNestJsTag] = useState(false);
    const [showReactTag, setShowReactTag] = useState(false);
    const [showFlutterTag, setShowFlutterTag] = useState(false);
    const [showPhytonTag, setShowPhytonTag] = useState(false);
    const [showVueJsTag, setShowVueJsTag] = useState(false);

    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-10 xl:px-10">
            <div className="sm:w-auto w-full sm:mx-2 mb-4 sm:mb-0 border sm:border-[#33353F] rounded-md py-6 px-2 flex flex-wrap justify-center gap-7">
                <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowJavaScriptTag(true)} onMouseLeave={() => setShowJavaScriptTag(false)}>
                    <img src={JavaScript} className="w-14 h-14" alt="JavaScript" />
                    {showJavaScriptTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            JavaScript
                        </div>
                    )}
                </div>
                <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowTypeScriptTag(true)} onMouseLeave={() => setShowTypeScriptTag(false)}>
                    <img src={TypeScript} className="w-14 h-14" alt="TypeScript" />
                    {showTypeScriptTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            TypeScript
                        </div>
                    )}
                </div>
                {/* <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowNodeJsTag(true)} onMouseLeave={() => setShowNodeJsTag(false)}>
                    <img src={Phyton} className="w-12 h-12" alt="Node.js" />
                    {showNodeJsTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Phyton
                        </div>
                    )}
                </div> */}
                <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowReactTag(true)} onMouseLeave={() => setShowReactTag(false)}>
                    <img src={ReactIcon} className="w-12 h-12" alt="React" />
                    {showReactTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            React
                        </div>
                    )}
                </div>
                <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowPhytonTag(true)} onMouseLeave={() => setShowPhytonTag(false)}>
                    <img src={NodeJs} className="w-12 h-12" alt="Phyton" />
                    {showPhytonTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            NodeJs
                        </div>
                    )}
                </div>
                <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowNestJsTag(true)} onMouseLeave={() => setShowNestJsTag(false)}>
                    <img src={NestJs} className="w-12 h-12" alt="Nest.js" />
                    {showNestJsTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Nest.js
                        </div>
                    )}
                </div>
                <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowVueJsTag(true)} onMouseLeave={() => setShowVueJsTag(false)}>
                    <img src={VueJs} className="w-12 h-12" alt="Vue.js" />
                    {showVueJsTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Vue.js
                        </div>
                    )}
                </div>
                <div className="relative inline-block sm:w-auto h-auto" onMouseEnter={() => setShowFlutterTag(true)} onMouseLeave={() => setShowFlutterTag(false)}>
                    <img src={Flutter} className="w-12 h-12" alt="Flutter" />
                    {showFlutterTag && (
                        <div className="absolute top-0 right-1/2 translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg">
                            Flutter
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}