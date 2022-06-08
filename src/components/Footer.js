import { Link } from 'react-router-dom';

const Footer = () => {
    const links = [
        {
            name: 'Legacy',
            to: '/'
        },
        {
            name: 'Expertise',
            to: '/expertise'
        },
        {
            name: 'Stones',
            to: '/stones'
        },
        {
            name: 'Projects',
            to: '/projects'
        },
        {
            name: 'Contact',
            to: '/contact'
        },

    ];
    return (
        <footer>
            {links.map(link => { return <Link to={link.to}>{link.name}</Link> })}
        </footer>
    )
}

export default Footer