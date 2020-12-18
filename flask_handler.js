useEffect(() => {
    fetch("flask uri").then(response =>
      response.json().then(data => {
        setEntities(data.text); // need to complete
      })
    );
  }, []);

return (
    <Container style={{ marginTop: 40 }}>
      <MovieForm
        onNewentity={entity =>
          setentity(currententity=> [data])
        }
      />
      <Entity entity ={entity} />
    </Container>
  );
}
