import * as actions from "../../redux/actions/actions";

describe("actions", () => {
  it("should create an action to fetch characters request", () => {
    const expectedAction = {
      type: actions.FETCH_CHARACTERS_REQUEST,
    };
    expect(actions.fetchCharactersRequest()).toEqual(expectedAction);
  });

  it("should create an action to fetch characters success", () => {
    const characters = [{ id: 1, name: "Character 1" }];
    const totalResults = 1;
    const expectedAction = {
      type: actions.FETCH_CHARACTERS_SUCCESS,
      payload: {
        characters,
        totalResults,
      },
    };
    expect(actions.fetchCharactersSuccess(characters, totalResults)).toEqual(
      expectedAction,
    );
  });

  it("should create an action to fetch characters failure", () => {
    const error = "Error fetching characters";
    const expectedAction = {
      type: actions.FETCH_CHARACTERS_FAILURE,
      payload: error,
    };
    expect(actions.fetchCharactersFailure(error)).toEqual(expectedAction);
  });

  it("should create an action to search characters request", () => {
    const query = "Spider-Man";
    const expectedAction = {
      type: actions.SEARCH_CHARACTERS_REQUEST,
      payload: query,
    };
    expect(actions.searchCharactersRequest(query)).toEqual(expectedAction);
  });

  it("should create an action to fetch comics request", () => {
    const characterId = "123";
    const expectedAction = {
      type: actions.FETCH_COMICS_REQUEST,
      payload: { characterId },
    };
    expect(actions.fetchComicsRequest(characterId)).toEqual(expectedAction);
  });

  it("should create an action to fetch comics success", () => {
    const comics = [{ id: 1, title: "Comic 1" }];
    const expectedAction = {
      type: actions.FETCH_COMICS_SUCCESS,
      payload: comics,
    };
    expect(actions.fetchComicsSuccess(comics)).toEqual(expectedAction);
  });

  it("should create an action to fetch comics failure", () => {
    const error = "Error fetching comics";
    const expectedAction = {
      type: actions.FETCH_COMICS_FAILURE,
      payload: error,
    };
    expect(actions.fetchComicsFailure(error)).toEqual(expectedAction);
  });

  it("should create an action to add to favorites", () => {
    const characterId = "123";
    const expectedAction = {
      type: actions.ADD_TO_FAVORITES,
      payload: characterId,
    };
    expect(actions.addToFavorites(characterId)).toEqual(expectedAction);
  });

  it("should create an action to remove from favorites", () => {
    const characterId = "123";
    const expectedAction = {
      type: actions.REMOVE_FROM_FAVORITES,
      payload: characterId,
    };
    expect(actions.removeFromFavorites(characterId)).toEqual(expectedAction);
  });

  it("should create an action to update characters", () => {
    const newCharacters = [{ id: 1, name: "Updated Character 1" }];
    const expectedAction = {
      type: actions.UPDATE_CHARACTERS,
      payload: newCharacters,
    };
    expect(actions.updateCharacters(newCharacters)).toEqual(expectedAction);
  });

  it("should create an action to select character", () => {
    const character = { id: 1, name: "Selected Character" };
    const expectedAction = {
      type: actions.SELECT_CHARACTER,
      payload: character,
    };
    expect(actions.selectCharacter(character)).toEqual(expectedAction);
  });
});
