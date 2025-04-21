function Q3() {
    return (
        <>
            <style>
                {`
                    .center-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .red-button {
                        background-color: red;
                        padding: 10px;
                        font-size: 25px;
                    }
                `}
            </style>
            <h1>Question 3</h1>
            <div className="center-container">
                <button className="red-button">Click here</button>
            </div>
        </>
    );
}

export default Q3;
