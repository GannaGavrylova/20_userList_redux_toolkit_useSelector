import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.user.data);
  return (
    <div className={styles.container_list}>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
