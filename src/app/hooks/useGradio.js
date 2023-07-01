import React from 'react';
import { client } from '@gradio/client';

async function getHfToken() {
  const res = await fetch('/hftoken');
  const { hftoken } = await res.json();
  return hftoken;
}

function useGradio(project) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [gradioInterface, setGradioInterface] = React.useState(null);

  React.useEffect(() => {
    async function loadModel() {
      try {
        const app = await client(project, {
          hf_token: await getHfToken(),
          space_status: (space_status) => console.log(space_status)
        });
        await app.ready();
        setGradioInterface(app.interface);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    }
    loadModel();
  }, [project]);

  return { loading, error, gradioInterface };
}

export default useGradio