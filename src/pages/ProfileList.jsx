import {Link} from "react-router-dom";
const people = [
    { id: 1, name: "Anu", price: "₹300 / 5hrs", hobby: "Watching Movies" },
    { id: 2, name: "Rahul", price: "Free", hobby: "Snacking & chatting" }
];
export default function ProfileList() {
    return (
        <div>
            <h2>People Nearby</h2>
            {people.map((person) => (
                <div key = {person.id}>
                    <h3>{person.name}</h3>
                    <p>{person.price}</p>
                    <p>{person.hobby}</p>
                    
                </div>
            ))}
        </div>
    )
}