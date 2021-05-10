import React from 'react';

const divStyle = {
    color:'black'
};

class Hospital extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h2>Hospital Page</h2>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}

export default Hospital;