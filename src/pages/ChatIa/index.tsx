import React, { useState, useEffect } from 'react';
import styles from './chatIa.module.css';

const ChatIa = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [messageInput, setMessageInput] = useState('');
    const [showContextualButtons, setShowContextualButtons] = useState(false);
    const [showFunctionMenu, setShowFunctionMenu] = useState(false);
    const [showExercisesSubmenu, setShowExercisesSubmenu] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleMessageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageInput(e.target.value);
        setShowContextualButtons(e.target.value.length > 0);
    };

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            console.log('Sending message:', messageInput);
            setMessageInput('');
            setShowContextualButtons(false);
        }
    };

    return (
        <div className={styles['app-container']}>
        <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.collapsed}`} id="chat-sidebar">
        <div className={styles['sidebar-header']}>
        <div className={styles['sidebar-header-actions']}>
        <button className={styles['icon-button']} title="Buscar" data-tooltip="Buscar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-search h-4 w-4']}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button className={styles['icon-button']} title="Arquivo" data-tooltip="Arquivo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-file-text h-4 w-4']}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </button>
        <button className={styles['icon-button']} title="Pasta" data-tooltip="Pasta">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-folder h-4 w-4']}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 4.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
        </button>
        </div>
        <div className={styles['sidebar-search']}>
        <input type="text" placeholder="Buscar" className={styles['sidebar-input']} />
        </div>
        </div>
        <div className={styles['sidebar-content']}>
        <ul className={styles['sidebar-menu']}>
        <li className={styles['sidebar-menu-item']}><button className={styles['sidebar-menu-button']} data-tooltip="Recentes">Recentes</button></li>
        <li className={styles['sidebar-menu-item']}><button className={styles['sidebar-menu-button']} data-tooltip="Como calcular área">Como calcular área</button></li>
        <li className={styles['sidebar-menu-item']}><button className={styles['sidebar-menu-button']} data-tooltip="Exercícios de Bio...">Exercícios de Bio...</button></li>
        <li className={styles['sidebar-menu-item']}><button className={styles['sidebar-menu-button']} data-tooltip="25 dias atrás">25 dias atrás</button></li>
        <li className={styles['sidebar-menu-item']}><button className={styles['sidebar-menu-button']} data-tooltip="Resumo de inglês">Resumo de inglês</button></li>
        <li className={styles['sidebar-menu-item']}><button className={styles['sidebar-menu-button']} data-tooltip="História questões">História questões</button></li>
        <li className={styles['sidebar-menu-item']}>
        <button className={styles['sidebar-menu-button']} data-tooltip="Mostrar mais">
        <span>Mostrar mais</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-chevron-down ml-auto h-4 w-4']}><path d="m6 9 6 6 6-6"/></svg>
        </button>
        </li>
        </ul>
        </div>
        <div className={styles['sidebar-footer']}>
        <button className={`${styles['sidebar-menu-button']} ${styles['toggle-sidebar-button']}`} title="Minimizar barra lateral" data-tooltip="Minimizar barra lateral" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-panel-left h-4 w-4']}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/></svg>
        <span>Minimizar</span>
        </button>
        <button id="dark-mode-toggle" className={styles['sidebar-menu-button']} title="Alternar Modo Escuro" data-tooltip="Alternar Modo Escuro" onClick={toggleDarkMode}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-moon h-4 w-4']}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        <span>Modo Escuro</span>
        </button>
        </div>
        <div id="sidebar-tooltip" className={styles['sidebar-tooltip']}></div>
        </aside>

        <div className={styles['mobile-sidebar-overlay']} id="mobile-sidebar-overlay" onClick={toggleSidebar}></div>

        <div className={styles['chat-main']}>
        <header className={styles['chat-header']}>
        <div className={styles['chat-title-container']}>
        <button className={`${styles['icon-button']} ${styles['mobile-sidebar-trigger']}`} title="Abrir barra lateral" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-panel-left h-4 w-4']}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/></svg>
        </button>
        <div className={styles['dropdown']}>
        <button className={`${styles['chat-title-button']} ${styles['dropdown-trigger']}`} id="chat-title-dropdown-trigger">
        iAkademika
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-chevron-down ml-1 h-4 w-4']}><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div className={styles['dropdown-menu-content']} id="chat-title-dropdown">
        <button className={styles['dropdown-menu-item']}>Opção 1</button>
        <button className={styles['dropdown-menu-item']}>Opção 2</button>
        </div>
        </div>
        </div>
        <div className={styles['chat-header-actions']}>
        <button className={styles['icon-button']} title="Filtros">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-sliders-horizontal h-5 w-5']}><path d="M14.5 17H21"/><path d="M3 17h3.5"/><path d="M6.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M17.5 7H21"/><path d="M3 7h11.5"/><path d="M14.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
        </button>
        <div className={styles['user-avatar']} style={{ backgroundImage: "url('./assets/user-avatar.png')" }}></div>
        </div>
        </header>

        <div className={styles['chat-messages']} id="chat-messages">
        <div className={`${styles['message-bubble']} ${styles.ai}`}>
        <div className={`${styles.avatar} ${styles['ai-avatar']}`} style={{ backgroundImage: "url('./assets/ai-avatar.png')" }}>IA</div>
        <div className={styles['message-content']}>
        <h1 className={`${styles['text-3xl']} ${styles['font-serif']} ${styles['text-primary']} ${styles['mb-1']}`}>Olá, Thays!</h1>
        <p className={`${styles['text-xl']} ${styles['font-serif']} ${styles['text-blue-500']}`}>Vamos estudar?</p>
        </div>
        </div>
        <div className={`${styles['message-bubble']} ${styles.ai} ${styles['loading-dots']}`} style={{ display: 'none' }}>
        <div className={`${styles.avatar} ${styles['ai-avatar']}`} style={{ backgroundImage: "url('./assets/ai-avatar.png')" }}>IA</div>
        <div className={styles['message-content']}>
        <span className={styles['dot-animation']}></span>
        </div>
        </div>
        </div>

        <div className={styles['chat-input-container']}>
        <div className={styles['contextual-buttons-wrapper']}>
        <div className={`${styles['contextual-buttons']} ${showContextualButtons ? styles.show : ''}`} id="contextual-buttons">
        <span className={styles['contextual-prompt-text']}></span>
        <button className={`${styles.button} ${styles.outline} ${styles.small}`} data-action-type="resume">Resumir</button>
        <button className={`${styles.button} ${styles.outline} ${styles.small}`} data-action-type="exercise">Exercício</button>
        </div>
        </div>
        <div className={styles['input-wrapper']}>
        <button className={styles['icon-button']} title="Anexar Arquivo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-paperclip h-5 w-5']}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
        </button>
        <div className={styles.popover}>
        <button className={`${styles['icon-button']} ${styles['popover-trigger']}`} id="function-menu-trigger" title="Menu de Funções" onClick={() => setShowFunctionMenu(!showFunctionMenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-layout-grid h-5 w-5']}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
        </button>
        <div className={`${styles['popover-content']} ${showFunctionMenu ? styles.show : ''}`} id="function-menu-popover">
        <ul className={styles['menu-list']}>
        <li>
        <button className={`${styles['menu-item']} ${styles['has-submenu']}`} data-submenu-target="exercises-submenu" onClick={() => setShowExercisesSubmenu(!showExercisesSubmenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-brain h-4 w-4']}><path d="M12 5c-3.3 0-6 2.7-6 6 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.3-2.7-6-6-6Z"/><path d="M12 5v14"/><path d="M17.5 12h-11a4.5 4.5 0 1 1 0-9h11a4.5 4.5 0 1 1 0 9Z"/></svg>
        <span>Exercícios</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-chevron-right ml-auto h-4 w-4']}><path d="m9 18 6-6-6-6"/></svg>
        </button>
        </li>
        <li>
        <button className={styles['menu-item']} data-action-type="summaries">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-file-text h-4 w-4']}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        <span>Resumos</span>
        </button>
        </li>
        </ul>
        <div className={`${styles['popover-content']} ${styles.submenu} ${showExercisesSubmenu ? styles.show : ''}`} id="exercises-submenu">
        <ul className={styles['menu-list']}>
        <li><button className={styles['menu-item']} data-action-type="easy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-dot h-4 w-4']}><circle cx="12.1" cy="12.1" r="1"/></svg> Fácil</button></li>
        <li><button className={styles['menu-item']} data-action-type="medium"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-dot h-4 w-4']}><circle cx="12.1" cy="12.1" r="1"/></svg> Médio</button></li>
        <li><button className={styles['menu-item']} data-action-type="hard"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-dot h-4 w-4']}><circle cx="12.1" cy="12.1" r="1"/></svg> Difícil</button></li>
        </ul>
        </div>
        </div>
        </div>
        <input
        type="text"
        placeholder="Pergunte a iAkademika..."
        className={styles['chat-input']}
        id="message-input"
        value={messageInput}
        onChange={handleMessageInputChange}
        />
        <button className={styles['icon-button']} title="Entrada de Voz">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-mic h-5 w-5']}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
        </button>
        <button className={styles['send-button']} id="send-button" disabled={!messageInput.trim()} onClick={handleSendMessage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles['lucide lucide-arrow-right h-5 w-5']}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
        </div>
        </div>
        </div>

        <div id="toaster-container" className={styles['toaster-container']}></div>
        </div>
    );
};

export default ChatIa;
