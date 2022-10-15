import { useEffect } from 'react';
import useStore from '../store';
// import { HomeWrapper } from "../styles/styled";
import { Api } from '../utils/api';
// import Showcase from "./Showcase/Showcase";

const HomeFeatured = () => {
  const { featured } = useStore((state) => state);
  const setHomeFeatured = useStore((state) => state.setHomeFeatured);

  useEffect(() => {
    if (featured !== undefined) return;
    const results = async () => {
      const API = new Api();
      const feat = await API.fetchFeatured();
      setHomeFeatured(feat);
    };

    results();
  }, [featured, setHomeFeatured]);

  return featured ? <h1>{JSON.stringify(featured)}</h1> : <h1>Loading</h1>;
  // return (
  //    <HomeWrapper>
  //       {featured?.map((show, index) => (
  //          <Showcase key={String(index)} results={show.results} title={show.label} />
  //       ))}
  //    </HomeWrapper>
  // )
};

export default HomeFeatured;
