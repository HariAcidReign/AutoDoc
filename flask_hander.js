  
  
  useEffect(() => {
    fetch("flask uri").then(response =>
      response.json().then(data => {
        setEntities(data.text); // need to complete
      })
    );
  }, []);
