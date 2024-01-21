export async function getAllEvents() {
    const response = await fetch( `https://jsonplaceholder.typicode.com/users`)

   

    const{ data }= await response.json();

    const events = [];

    for(const key in data){
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}



export const getStaticProps = async () => {

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );
  
  
    const data = await res.json()
  
  
  
  
  
    return {
      props: {
        products: data
      },
  
    };
  }





export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getStaticProps();
    return allEvents.find((event) => event.id === id);
  }