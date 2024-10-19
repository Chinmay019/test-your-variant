import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const aboutUsContents = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="grid grid-cols-4 gap-4">
                <div className="p-6  col-span-3">
                    <span className="font-bold">What we do</span>
                    <div className="text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae, quidem voluptates, unde, dolores ad numquam ipsa perspiciatis illum inventore porro cumque laborum consequatur culpa hic quia tempora accusantium eaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae, quidem voluptates, unde, dolores ad numquam ipsa perspiciatis illum inventore porro cumque laborum consequatur culpa hic quia tempora accusantium eaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae, quidem voluptates, unde, dolores ad numquam ipsa perspiciatis illum inventore porro cumque laborum consequatur culpa hic quia tempora accusantium eaque.
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="lg:m-6 md:m-4">
                        <h2>About Me</h2>
                        <div className="group italic mt-3">
                            <p>I'm <span className="font-bold">Chinmay Naik.</span></p>
                            <p>I like to solve problems and develop usable solutions for it that helps people.</p>
                            <p>I'm also a Software Engineer 🙂</p>

                            <p className="pt-3">
                                Hit me on my socials anytime
                            </p>
                            <div className="flex gap-4 mt-5">
                                <a href="https://www.instagram.com/chinmay___19/" target="_blank"><FaInstagram size={'40px'} /></a>
                                <a href="https://in.linkedin.com/in/chinmay-d-naik" target="_blank"><FaLinkedin size={'40px'} /></a>
                                <a href="https://github.com/Chinmay019" target="_blank"><FaGithub size={'40px'} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUsContents;