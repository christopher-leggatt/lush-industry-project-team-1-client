import React, { useState } from "react";
import './_CreateNewProfile.scss';
import ProfileIcons from '../../components/profileIcons/ProfileIcons';
import Card from '../../components/Card/Card';
import BlankSpace from '../../components/BlankSpace/BlankSpace';
import BackButton from '../../assets/icons/back-button.svg';
import { Link } from 'react-router-dom';

export const CreateNewProfile = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [pronunciation, setPronunciation] = useState('');
    const [pronouns, setPronouns] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <Link to='/'>
            <img className="back-button" src={BackButton} />
            </Link>
            <h2>Create A New User Profile</h2>
            <form className="create-form" onSubmit={handleSubmit}>

                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="*Add Customer Name" />

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="*Add Customer Email" id="email" name="email" />

                <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder="*Add Customer Phone Number" id="number" name="number" />

                <input value={pronunciation} onChange={(e) => setPronunciation(e.target.value)} type="pronunciation" placeholder="Add Recording Of Pronunciation" id="pronunciation" name="pronunciation" />

                <input value={pronouns} onChange={(e) => setPronouns(e.target.value)} type="pronouns" placeholder="Customer’s Preferred Pronouns" id="pronouns" name="pronouns" />
                <ProfileIcons />
                <button className="btn-create" type="submit">Create</button>
                <h3>Personalized Quizzes</h3>
                <Card />
                <BlankSpace height="5rem" />

            </form>
            
            

        </div>
    )
}

export default CreateNewProfile;
