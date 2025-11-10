
import React, { useState, ReactNode } from 'react';
import Modal from './Modal';
import { ModalId } from '../types';

interface ThemeLayoutProps {
    children: ReactNode;
}

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalId>(ModalId.None);

    const openModal = (modalId: ModalId) => setActiveModal(modalId);
    const closeModal = () => setActiveModal(ModalId.None);

    const navLinks = [
        { id: ModalId.About, label: 'About' },
        { id: ModalId.Contact, label: 'Contact' },
        { id: ModalId.Guide, label: 'Guide' },
        { id: ModalId.Privacy, label: 'Privacy' },
        { id: ModalId.Terms, label: 'Terms' },
        { id: ModalId.DMCA, label: 'DMCA' },
    ];

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <div className="cosmic-background fixed top-0 left-0 w-full h-full z-[-1]"></div>

            <header className="bg-black bg-opacity-30 backdrop-blur-sm sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-wider">
                        Cosmic Markdown Previewer
                    </h1>
                    <nav className="mt-4 sm:mt-0">
                        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <button onClick={() => openModal(link.id)} className="text-gray-300 hover:text-white transition-colors duration-200">
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="relative z-10">{children}</div>

            <footer className="bg-black bg-opacity-30 backdrop-blur-sm mt-12 py-6">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p className="mb-2">
                        <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" style={{color: '#FFD700'}} className="font-bold hover:underline">
                            Powered by HSINI MOHAMED
                        </a>
                    </p>
                    <p>
                        <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white mx-2">doodax.com</a> | 
                        <a href="mailto:hsini.web@gmail.com" className="hover:text-white mx-2">hsini.web@gmail.com</a>
                    </p>
                </div>
            </footer>
            
            <Modal isOpen={activeModal === ModalId.About} onClose={closeModal} title="About Us">
                <p>Welcome to the Cosmic Markdown Previewer, a sleek and powerful tool for developers, writers, and content creators. Our mission is to provide a seamless and aesthetically pleasing environment for writing and previewing Markdown in real-time.</p>
                <p>Built with React, Tailwind CSS, and Marked.js, this application is designed for performance and usability, wrapped in a beautiful, animated cosmic theme.</p>
            </Modal>
            <Modal isOpen={activeModal === ModalId.Contact} onClose={closeModal} title="Contact">
                <p>For any inquiries, feedback, or support, please feel free to reach out to us.</p>
                <p><strong>Creator:</strong> HSINI MOHAMED</p>
                <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a></p>
                <p><strong>Website:</strong> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer">doodax.com</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer">hsinidev</a></p>
            </Modal>
             <Modal isOpen={activeModal === ModalId.Guide} onClose={closeModal} title="How to Use">
                <p>Using the Cosmic Markdown Previewer is simple:</p>
                <ol>
                    <li>Type your Markdown syntax in the left panel (the "Markdown Input" area).</li>
                    <li>As you type, a live, styled HTML preview will instantly appear in the right panel.</li>
                    <li>Use the <strong>Clear Input</strong> button to erase all text from the input panel.</li>
                    <li>Use the <strong>Copy HTML</strong> button to copy the generated HTML code to your clipboard.</li>
                </ol>
                <p>For a refresher on Markdown syntax, check out the comprehensive article below the tool.</p>
            </Modal>
            <Modal isOpen={activeModal === ModalId.Privacy} onClose={closeModal} title="Privacy Policy">
                <p>This application operates entirely on the client-side. We do not collect, store, or transmit any of the data you enter into the Markdown input field. Your text is processed locally in your browser and is never sent to any server. Your privacy is fully respected.</p>
            </Modal>
            <Modal isOpen={activeModal === ModalId.Terms} onClose={closeModal} title="Terms of Service">
                <p>This tool is provided free of charge and "as is" without any warranties. By using this application, you agree not to hold the creators liable for any issues that may arise from its use. You are responsible for the content you create.</p>
            </Modal>
            <Modal isOpen={activeModal === ModalId.DMCA} onClose={closeModal} title="DMCA">
                 <p>We respect the intellectual property rights of others. Since this application does not host any user-generated content on our servers, any content created by users remains local to their machine. If you have concerns about the application itself, please contact us at hsini.web@gmail.com.</p>
            </Modal>
        </div>
    );
};

export default ThemeLayout;
