import React from 'react';
import {
    Link
} from "react-router-dom";
export default function Home() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ckeditor">Ck-Editor</Link>
                    </li>
                    <li>
                        <Link to="/quill">Quill Editor</Link>
                    </li>
                </ul>
            </nav>
        </>

    )

}