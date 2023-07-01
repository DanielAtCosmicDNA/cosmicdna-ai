'use client'
import React from 'react';
import useGradio from "./hooks/useGradio";

function App() {
  const { loading, error, gradioInterface } = useGradio("Cosmic-DNA/chat-ui");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading model</div>;
  }

  return (
    <div>
      <h1>Gradio React Example</h1>
      {gradioInterface}
    </div>
  );
}

export default App;
