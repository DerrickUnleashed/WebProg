import React from "react";
import Q1_1 from "./solutions/Q1_1";
import Q1_2 from "./solutions/Q1_2";
import Q1_3 from "./solutions/Q1_3";
import Q2 from "./solutions/Q2";
import Q3 from "./solutions/Q3";
import Q4 from "./solutions/Q4";
import Q5 from "./solutions/Q5";
import Q6 from "./solutions/Q6";
import Q7 from "./solutions/Q7";
import Q8 from "./solutions/Q8";
import Q9 from "./solutions/Q9";
import Q10 from "./solutions/Q10";
import Q11 from "./solutions/Q11";
import Q12 from "./solutions/Q12";

function App() {
    return (
        <div>
            <Q1_1 />
            <Q1_2 />
            <Q1_3 />
            <Q2 />
            <Q3 />
            <Q4 a={3} b={4} />
            <Q5 isMorning={true} />
            <Q6 />
            <Q7 number={7} />
            <Q8 />
            <Q9 text="String" />
            <Q10 />
            <Q11 year={2024} />
            <Q12 firstName="Derrick" lastName="Samuel" />
        </div>
    );
}

export default App;
