import '../App.css';
import React from 'react';
import { PageHeader } from "../components/PageHeader";
import { NavBar } from "../components/NavBar";

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <PageHeader/>
                <NavBar />
            </div>
            
        );
    }

}

export default Home;