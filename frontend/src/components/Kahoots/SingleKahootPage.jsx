import { useParams } from 'react-router-dom'


export default function SingleKahootPage() {

  const { kahootId } = useParams();

  return <h1>Hello from {kahootId} </h1>;
}
