import React from 'react';
import Link from '../src/components/Link/index'

export default function Dashboard() {
    return (
        <div>
            <p>dashboard</p>
            <Link href={`/`}>home</Link>
            <Link href={`/guia`}>guia de pesquisa</Link>
            <Link href={`/carreiras`}>informaçoes de carreiras</Link>
        </div>
    )}