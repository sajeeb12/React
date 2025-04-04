import { getImageUrl } from "./util";

function Avatar({ person, size }) {
    return <div>
        <h1>{person.name}</h1>
        <img
            src={getImageUrl(person)}
            alt="{person.name}"
            width={size}
            height={size}
        />
    </div>

}


function Profile({ persons, size = 70 }) {
    const imageSrc = getImageUrl(persons.imageId)
    return (
        <div>
            <h1>Notable Scientists</h1>
            <section className="profile">
                <h2>{persons.Name}</h2>
                <img
                    className="avatar"
                    src={imageSrc}
                    alt="{persons.name}"
                    width={size}
                    height={size}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {persons.profession}
                    </li>
                    <li>
                        <b>Awards: {persons.Awards.length} </b>
                        ({persons.Awards.join(", ")})
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {persons.discovered}
                    </li>
                </ul>
            </section>

        </div>
    );
}



const Props = () => {
    return (
        <div>
            <h2>Props Practice</h2>
            <Avatar
                person={{
                    name: "Lin Lanying",
                    imageId: "1bX5QH6",

                }}
                size={100}
            />
            <Profile persons={{
                Name: "Maria Skłodowska-Curie",
                imageId: "YfeOqp2",
                profession: "physicist and chemist",
                Awards: [
                    "Nobel Prize in Physics",
                    "Nobel Prize in Chemistry",
                    "Davy Medal",
                    "Matteucci Medal"
                ],
                discovered: "polonium (chemical element)"
            }}
                size={70}
            />
        </div>
    )
}

export default Props