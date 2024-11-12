import { useEffect, useState } from "react";

const apiUrl = "https://dragonball-api.com/api/characters?limit=100";

function Characters() {
  const [charactersArray, setCharactersArray] = useState([]);
  const [displayError, setDisplayError] = useState(false);

  async function getCharacters() {
    try {
      const response = await fetch(apiUrl);
      const jsonResponse = await response.json();

      setCharactersArray(jsonResponse.items);
      setDisplayError(false);
    } catch (error) {
      console.log("There was an error");
      setDisplayError(true);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      {displayError && <div>ERROR LOADING DATA. BLAME THE DEVELOPER</div>}
      <ul>
        {charactersArray.length > 0 ? (
          <>
            {charactersArray.map((character) => {
              return (
                <article key={character.id}>
                  <img
                    width={"40rem"}
                    src={character.image}
                    alt="image of the character"
                  />
                  <h3>{character.name}</h3>
                </article>
              );
            })}
          </>
        ) : (
          <>{!displayError && <h2>Loading data...</h2>}</>
        )}
      </ul>
    </>
  );
}

export default Characters;
