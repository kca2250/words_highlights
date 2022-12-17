import useSWR from "swr";
import { Card } from "../features/users/components/Card";
import { fetcher } from "../features/users/fetcher";

export default function Home() {
  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = useSWR(baseURL, fetcher);

  return (
    <div style={{ margin: "auto", width: "800px" }}>
      {users === undefined ? (
        <p>ユーザーが見つかりません。</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <Card {...user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
