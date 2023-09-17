import './_Home.scss';

export const Home = (props) => {

    return (
        <div className="auth-form-container">
            <h2>Select Shopper Profile Type</h2>
            <button type="submit">Search For Lush Member</button>
            <button onClick={() => props.onFormSwitch('register')}>Create A New User Profile</button>
            <button type="submit">Continue Shopping As A Guest</button>
        </div>
    )
}

export default Home;