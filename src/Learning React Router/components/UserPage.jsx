import { useParams } from "react-router-dom";

export function UserPage() {
    const {id} = useParams()
    console.log(id);
  return <h1>This is the user's page {id}</h1>;
}