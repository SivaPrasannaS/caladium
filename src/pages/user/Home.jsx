import { useEffect, useState } from "react"
import { userList } from "../../services/user"

const Home = () => {

    const [userListData, setUserList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await userList();
                setUserList(response.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            {
                userListData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </div>
    )
}

export default Home