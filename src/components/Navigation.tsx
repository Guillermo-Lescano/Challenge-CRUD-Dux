import React from 'react'
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';          // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';                        // Iconos de PrimeReact
import 'primeflex/primeflex.css';                          // Utilidades de PrimeFlex

type Props = {}

const Navigation = (props: Props) => {
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Contact',
            icon: 'pi pi-cog'
        }
    ];
    
    return (
        <div className="card">
            <Menubar style={{ backgroundColor: 'white'}} model={items} />
        </div>
    )
}

export default Navigation