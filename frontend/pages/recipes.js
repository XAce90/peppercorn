import fetch from 'node-fetch';
import Layout from '../components/Layout';
import RecipeCard from '../components/RecipeCard';

function Recipes({ response }) {
  return (
    <Layout title="My Recipes">
        <h1>Recipes</h1>
        {response.success ? 
          <React.Fragment>
            {response.data.map((recipe) => (
              <RecipeCard 
                key={recipe._id}
                name={recipe.name}
              />
            ))}
          </React.Fragment>
          : <h2>Failed to retrieve you're recipes.</h2>
        }
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/v1/recipes`);
  const response = await res.json();
  return { props: { response } };
}

export default Recipes;