import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { apiUrl } from "../../config/apiConfig";

function Home() {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setItems(data)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
      setLoading(false)
    }); 
  }, [])

  return (
    <Layout>
      Home
      {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {items?.map(item => (
              <Card key={item.id} data={item} />
            )) || "No items to display"}
          </div>
        )}
    </Layout>
  );
}

export default Home;
