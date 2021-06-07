import { useMutation, useQuery } from '@apollo/client';
import { GET_POST } from '../../services/graphql/modules/post/queries';
import { CREATE_USER } from '../../services/graphql/modules/user/mutation';
import './styles.css';

interface Post {
  title: string;
  content: string;
  published: boolean;
}

function Home() {
  const { loading, error, data } = useQuery<{ post: Post }>(GET_POST, {
    variables: { id: '453d7e74-7bb3-4898-9a1d-5bb0ac65e423' }
  });

  const [createUser, { data: userData }] = useMutation(CREATE_USER);

  function handleCreateUser() {
    createUser({ variables: { name: 'Pedro', email: 'contato2@pedro.com' } })
  }

  if (loading || error) return null;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data?.post.title}</h1>
        <h1>{userData?.createUser.name}</h1>
        <button onClick={handleCreateUser}>Criar usuário</button>
      </header>
    </div>
  );
}

export default Home;
