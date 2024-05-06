import React from 'react';

const Header = () => {
    return (
        <header style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/seu_logo.png" alt="Logo" style={{ width: '100px' }} />
                <nav style={{ marginLeft: 'auto' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;