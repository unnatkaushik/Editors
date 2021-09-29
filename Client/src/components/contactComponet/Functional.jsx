import React, { useState } from 'react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'
export default function Functional() {

    const [data, setData] = useState();
    const ckeditorstate = (event, editor) => {
        const data = editor.getData();
        console.log(data)
        setData(data)
    }
    return (
        <>
            <CKEditor
                editor={ClassicEditor}

                onChange={ckeditorstate}
                config={
                    {
                        ckfinder: {
                            uploadUrl: "http://localhost:3000/upload",
                            withCredentials: true,
                            headers: {
                                'X-CSRF-TOKEN': 'CSFR-Token',
                                Authorization: 'Bearer <JSON Web Token>'
                            }
                        }
                    }

                }

            />
            <div dangerouslySetInnerHTML={{ __html: data }} />
        </>
    )

}