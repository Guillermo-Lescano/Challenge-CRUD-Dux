"use client"

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Usuario } from '@/dto/Usuarios.dto';
import { usersService } from '@/services/usuarios';

const Table = () => {
    const [users, setUsers] = useState<Usuario[]>([])
    
    const fetchData = async () => {
        const response = await usersService.getUsers()
        setUsers(response)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="card">
            <DataTable value={users} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '25%' }}></Column>
                <Column field="estado" header="Estado" style={{ width: '25%' }}></Column>
                <Column field="sector" header="Sector" style={{ width: '25%' }}></Column>
                <Column field="usuario" header="Usuario" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}

export default Table