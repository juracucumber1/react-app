import React, {Fragment, createContext, useContext, useEffect} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Home = () => {
    const {loading,notes, fetchNotes} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    },[])

    return (
    <Fragment>
        <Form />

        <hr/>

        <Notes notes={notes}/>
    </Fragment>
    )
}