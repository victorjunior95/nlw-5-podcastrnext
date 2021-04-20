// SPA -> Single Page Application
  // import { useEffect } from "react"

  // export default function Home() {
  //   useEffect(() => {
  //     fetch('http://localhost:3333/episodes')
  //       .then(response => response.json())
  //       .then(data => console.log(data));
  //   }, []);

  //   return (
  //     <h1>Index</h1>
  //   )
  // }

// SSR -> Server Side Rendering
  // export default function Home(props) {
  //   // console.log(props.episodes);

  //   return (
  //     <div>
  //       <h1>Index</h1>
  //       {/* com o JavaScript desabilitado no browser/client */}
  //       <p>{JSON.stringify(props.episodes)}</p> {/* console.log() */}
  //     </div>
  //   )
  // }

  // export async function getServerSideProps() {
  //   const response = await fetch('http://localhost:3333/episodes');
  //   const data = await response.json();

  //   return {
  //     props: {
  //       episodes: data, 
  //     }
  //   };
  // }

// SSG -> Static Site Generation
export default function Home(props) {
  // console.log(props.episodes);

  return (
    <div>
      <h1>Index</h1>
      {/* com o JavaScript desabilitado no browser/client */}
      <p>{JSON.stringify(props.episodes)}</p> {/* console.log() */}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data, 
    },
    revalidate: 60 * 60 * 8, 
  };
}

