import {useSelector} from "react-redux";

const UserTable = () => {
    const { firstName, lastName, email, message } = useSelector(state => state)

    return (
        <div className="Table">
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{message}</td>
                </tr>
            </table>
        </div>
    );
};

export default UserTable;