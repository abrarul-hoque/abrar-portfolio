import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import skillLogo from '../../../assets/icon/skills.png';
import { FaBootstrap, FaCpanel, FaCss3, FaHtml5, FaJs, FaNode, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import './Skills.css';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills" className="max-w-6xl mx-auto p-4 mb-6">
            <SectionTitle subHeading={"What i have know?"} heading={"Expertise & Skills"} sectionLogo={skillLogo}></SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="hover:text-[#F06529] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaHtml5 className="text-6xl text-[#F06529]"></FaHtml5>
                            </div>
                            <h3 className="text-3xl font-bold">HTML</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#264de4] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaCss3 className="text-6xl text-[#264de4]"></FaCss3>
                            </div>
                            <h3 className="text-3xl font-bold">CSS</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#6634b1] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaBootstrap className="text-6xl text-[#6634b1]"></FaBootstrap>
                            </div>
                            <h3 className="text-2xl font-bold">Bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#0ea5e9] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center text-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <RiTailwindCssFill className="text-6xl text-[#0ea5e9]"></RiTailwindCssFill>
                            </div>
                            <h3 className="text-xl font-bold">Tailwind Css</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#f9d803] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaJs className="text-6xl text-[#f9d803]"></FaJs>
                            </div>
                            <h3 className="text-3xl font-bold">Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#00b3df] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaReact className="text-6xl text-[#00b3df]"></FaReact>
                            </div>
                            <h3 className="text-3xl font-bold">React</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#F6820D] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <SiFirebase className="text-6xl text-[#F6820D]"></SiFirebase>
                            </div>
                            <h3 className="text-3xl font-bold">Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#8F3A84] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <SiExpress className="text-6xl text-[#8F3A84]"></SiExpress>
                            </div>
                            <h3 className="text-3xl font-bold">Express</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#3c873a] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaNodeJs className="text-6xl text-[#3c873a]"></FaNodeJs>
                            </div>
                            <h3 className="text-2xl font-bold">Node Js</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#21759b] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaWordpress className="text-6xl text-[#21759b]"></FaWordpress>
                            </div>
                            <h3 className="text-2xl font-bold">Wordpress</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#FF6C2C] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <FaCpanel className="text-6xl text-[#FF6C2C]"></FaCpanel>
                            </div>
                            <h3 className="text-3xl font-bold">cPanel</h3>
                        </div>
                    </div>
                </div>
                <div className="hover:text-[#15847b] border-2 rounded-xl p-6  single-skill hvr-float cursor-pointer">
                    <div className="flex justify-center">
                        <div>
                            <div className="flex justify-center mb-2">
                                <BiLogoNetlify className="text-6xl text-[#15847b]"></BiLogoNetlify>
                            </div>
                            <h3 className="text-3xl font-bold">Netlify</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;