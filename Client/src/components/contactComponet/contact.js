import React from 'react'

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'
export default class Contact extends React.Component {


    constructor() { }





    state = {
        content: ''
    }


    handleStateChanges = (event) => {
        const target = event.target

        const { name, value } = target;

        this.setState({
            [name]: value,
        })

    }

    ckeditorstate = (event, editor) => {
        const data = editor.getData();
        this.setState({ content: data });
        console.log(data)
    }

    render() {
        return (
            <>
                <CKEditor
                    editor={ClassicEditor}

                    onChange={this.ckeditorstate}
                    config={
                        {
                            ckfinder: {
                                uploadUrl: 'http://localhost:3000/upload',
                                withCredentials: true,
                                headers: {
                                    'X-CSRF-TOKEN': 'CSFR-Token',
                                    Authorization: 'Bearer <JSON Web Token>'
                                }
                            }
                        }

                    }

                />
                {/* <div>{this.state.content}</div> */}
                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </>


        );
    }
}